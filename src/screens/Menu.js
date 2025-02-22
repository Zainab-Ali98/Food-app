import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { getAllRestaurantsItem } from "../API/Category";

const Menu = ({ route }) => {
  const { Restaurant } = route.params;
  const navigation = useNavigation();
  const [menuItems, setMenuItems] = useState([]);
  console.log("MEOW");
  useEffect(() => {
    const fetchMenuItems = async () => {
      const items = await getAllRestaurantsItem(Restaurant._id);
      console.log(`Id: ${Restaurant._id} items: ${items}`);
      setMenuItems(items);
    };
    fetchMenuItems();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Menu</Text>

        {menuItems.map((item) => (
          <TouchableOpacity
            key={item._id}
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
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#cce6ff",
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
