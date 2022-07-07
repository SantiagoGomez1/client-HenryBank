import React from "react";
import { Button, TextInput, View, Image, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import img from "../../imgs/henry.png";

const LogIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Image
          style={styles.image}
          source={{
            uri: img,
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
          <Button
            title="Login"
            onPress={() => navigation.navigate("HomeRoutes")}
          ></Button>
          <Button
            title="Registrarse"
            onPress={() => navigation.navigate("RegisterA")}
          ></Button>
        </View>
        <Text style={styles.text}>¿Olvidaste la contraseña?</Text>
      </LinearGradient>
    </View>
  );
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
    color: "#fff",
    fontSize: 25,
  },
  passwordHelp: {
    color: "#fff",
  },
});

export default LogIn;
