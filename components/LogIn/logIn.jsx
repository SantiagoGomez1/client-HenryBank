import React from "react";
import { Button, TextInput, View, Image, StyleSheet, Text } from "react-native";

const LogIn = () => {
  return (
    <View style={styles.countainer}>
      <Image
        style={styles.image}
        source={{
          uri: "https://avatars.githubusercontent.com/u/57154655?s=200&v=4",
        }}
      ></Image>
      <View style={styles.inputs}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          placeholderTextColor={"grey"}
          placeholder="soyhenry@gmail.com"
        ></TextInput>
        <Text style={styles.text}>Contraseña</Text>
        <TextInput
          placeholderTextColor={"grey"}
          placeholder="*******"
        ></TextInput>
      </View>
      <View style={styles.btn}>
        <Button title="Login"></Button>
        <Button title="Registrarse"></Button>
      </View>
      <Text style={styles.text}>¿Olvidaste la contraseña?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  countainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#140152",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  inputs: {},
  btn: {
    flexDirection: "column",
  },
  text: {
    fontSize: 25,
    color: "#fff",
  },
  passwordHelp: {
    color: "#fff",
  },
});

export default LogIn;
