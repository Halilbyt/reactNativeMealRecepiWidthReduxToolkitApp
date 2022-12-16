import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";
import { FontAwesome5 } from "@expo/vector-icons";
//import FavoriteContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// setup drawer navigation  function
function DrawerNavigationHandler() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351321" },
        headerTintColor: "#fff",
        sceneContainerStyle: { backgroundColor: "#3f3f15" }, // only this part is diffirent from stact navigations we use sceneContainerStyle
        drawerContentStyle: { backgroundColor: "#351321" },
        drawerInactiveTintColor: "#fff",
        drawerActiveTintColor: "#f90",
        drawerActiveBackgroundColor: "#3f3f15",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="phoenix-framework" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        {/* <FavoriteContextProvider> */}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351321" },
              headerTintColor: "#fff",
              contentStyle: { backgroundColor: "#3f3f15" },
            }}
          >
            <Stack.Screen
              component={DrawerNavigationHandler}
              name="DrawerNavigation"
              options={{
                //title: " Meals Categories",
                headerShown: false, // get rid of the header title for this section of navigation.
              }}
            />
            <Stack.Screen
              component={MealOverviewScreen}
              name="MealScreen"
              // options={({ route, navigation }) => {
              //   const catTitle = route.params.categoryTitle;
              //   return {
              //     title: catTitle,
              //   };
              // }}
              // *alternative way to change title*
            />
            <Stack.Screen
              component={MealDetailScreen}
              name={"MealDeteilScreen"}
              // putting element top-right of screen
              // options={{
              //   headerRight: () => {
              //     return <Text>Header</Text>;
              //   },
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavoriteContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
