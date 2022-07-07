import React from "react";
import { Button, TextInput, View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function RegisterA() {
  const navigation = useNavigation();

  const goRegisterB = () => {
    navigation.navigate("RegisterB");
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.tittle}>Regístrate</Text>
        <View>
          <Text style={styles.text}>E-mail</Text>
          <TextInput
            placeholderTextColor={"grey"}
            placeholder="soyhenry@gmail.com"
          >
            {}
          </TextInput>
          <Text style={styles.text}>Confirmar E-mail</Text>
          <TextInput
            placeholderTextColor={"grey"}
            placeholder="soyhenry@gmail.com"
          >
            {}
          </TextInput>
          <Text style={styles.text}>Contraseña</Text>
          <TextInput placeholderTextColor={"grey"} placeholder="************">
            {}
          </TextInput>
          <Text style={styles.text}>Confirmar Contraseña</Text>
          <TextInput placeholderTextColor={"grey"} placeholder="************">
            {}
          </TextInput>
        </View>
        <Button
          onPress={() => goRegisterB()}
          style={styles.btn}
          title="Siguiente"
        ></Button>
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
  tittle: {
    color: "#fff",
    fontSize: 25,
  },
  passwordHelp: {
    color: "#fff",
  },
});
