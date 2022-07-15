import React from "react";
import { Text, StyleSheet, Image, ActivityIndicator, View } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";

const Confirmation = () => {
  const navigation = useNavigation();
  const logIn = useSelector((state) => state.logIn);
  if (!logIn.msg) {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.backgroun2}>
        <Text style={styles.textMain2}>Henry Bank</Text>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.textThanks}>Gracias por confiar en nosotros</Text>
      </LinearGradient>
    );
  }
  if (logIn.msg === "Login correcto") {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textMain}>¡Bienvenido!</Text>
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
  if (
    logIn.msg === "Contraseña incorrecta" ||
    logIn.msg === "Usuario no existe"
  ) {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textMain}>Cuenta inexistente</Text>
        <Image
          style={styles.imgS}
          source={require("../../imgs/error.png")}
        ></Image>
        <Text style={styles.text0}>
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
  backgroun2: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    width: "100%",
    alignSelf: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  textMain: {
    color: "#fff",
    fontSize: 45,
    textAlign: "center",
  },
  textMain2: {
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
  textThanks: {
    color: "aqua",
    fontSize: 15,
    textAlign: "center",
  },
});

export default Confirmation;
