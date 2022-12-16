import { View, Pressable, Text, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
function CategoriesGridTile({ title, color, onPress, navigation }) {
  //const navigation = useNavigation(); // using navigation object alternative usage
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#f1f1f1" }}
        style={styles.button}
        onPress={onPress}
        navigation={navigation} //fowarding navigation object as porps nested components (test it**)
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CategoriesGridTile;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 6,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
