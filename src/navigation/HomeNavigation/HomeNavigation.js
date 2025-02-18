import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Menu from "../../screens/Menu";
import Home from "../../screens/Home";
import DishDetails from "../../screens/DishDetails";

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="DishDetails" component={DishDetails} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
