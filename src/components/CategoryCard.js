import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <View style={styles.categoryCard}>
      <Image
        source={{
          uri: category.categoryImage,
        }}
        width={100}
        height={100}
        resizeMode="contain"
      />
      <Text>Title: {category.categoryName}</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  categoryCard: {
    width: 150,
    height: 150,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    gap: 15,
    backgroundColor: "white",
  },
});
