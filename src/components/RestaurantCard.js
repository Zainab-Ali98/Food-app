import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import React from "react";

const RestaurantCard = ({ Restaurant }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Menu", { Restaurant });
      }}
    >
      <View style={styles.RestaurantCard}>
        <Image
          source={{
            uri: Restaurant.image,
          }}
          width={150}
          height={250}
          resizeMode="contain"
        />
        <Text>Title: {Restaurant.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  categoryCard: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    gap: 15,
    backgroundColor: "white",
  },
});
