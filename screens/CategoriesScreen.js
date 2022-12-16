import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoriesGridTile from "../components/CategoriesGridTile";
import { StyleSheet } from "react-native";

function CategoriesScreen({ navigation }) {
  // render items funciton
  function renderCategoryItems(itemData) {
    // on press
    function pressHandler() {
      // passing data object to Meal Screen component
      navigation.navigate("MealScreen", {
        categoryId: itemData.item.id,
        categoryTitle: itemData.item.title,
      });
    }

    return (
      //my costum grid component
      <CategoriesGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
        navigation={navigation}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItems}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({});
