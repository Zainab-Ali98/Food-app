import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import RestaurantCard from "../components/RestaurantCard";
// import restaurantCategories from "../data/restaurantCategories";
// import restaurants from "../data/restaurants";
import { getAllCategory } from "../API/Category";
import { getAllResturants } from "../API/Category";
// import { getAllResturantsByID } from "../API/Category";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const displayategories = categories.map((category) => (
    <CategoryCard
      key={category._id}
      category={category}
      setCategoryName={setCategoryName}
    />
  ));

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await getAllCategory();
      setCategories(res);
    };
    fetchCategory();
  }, []);

  const [restaurants, setRestaurants] = useState([]);
  const displayRest = restaurants
    .filter((rest) => rest.category.name === categoryName)
    .map((restaurant) => (
      <RestaurantCard key={restaurant._id} Restaurant={restaurant} />
    ));

  useEffect(() => {
    const fetchRestaurants = async () => {
      const res = await getAllResturants();
      setRestaurants(res);
    };
    fetchRestaurants();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome to Our Foodie App</Text>
      <Text style={styles.title}>Categories</Text>
      <ScrollView
        style={{
          maxHeight: 200,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {displayategories}
      </ScrollView>

      <Text style={styles.title}>Restaurants</Text>
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        {displayRest.length === 0 ? (
          <Text style={styles.body}>Choose a category</Text>
        ) : (
          displayRest
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6f7ff",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#004d99",
    textAlign: "center",
    marginVertical: 20,
    backgroundColor: "#cce6ff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#004d99",
    textAlign: "center",
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryCard: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  RestaurantCard: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#cce6ff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 10,
    width: "90%",
  },
  body: {
    color: "grey",
    marginBottom: 30,
  },
});
