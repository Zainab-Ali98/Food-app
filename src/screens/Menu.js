import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
// import menuItems from "../data/menuItems";
import { useNavigation } from "@react-navigation/native";

const Menu = ({ route }) => {
  const { Restaurant } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      {Restaurant.menuItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.menuItem}
          onPress={() => navigation.navigate("DishDetails", { dish: item })}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.price}>{item.price}Kd</Text>
          <Button
            title="Add to Cart"
            onPress={() => alert(`${item.name} added to cart!`)}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  menuItem: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    color: "#28a745",
    marginBottom: 10,
  },
});
