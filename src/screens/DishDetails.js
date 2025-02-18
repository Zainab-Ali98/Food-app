import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import restaurants from "../data/restaurants";

const DishDetails = ({ route }) => {
  const { dish } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: dish.image }} style={styles.image} />
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <Text style={styles.ingredients}>{dish.ingredients}</Text>
      <Text style={styles.price}>{dish.price}Kd</Text>
      <Button
        title="Add to Cart"
        onPress={() => alert(`${dish.name} added to cart!`)}
      />
    </View>
  );
};

export default DishDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  ingredients: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    fontStyle: "italic",
  },
  price: {
    fontSize: 20,
    color: "#28a745",
    marginBottom: 10,
    textAlign: "center",
  },
});
