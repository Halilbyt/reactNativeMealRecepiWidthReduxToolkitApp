import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
function MealDetails({ route, navigation, id }) {
  const selectedMeals = MEALS.find((meal) => meal.id === id);
  let details = {
    duration: selectedMeals.duration.toString().toUpperCase(),
    complexity: selectedMeals.complexity.toUpperCase(),
    afford: selectedMeals.affordability.toUpperCase(),
    imageURL: selectedMeals.imageUrl,
    title: selectedMeals.title.toUpperCase(),
  };
  return (
    <ScrollView>
      <View>
        <Image source={{ uri: details.imageURL }} style={styles.image} />
        <Text style={styles.title}>{details.title} </Text>
        <View style={styles.details}>
          <Text style={styles.detailsText}>{details.duration} min </Text>
          <Text style={styles.detailsText}>{details.complexity}</Text>
          <Text style={styles.detailsText}>{details.afford}</Text>
        </View>

        <View style={styles.containerUpper}>
          <View style={styles.detailContainer}>
            <Text style={styles.detailHeader}>Ingredients</Text>
            {selectedMeals.ingredients.map((ingrd) => (
              <Text style={styles.listItem} key={ingrd}>
                {ingrd}
              </Text>
            ))}
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.detailHeader}>Steps</Text>
            {selectedMeals.steps.map((step) => (
              <Text style={styles.listItem} key={step}>
                {step}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  containerUpper: {
    marginTop: 15,
  },
  detailContainer: {},
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
    color: "#f1f1f1",
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    textAlign: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#f1f1f1",
    marginHorizontal: 8,
    marginVertical: 4,
    paddingBottom: 15,
  },
  detailContainer: {
    padding: 16,
    borderWidth: 1,
    marginBottom: 15,
    borderColor: "#3f3f15",
    backgroundColor: "#3f4612",
    borderRadius: 15,
  },
  detailsText: {
    marginHorizontal: 5,
    fontSize: 12,
    color: "#f1f1f1",
  },
  detailHeader: {
    fontSize: 18,
    color: "#f1f1f1",
    fontWeight: "bold",
    marginBottom: 8,
    marginLeft: 4,
  },
  listItem: {
    padding: 8,
    marginVertical: 3,
    backgroundColor: "#351321",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#351321",
    color: "#f1f1f1",
  },
});
