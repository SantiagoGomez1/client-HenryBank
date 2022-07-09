import React from "react";
import { Text, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";

const Confirmation = () => {
  const navigation = useNavigation();
  const logIn = useSelector((state) => state.logIn);
  if (logIn.token) {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textMain}>Log In exitoso</Text>
        <Image
          style={styles.imgS}
          source={require("../../imgs/Success.png")}
        ></Image>
        <Text>
          {setTimeout(() => {
            navigation.navigate("HomeRoutes");
          }, 1500)}
        </Text>
      </LinearGradient>
    );
  }
  if (!logIn.token) {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textMain}>Cuenta inexistente</Text>
        <Image
          style={styles.imgS}
          source={require("../../imgs/error.png")}
        ></Image>
        <Text>
          {setTimeout(() => {
            navigation.navigate("Log In");
          }, 1500)}
        </Text>
      </LinearGradient>
    );
  }
};

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
    height: 253.6,
    width: 250,
    alignSelf: "center",
    padding: 5,
  },
});

export default Confirmation;
