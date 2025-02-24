import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const MenuCard = ({ menu }) => {
  return (
    <View style={styles.MenuCard}>
      <Image
        source={{
          uri: menu.image,
        }}
        width={100}
        height={100}
        resizeMode="contain"
      />
      <Text>Title: {menu.name}</Text>
      <Text>Title: {menu.price}</Text>
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  MenuCard: {
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
