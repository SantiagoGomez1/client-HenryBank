import React, { useState } from "react";

import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { putTransfer } from "../../redux/actions/index";
import { useNavigation } from "@react-navigation/native";

import UserCardTransferencia from "../UserCardTransferencia/UserCardTransferencia";

const RenderScreenTransferirMonto = () => {
  const token = useSelector((state) => state.logIn.token);
  const user = useSelector((state) => state.userTransfer);
  const myUser = useSelector((state) => state.myUser);

  const [params, setParams] = useState({ amount: 0 });
  const [errors, setErrors] = useState(true);
  
  const dispatch = useDispatch();

  const handleOnChange = (e, type) => {
    setParams({ ...params, [type]: e.nativeEvent.text });
  };

  const handleSubmitTransfer = () => {
    if (params.amount === 0) {
      setErrors(false);
      setTimeout(() => {
        setErrors(true);
      }, 1000);
    } else if (params.amount > myUser.balance) {
      setErrors(false);
      setTimeout(() => {
        setErrors(true);
      }, 1000);
    } else {
      dispatch(putTransfer(token, params));
      navigation.navigate("SuccessOperacion");
    }
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transferencia</Text>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.subText}>Monto...</Text>
        {!errors ? (
          <TextInput
            style={styles.inputError}
            placeholder="00,00$"
            placeholderTextColor="red"
            keyboardType="number-pad"
            onChange={(e) => handleOnChange(e, "amount")}
          />
        ) : (
          <TextInput
            style={styles.input}
            placeholder="00,00$"
            placeholderTextColor="white"
            keyboardType="number-pad"
            onChange={(e) => handleOnChange(e, "amount")}
          />
        )}
      </View>
      <UserCardTransferencia data={user} />
      <View>
        <Button title="Enviar" onPress={() => handleSubmitTransfer()} />
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
    borderRadius: 8,
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
  inputError: {
    textAlign: "center",
    color: "red",
    fontSize: 40,
    fontWeight: "bold",
    width: 300,
    height: 80,
  },
});
export default RenderScreenTransferirMonto;
