import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Investor = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.text}>
          Estamos trabajando en el apartado de estadisiticas
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#fff",
  },
  background: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
  },
});

export default Investor;
