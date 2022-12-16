import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

function MealFavList({ items }) {
  function renderMealFavListHandler(itemData) {
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealFavListHandler}
      />
    </View>
  );
}

export default MealFavList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
