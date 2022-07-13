import React, { useState } from "react";

import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { rechange } from "../../redux/actions";

import { useDispatch, useSelector } from "react-redux";

const RenderScreenIngresarMonto = () => {
  const [input, setInput] = useState({
    amount: "",
  });
  console.log(input);

  const token = useSelector((state) => state.logIn.token);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleOnChange = (e, type) => {
    setInput({ ...input, [type]: e.nativeEvent.text });
  };

  const onSubmit = () => {
    dispatch(rechange(input, token));
    navigation.navigate("SuccessOperacion");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ingresar Dinero</Text>
      <View style={styles.containerAmount}>
        <Text style={styles.subText}>Monto...</Text>
        <TextInput
          style={styles.input}
          placeholder="$00,00"
          placeholderTextColor="white"
          onChange={(e) => handleOnChange(e, "amount")}
          keyboardType="number-pad"
          defaultValue={input.amount}
        />
      </View>
      <View style={{ paddingBottom: 40 }}>
        <Button title="Confirmar" onPress={() => onSubmit()}></Button>
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
