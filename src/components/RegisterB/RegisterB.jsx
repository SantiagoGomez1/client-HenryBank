import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const RegisterB = () => {
  const navigation = useNavigation();
  const goRegisterC = () => {
    navigation.navigate("RegisterC");
  };
  return (
    <View style={styles.countainer}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textMain}>Regístrate</Text>
        <View>
          <Text style={styles.text}>Nombre</Text>
          <TextInput
            placeholderTextColor={"grey"}
            placeholder="Toni"
          ></TextInput>
          <Text style={styles.text}>Apellido</Text>
          <TextInput
            placeholderTextColor={"grey"}
            placeholder="Tralice"
          ></TextInput>
          <Text style={styles.text}>Cedula de identidad / D.N.I</Text>
          <TextInput
            placeholderTextColor={"grey"}
            placeholder="44333222"
          ></TextInput>
          <Text style={styles.text}>Fecha de nacimiento</Text>
          <TextInput
            placeholderTextColor={"grey"}
            placeholder="22/04/1995"
          ></TextInput>
          <View style={styles.ciudadNacionalidad}>
            <View>
              <Text style={styles.text}>Ciudad</Text>
              <TextInput
                placeholderTextColor={"grey"}
                placeholder="Buenos Aires"
              ></TextInput>
            </View>
            <View>
              <Text style={styles.text}>Nacionalidad</Text>
              <TextInput
                placeholderTextColor={"grey"}
                placeholder="Argentina"
              ></TextInput>
            </View>
          </View>
          <Text style={styles.text}>Domicilio</Text>
          <TextInput
            placeholderTextColor={"grey"}
            placeholder="Calle siempre viva 123"
          ></TextInput>
        </View>
        <Button title="Siguiente" onPress={() => goRegisterC()}></Button>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  countainer: {
    flex: 1,
  },
  background: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
  },
  ciudadNacionalidad: {
    flexDirection: "row",
    alignItems: "center",
  },
  textMain: {
    color: "#fff",
    fontSize: 40,
  },
  text: {
    color: "#fff",
    fontSize: 25,
  },
});

export default RegisterB;
