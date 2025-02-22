import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "../HomeNavigation/HomeNavigation";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import CartNavigation from "../CartNavigation/CartNavigation";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        tabBarStyle: { backgroundColor: "#e6f7ff" },
        
      }}
    >
      <Tab.Screen
        name="HomeNav"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="AuthNav"
        component={AuthNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
          tabBarLabel: "Account",
        }}
      />
      <Tab.Screen
        name="CartNav"
        component={CartNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="cart" size={24} color="black" />
          ),
          tabBarLabel: "MyCart",
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
