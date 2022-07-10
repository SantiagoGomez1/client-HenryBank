import React from "react";

import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const RenderScreenPlazoFijo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Plazo Fijo</Text>
      <Text style={styles.subText}>Monto...</Text>
      <TextInput
        style={styles.input}
        placeholder="00,00$"
        placeholderTextColor="white"
      />
      <View style={styles.containerBoxes}>
        <View style={styles.box}>
          <Text style={styles.descText}>Moneda</Text>
        </View>
        <View style={styles.containerBox}>
          <View style={styles.box1}>
            <Text style={styles.descText}>Tiempo de Plazo</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.descText}>%</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerButton} >
        <Button title="Confirmar"></Button>
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
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  subText: {
    paddingTop: 20,
    color: "gray",
    fontSize: 15,
  },
  descText: {
    color: "white",
    fontSize: 13,
    paddingLeft: 10,
  },
  input: {
    textAlign: "center",
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    width: 300,
    height: 80,
  },
  containerBoxes: {
    justifyContent: "space-between",
    paddingTop: 25,
  },
  containerBox: {
    flexDirection: "row",
  },
  containerButton: {
    justifyContent: "center",
    paddingVertical:20
  },
  box: {
    color: "white",
    paddingTop: 15,
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    width: 130,
    height: 55,
    margin: 10,
    borderRadius: 20,
  },
  box1: {
    color: "white",
    paddingTop: 15,
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    width: 170,
    height: 55,
    margin: 10,
    borderRadius: 20,
  },
  box2: {
    color: "white",
    paddingTop: 15,
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    width: 130,
    height: 55,
    margin: 10,
    borderRadius: 20,
  },
});
export default RenderScreenPlazoFijo;
