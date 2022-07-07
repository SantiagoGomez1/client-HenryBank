import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Success = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textMain}>Registro exitoso</Text>
        <Image
          style={styles.imgSuccess}
          source={{
            uri: "https://www.pngmart.com/files/20/Success-Transparent-Background.png",
          }}
        ></Image>
        <Text style={styles.textSecondaty}>¡Gracias!</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "#140152",
    flex: 1,
    width: "100%",
  },
  background: {
    flex: 1,
    justifyContent: "space-around",
  },
  textMain: {
    color: "#fff",
    fontSize: 45,
  },
  textSecondaty: {
    color: "#fff",
    fontSize: 20,
  },
  imgSuccess: {
    height: 250,
    width: 250,
    alignSelf: "center",
  },
});

export default Success;
