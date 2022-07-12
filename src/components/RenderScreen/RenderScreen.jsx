import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

const RenderScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to!</Text>
      <Image
        style={styles.image}
        source={require("../../imgs/HenryBank.png")}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "white",
    height: 450,
    width: 350,
    borderRadius: 8,
    alignItems: "center",
    paddingTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 100,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
export default RenderScreen;
