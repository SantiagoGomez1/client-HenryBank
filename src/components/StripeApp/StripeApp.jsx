import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const API_URL = "https://h-bank.herokuapp.com/user/recharge";

const StripeApp = () => {
  const navigation = useNavigation();
  const token = useSelector((state) => state.logIn.token);

  const [input, setInput] = useState({
    amount: 0,
  });

  const [errorMoney, setErrorMoney] = useState(0);
  const validateData = () => {
    let isValid = true;

    if (input.amount <= 100) {
      setErrorMoney("Deberia ingresar al menos $100.00");
      isValid = false;
    }
    if (input.amount === 0) {
      setErrorMoney("Deberia ingresar un monto");
      isValid = false;
    }

    return isValid;
  };

  const { confirmPayment, loading } = useConfirmPayment();

  const config = {
    headers: {
      Authorization: token,
    },
  };
  const handleOnChange = (e) => {
    setInput(e.nativeEvent.text);
  };

  async function handlePayPress() {
    if (!validateData()) {
      return console.log("hola");
    } else {
      const response = await axios.post(
        API_URL,
        {
          amount: input,
          paymentMethodType: "card",
          currency: "ars",
        },
        config
      );
      const { clientSecret } = await response.data;
      const { error, paymentIntent } = await confirmPayment(clientSecret, {
        type: "Card",
        billingDetails: { estado: "ok" },
      });

      if (error) {
        Alert.alert(`Error code: ${error.code}`, error.message);
      } else if (paymentIntent) {
        navigation.navigate("SuccessOperacion");
      }
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="$100,00"
        placeholderTextColor="white"
        onChange={(e) => handleOnChange(e)}
        keyboardType="number-pad"
        errorMessage={errorMoney}
      />
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
      />
      {errorMoney ? <Text style={{ color: "red" }}>{errorMoney}</Text> : null}
      <Button onPress={handlePayPress} title="Confirmar" disable={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  input: {
    textAlign: "center",
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 50,
    width: 300,
    borderRadius: 8,
  },
});

export default StripeApp;
