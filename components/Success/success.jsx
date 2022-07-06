import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const Success = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registro Exitoso</Text>
      <Image
        style={styles.imgSuccess}
        source={{
          uri: "https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png",
        }}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#140152",
    width: "100%",
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    color: "#fff",
  },
  imgSuccess: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
});

export default Success;
