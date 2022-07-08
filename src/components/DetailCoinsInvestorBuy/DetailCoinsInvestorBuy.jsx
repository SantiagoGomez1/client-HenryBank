import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

var { height } = Dimensions.get("window");

export default function DetailCoinsInvestorBuy({ route }) {
  const { id, image, name, symbol } = route.params;
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <View style={{ display: "flex", alignItems: "center" }}>
          <Image style={styles.img} source={{ uri: image }} />
        </View>
        <View style={styles.card}>
          <Text style={{ color: "white" }}>Name: {name}</Text>
          <Text style={{ color: "white" }}>Ticket: {symbol}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "space-around",
    height: height,
  },
  img: {
    width: 100,
    height: 100,
  },
  card: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
});
