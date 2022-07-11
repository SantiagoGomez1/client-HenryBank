import React from "react";

import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import { useDispatch } from 'react-redux'

import { renderScreen } from "../../redux/actions";

const RenderScreenIngresar = () => {
    const dispatch = useDispatch()

    const setScreen = (screen) => {
        dispatch(renderScreen(screen));
      };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ingresar Dinero</Text>
      <View style={{paddingTop:30}}>
        <TextInput
          placeholder="Numero de Tarjeta"
          placeholderTextColor={"white"}
          keyboardType="number-pad"
          style={styles.input}
        />
        <TextInput
          placeholder="Nombre Completo"
          placeholderTextColor={"white"}
          style={styles.input}
        />
        <TextInput
          placeholder="Fecha de Expiracion"
          placeholderTextColor={"white"}
          keyboardType="number-pad"
          style={styles.input}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="Codigo de Seguridad"
          placeholderTextColor={"white"}
          keyboardType="number-pad"
          style={styles.inputCode}
        />
        <View style={styles.btn}>
          <Button title="Siguiente" onPress={() => setScreen(6)}></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "white",
    height: 450,
    width: 350,
    borderRadius: 25,
    alignItems: "center",
    paddingTop: 20,
  },
  btn: {
    justifyContent: "center",
    flex: 0,
  },
  input: {
    color: "white",
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    paddingLeft: 10,
    width: 300,
    height: 55,
    margin: 10,
    borderRadius: 20,
  },
  inputCode: {
    color: "white",
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    paddingLeft: 10,
    width: 200,
    height: 55,
    margin: 10,
    borderRadius: 20,
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default RenderScreenIngresar;
