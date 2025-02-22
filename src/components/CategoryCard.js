import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCard = ({ category, setCategoryName }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setCategoryName(category.name);
      }}
    >
      <View style={styles.categoryCard}>
        <Image
          source={{
            uri: category.image,
          }}
          width={100}
          height={100}
          resizeMode="contain"
        />
        <Text> {category.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  categoryCard: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    gap: 15,
    backgroundColor: "#e6f7ff",
    opacity: 1,
  },
});
