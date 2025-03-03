import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyCart from "../../screens/MyCart";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { deleteToken } from "../../API/storage";
import UserContext from "../../Context/UserContext";

const Stack = createNativeStackNavigator();

const CartNavigation = () => {
  const { isAuth, setIsAuth } = useContext(UserContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: true,
        tabBarStyle: { backgroundColor: "#e6f7ff" },
      }}
    >
      <Stack.Screen
        name="MyCart"
        component={MyCart}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  deleteToken();
                  setIsAuth(false);
                }}
              >
                <MaterialIcons name="logout" size={20} color="red" />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigation;

const styles = StyleSheet.create({});
