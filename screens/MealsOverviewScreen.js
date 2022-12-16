import { useEffect, useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealDetails from "../components/mealDetails";

function MealOverviewScreen({ navigation, route }) {
  // there are two item that sended to MealOverviewscreen with navigation
  const catId = route.params.categoryId;
  const categoryTitleDetail = route.params.categoryTitle;

  // using useEffect method to prevent side effect of setOptions method of navigation.
  useLayoutEffect(() => {
    // getting category title from Categories
    const categoryTitle = CATEGORIES.find((item) => item.id === catId).title;

    // useing navigation setOptions property to change page title
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const hookRoute = useRoute(); // alternative way to get route object as hook;

  // getting meals that corrersponding to catId.
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  // navigate detail page
  // function MealDetailScreenHandler() {
  //   navigation.navigate("MealDeteilScreen", {
  //     itemTite: categoryTitleDetail,
  //   });
  // }

  function renderMealItems(itemData) {
    const item = itemData.item;
    const mealItemPorps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemPorps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItems}
      />
    </View>
  );
}

export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
