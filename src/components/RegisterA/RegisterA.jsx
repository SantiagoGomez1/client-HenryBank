import React from "react";
import { Button, TextInput, View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RegisterA() {
  const navigation = useNavigation();

  const goRegisterB = () => {
    navigation.navigate("RegisterB");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Regístrate</Text>
      <Text style={styles.text}>E-mail</Text>
      <TextInput
        placeholderTextColor={"white"}
        placeholder="soyhenry@gmail.com"
      >
        {}
      </TextInput>
      <Text style={styles.text}>Confirmar E-mail</Text>
      <TextInput
        placeholderTextColor={"white"}
        placeholder="soyhenry@gmail.com"
      >
        {}
      </TextInput>
      <Text style={styles.text}>Contraseña</Text>
      <TextInput placeholderTextColor={"white"} placeholder="************">
        {}
      </TextInput>
      <Text style={styles.text}>Confirmar Contraseña</Text>
      <TextInput placeholderTextColor={"white"} placeholder="************">
        {}
      </TextInput>
      <Button onPress={() => goRegisterB()} style={styles.btn} title="Next">
        Siguiente
      </Button>
    </View>
  );
}

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
  },
  tittle: {
    color: "#fff",
    fontSize: 25,
  },
  passwordHelp: {
    color: "#fff",
  },
});
