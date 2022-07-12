import React from "react";

import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

const RenderScreenIngresarMonto = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ingresar Dinero</Text>
      <View style={styles.containerAmount}>
        <Text style={styles.subText}>Monto...</Text>
        <TextInput
          style={styles.input}
          placeholder="00,00$"
          placeholderTextColor="white"
          keyboardType="number-pad"
        />
      </View>
      <View style={{ paddingBottom: 40 }}>
        <Button
          title="Confirmar"
          onPress={() => navigation.navigate("SuccessOperacion")}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "white",
    height: 450,
    width: 350,
    borderRadius: 8,
    paddingTop: 20,
  },
  containerAmount: {
    alignItems: "center",
    paddingBottom: 20,
  },
  input: {
    textAlign: "center",
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    width: 300,
    height: 80,
  },
  subText: {
    paddingTop: 20,
    color: "gray",
    fontSize: 15,
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default RenderScreenIngresarMonto;
