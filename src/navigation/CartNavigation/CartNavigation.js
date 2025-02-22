import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyCart from "../../screens/MyCart";

const Stack = createNativeStackNavigator();

const CartNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        tabBarStyle: { backgroundColor: "#e6f7ff" },
      }}
    >
      <Stack.Screen name="MyCart" component={MyCart} />
    </Stack.Navigator>
  );
};

export default CartNavigation;

const styles = StyleSheet.create({});
