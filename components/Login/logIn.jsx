import React from "react";
import { Button, TextInput, View, Image, StyleSheet, Text } from "react-native";

const LogIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    color: "#fff",
    fontSize: 25,
  },
  passwordHelp: {
    color: "#fff",
  },
});

export default LogIn;
