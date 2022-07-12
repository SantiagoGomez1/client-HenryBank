import React from "react";

import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { renderScreen } from "../../redux/actions/index";
import { useDispatch } from "react-redux";

import UserCardTransferencia from "../UserCardTransferencia/UserCardTransferencia";

const RenderScreenTransferir = () => {
  const dispatch = useDispatch();

  const setScreen = (screen) => {
    dispatch(renderScreen(screen));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transferencia</Text>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Alias / CBU"
          placeholderTextColor={"gray"}
          keyboardType="number-pad"
          style={styles.inputCode}
        />
      </View>
      <TextInput
        placeholder="Numero de CBU / Alias"
        placeholderTextColor={"gray"}
        keyboardType="number-pad"
        style={styles.input}
      />
      <UserCardTransferencia />
      <View>
        <Button title="Siguiente" onPress={() => setScreen(7)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "white",
    height: 450,
    width: 350,
    borderRadius: 25,
    alignItems: "center",
    paddingTop: 20,
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
    borderRadius: 20,
  },
  containerInput: {
    alignSelf: "flex-start",
    paddingLeft: 12,
  },
  inputCode: {
    color: "white",
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    paddingLeft: 10,
    width: 170,
    height: 55,
    margin: 10,
    borderRadius: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 100,
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default RenderScreenTransferir;
