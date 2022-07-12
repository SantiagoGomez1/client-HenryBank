import React from "react";

import { View, Text, StyleSheet, Button, TextInput } from "react-native";

import UserCardTransferencia from "../UserCardTransferencia/UserCardTransferencia";

import { useNavigation } from "@react-navigation/native";

const RenderScreenTransferirMonto = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transferencia</Text>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.subText}>Monto...</Text>
        <TextInput
          style={styles.input}
          placeholder="00,00$"
          placeholderTextColor="white"
          keyboardType="number-pad"
        />
      </View>

      <UserCardTransferencia />
      <View>
        <Button title="Enviar" onPress={() => navigation.navigate("SuccessOperacion")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent: "space-around",
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
  input: {
    textAlign: "center",
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    width: 300,
    height: 80,
  },
});
export default RenderScreenTransferirMonto;
