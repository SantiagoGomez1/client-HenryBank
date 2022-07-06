import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const RegisterB = () => {
  return (
    <View style={styles.countainer}>
      <Text style={styles.textMain}>Regístrate</Text>
      <View>
        <Text style={styles.text}>Nombre*</Text>
        <TextInput placeholderTextColor={"grey"} placeholder="Toni"></TextInput>
        <Text style={styles.text}>Apellido*</Text>
        <TextInput
          placeholderTextColor={"grey"}
          placeholder="Tralice"
        ></TextInput>
        <Text style={styles.text}>Cedula de identidad / D.N.I*</Text>
        <TextInput
          placeholderTextColor={"grey"}
          placeholder="44333222"
        ></TextInput>
        <Text style={styles.text}>Fecha de nacimiento*</Text>
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
      <Button title="Siguiente"></Button>
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
