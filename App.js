import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import Menu from "./src/screens/Menu";
import DishDetails from "./src/screens/DishDetails";
import MyCart from "./src/screens/MyCart";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation/AuthNavigation";
import HomeNavigation from "./src/navigation/HomeNavigation/HomeNavigation";
import MainNavigation from "./src/navigation/MainNavigation/MainNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <NavigationContainer>
          {/* <Home /> */}
          {/* <Menu /> */}
          {/* <DishDetails /> */}
          {/* <MyCart /> */}
          {/* <Login /> */}
          {/* <Register /> */}
          {/* {<HomeNavigation />} */}
          {/* <AuthNavigation /> */}
          <MainNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    //justifyContent: "center",
  },

  categoryCard: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    gap: 15,
  },

  RestaurantCard: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    gap: 15,
  },
});
