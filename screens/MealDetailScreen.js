import { View, Text, StyleSheet, Alert, Button } from "react-native";
import MealDetails from "../components/mealDetails";
import { useContext, useEffect, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/iconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
//import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }) {
  //const favoriteMealContext = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const id = route.params.mealId;

  // when use enter the detail page make sure its favorite or not
  const mealIsFavorite = favoriteMealIds.includes(id);

  // header button handler
  function headerButtonHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: id }));
      //favoriteMealContext.removeFavorite(id);
    } else {
      //favoriteMealContext.addFavorite(id);
      dispatch(addFavorite({ id: id }));
    }
  }

  // adding button top-right corner of the screen:
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "md-star" : "md-star-outline"}
            color="#a1fff1"
            onPress={headerButtonHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonHandler]);

  // setting screen title from useLayoutEffect from react
  useLayoutEffect(() => {
    const mealDetailTitle = MEALS.find((item) => item.id === id).title;
    navigation.setOptions({
      title: mealDetailTitle,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MealDetails id={id} />
    </View>
  );
}

export default MealDetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
