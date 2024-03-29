import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const StripeApp = () => {
  const navigation = useNavigation();
  const token = useSelector((state) => state.logIn.token);

  const [cardDetails, setCardDetails] = useState();
  const [input, setInput] = useState({
    amount: 0,
  });

  const [errorMoney, setErrorMoney] = useState("");
  const [errorNumber, setErrorNumer] = useState("");
  const validateData = () => {
    let isValid = true;
    setErrorMoney("");
    setErrorNumer("");
    if (input.amount < 100) {
      setErrorMoney("Deberia ingresar al menos $100.00");
      isValid = false;
    }
    if (input.amount === 0) {
      setErrorMoney("Deberia ingresar un monto");
      isValid = false;
    }
    if (!input.amount.length) {
      setErrorMoney("Deberia ingresar un monto");
      isValid = false;
    }

    return isValid;
  };

  const handleOnChange = (e, type) => {
    setInput({ ...input.amount, [type]: e.nativeEvent.text });
  };

  async function handlePayPress() {
    if (!validateData() || !cardDetails?.complete) {
      Alert.alert("Por favor complete todos los campos");
      return;
    }
    Alert.alert(
      "Ingresar dinero",
      `¿Seguro quieres ingresar $${input.amount}?`,
      [
        {
          text: "Cancelar",
        },
        {
          text: "Si",
          onPress: () =>
            navigation.navigate("SuccessIngresar", {
              token: token,
              amount: input.amount,
            }),
        },
      ]
    );
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 40 }}>$</Text>
        <TextInput
          style={styles.input}
          placeholder="00,00"
          placeholderTextColor="white"
          onChange={(e) => handleOnChange(e, "amount")}
          keyboardType="number-pad"
          errorMessage={errorMoney}
        />
      </View>
      <View style={{ alignSelf: "center" }}>
        {errorMoney ? <Text style={{ color: "red" }}>{errorMoney}</Text> : null}
      </View>
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={(cardDetails) => {
          setCardDetails(cardDetails);
        }}
      />
      <View style={{ alignSelf: "center" }}>
        {errorNumber ? (
          <Text style={{ color: "red", textAlign: "center" }}>
            {errorNumber}
          </Text>
        ) : null}
      </View>
      <TouchableOpacity onPress={handlePayPress}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#667eea", "#764ba2"]}
          style={{ paddingVertical: 10, margin: 10, borderRadius: 10 }}
        >
          <Text style={{ color: "#ffffff", textAlign: "center" }}>
            Confirmar
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  input: {
    textAlign: "center",
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    width: 150,
    height: 80,
  },
  card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 50,
    width: 300,
    borderRadius: 8,
  },
  btn: {
    color: "#140152",
  },
});

export default StripeApp;
