import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryCard from "../components/CategoryCard";
import RestaurantCard from "../components/RestaurantCard";
import restaurantCategories from "../data/restaurantCategories";
import restaurants from "../data/restaurants";

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          // flex: 1,
          maxHeight: 200,
        }}
        horizontal
      >
        {restaurantCategories.map((category) => (
          <CategoryCard category={category} />
        ))}
      </ScrollView>

      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        {restaurants.map((Restaurant) => (
          <RestaurantCard Restaurant={Restaurant} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    //justifyContent: "center",
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
  },
});
