import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const API_URL = "https://h-bank.herokuapp.com/user/recharge";

const StripeApp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const setScreen = (screen) => {
    dispatch(renderScreen(screen));
  };
  const token = useSelector((state) => state.logIn.token);

  const [input, setInput] = useState({
    amount: 0,
  });

  const [errors, setError] = useState("");

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
      /* Alert.alert(`Success`, `Payment successful: ${paymentIntent.id}`); */
      navigation.navigate("SuccessOperacion");
    }
  }

  // const validateData = () => {
  //   setError("");
  //   let isValid = true;
  //   if (input.amount.length === 0) {
  //     setError("");
  //     isValid = false;
  //   }
  //   if (input.amount === 0) {
  //     setError("");
  //     isValid = false;
  //   }
  //   if (input.amount > 100000) {
  //     setError("El monto maximo son $100.000");
  //     isValid = false;
  //   }
  //   return isValid;
  // };

  return (
    <View style={styles.container}>
      <View style={styles.containerAmount}>
        <Text style={styles.subText}>Ingresar monto...</Text>
        <TextInput
          style={styles.input}
          placeholder="$00,00"
          placeholderTextColor="white"
          onChange={(e) => handleOnChange(e)}
          keyboardType="number-pad"
          errorMessage={errors}
        />
      </View>

      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
      />
      <View style={{ paddingBottom: 40 }}>
        {errors ? <Text style={{ color: "red" }}>{errors}</Text> : null}
        <Button onPress={handlePayPress} title="Pay" disable={loading} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#efefefef",
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 50,
    width: 300,
    marginVertical: 30,
    borderRadius: 8,
  },
});

export default StripeApp;
