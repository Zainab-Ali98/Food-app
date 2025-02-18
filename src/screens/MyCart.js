import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import cartItems from "../data/cartItems";
import { useNavigation } from "@react-navigation/native";

const MyCart = () => {
  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {item.name} x{item.quantity}
            </Text>
            <Text style={styles.itemText}>{item.price * item.quantity}Kd</Text>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Cost: {totalCost}Kd</Text>
      </View>
    </View>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 18,
  },
  totalContainer: {
    marginTop: 20,
    alignItems: "flex-end",
  },
  totalText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
