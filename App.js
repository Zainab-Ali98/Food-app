import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
// import Home from "./src/screens/Home";
// import Menu from "./src/screens/Menu";
// import DishDetails from "./src/screens/DishDetails";
// import MyCart from "./src/screens/MyCart";
// import Login from "./src/screens/Login";
// import Register from "./src/screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation/AuthNavigation";
// import HomeNavigation from "./src/navigation/HomeNavigation/HomeNavigation";
import MainNavigation from "./src/navigation/MainNavigation/MainNavigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserContext from "./src/Context/UserContext";
import { useEffect, useState } from "react";
import { deleteToken, getToken } from "./src/API/storage";

export default function App() {
  const queryClinet = new QueryClient();
  const [isAuth, setIsAuth] = useState(false);

  const checkToken = async () => {
    const token = await getToken();
    if (token) {
      setIsAuth(true);
    }
  };
  useEffect(() => {
    // deleteToken();
    checkToken();
  });
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <QueryClientProvider client={queryClinet}>
          <UserContext.Provider value={{ isAuth, setIsAuth }}>
            {isAuth ? <MainNavigation /> : <AuthNavigation />}
            {/* <Home /> */}
            {/* <Menu /> */}
            {/* <DishDetails /> */}
            {/* <MyCart /> */}
            {/* <Login /> */}
            {/* <Register /> */}
            {/* {<HomeNavigation />} */}
            {/* <AuthNavigation /> */}
            {/* <MainNavigation /> */}
          </UserContext.Provider>
        </QueryClientProvider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
