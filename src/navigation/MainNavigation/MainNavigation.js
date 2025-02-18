import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "../HomeNavigation/HomeNavigation";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
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
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
