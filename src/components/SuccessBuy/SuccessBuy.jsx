import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";

export default function SuccessBuy({ route, navigation }) {
  const { success } = route.params;

  if (success === 1) {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textMain}>Compra exitosa</Text>
        <Image
          style={styles.imgS}
          source={require("../../imgs/Check.png")}
        ></Image>
        <Text style={styles.text0}>
          {setTimeout(() => {
            navigation.navigate("HomeRoutes");
          }, 1500)}
        </Text>
      </LinearGradient>
    );
  }
  if (success === 2) {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textMain}>Saldo insuficiente</Text>
        <Image
          style={styles.imgS}
          source={require("../../imgs/error.png")}
        ></Image>
        <Text style={styles.text0}>
          {setTimeout(() => {
            navigation.navigate("HomeRoutes");
          }, 1500)}
        </Text>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    paddingTop: Constants.statusBarHeight,
  },
  textMain: {
    color: "#fff",
    fontSize: 45,
    textAlign: "center",
  },
  imgS: {
    height: 300,
    width: 300,
    alignSelf: "center",
    padding: 5,
  },
  text0: {
    color: "transparent",
    fontSize: 0.1,
  },
});
