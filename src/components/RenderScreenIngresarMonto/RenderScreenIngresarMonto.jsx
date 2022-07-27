import React, { useState } from "react";

import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { rechange } from "../../redux/actions";

const RenderScreenIngresarMonto = () => {
  const [input, setInput] = useState({
    amount: 0,
  });
  const [error, setError] = useState("");

  const token = useSelector((state) => state.logIn.token);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleOnChange = (e, type) => {
    setInput({ ...input, [type]: e.nativeEvent.text });
  };

  const validateData = () => {
    setError("");
    let isValid = true;
    if (input.amount.length === 0) {
      setError("");
      isValid = false;
    }
    if (input.amount === 0) {
      setError("");
      isValid = false;
    }
    if (input.amount > 100000) {
      setError("El monto maximo son 100.000$");
      isValid = false;
    }
    return isValid;
  };

  const onSubmit = () => {
    if (!validateData()) {
      return;
    }
    dispatch(rechange(input, token));
    navigation.navigate("SuccessOperacion");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ingresar Dinero</Text>
      <View style={styles.containerAmount}>
        <Text style={styles.subText}>Ingresar monto...</Text>
        <TextInput
          style={styles.input}
          placeholder="$00,00"
          placeholderTextColor="white"
          onChange={(e) => handleOnChange(e, "amount")}
          keyboardType="number-pad"
          errorMessage={error}
        />
      </View>
      <View style={{ paddingBottom: 40 }}>
        {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
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
    height: 450,
    width: 350,
    borderRadius: 30,
    paddingTop: 20,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
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
