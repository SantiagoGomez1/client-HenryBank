import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StripeApp from "../StripeApp/StripeApp.jsx";

const RenderScreenIngresar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ingresar Dinero</Text>
      <StripeApp />
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
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default RenderScreenIngresar;
