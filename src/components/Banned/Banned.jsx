import React from "react";
import { StyleSheet, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Banned = () => {
  return (
    <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
      <Text style={styles.text}>¡Cuenta deshabilitada!</Text>
      <Image
        style={styles.img}
        source={require("../../imgs/error.png")}
      ></Image>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    justifyContent: "space-evenly",
    flex: 1,
  },
  img: {
    height: 300,
    width: 300,
    alignSelf: "center",
    padding: 5,
  },
  text: {
    color: "#fff",
    fontSize: 45,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Banned;
