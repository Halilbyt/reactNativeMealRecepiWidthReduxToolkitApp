import { View, Text, StyleSheet } from "react-native";
//import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import MealFavList from "../components/mealList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
function FavoriteScreen() {
  //const FavoriteContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={style.container}>
        <Text style={style.textArea}>
          There was not added any Favorite Meal yet..
        </Text>
      </View>
    );
  }
  return <MealFavList items={favoriteMeals} />;
}

export default FavoriteScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textArea: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#fa1",
    textAlign: "center",
  },
});
