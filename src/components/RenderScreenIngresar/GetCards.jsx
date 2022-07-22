import { ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'
import {  getTarjetas } from '../CreditCardAsyncStorage/CreditCardAsyncStorage'
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useSelector } from 'react-redux';

const API_URL = "https://h-bank.herokuapp.com/user/recharge";

export default function GetCards() {
  const navigation = useNavigation();
  const token = useSelector((state) => state.logIn.token);
  const [tarjetas, setTarjetas] = React.useState([])
  const [input, setInput] = React.useState({
    amount: 0,
  });

  const [errorMoney, setErrorMoney] = React.useState("");
  const [errorNumber, setErrorNumer] = React.useState("");
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

  async function onChangePayment() {
    if (!validateData()) {
      Alert.alert("Por favor complete todos los campos")
      return;
    } else {
      axios.post(
        API_URL,
        {
          amount: Number(input.amount),
          paymentMethodType: "card",
          currency: "ars",
        },
        {
          headers: {
            Authorization: token,
          },
        }
      ).then(res => navigation.navigate("SuccessOperacion"));
    }
  }

  const handleOnChange = (e, type) => {
    setInput({ ...input, [type]: e.nativeEvent.text });
  };

  useFocusEffect(
        React.useCallback(() => {
          getTarjetas().then(res => {
            console.log(res)
            setTarjetas(res)
        })
      }, [])
  );
  return (
    <ScrollView style={{ height: 400 }}>
      <TextInput
          style={styles.input}
          placeholder="$00,00"
          placeholderTextColor="white"
          onChange={(e) => handleOnChange(e, "amount")}
          keyboardType="number-pad"
          errorMessage={errorMoney}
        />
        {errorNumber ? (
          <Text style={{ color: "red", textAlign: "center" }}>
            {errorNumber}
          </Text>
        ) : null}

      {tarjetas?.length > 0 &&
        tarjetas.map((item, index) => (
          <View key={index}>
            <TouchableOpacity
              style={styles.subCard}
              onPress={onChangePayment}
            >
            <Text style={{
              color: "white",
              fontSize: 15,
            }}>Nombre: {item.name}</Text>
            <Text style={{
              color: "white",
              fontSize: 15,
            }}>Numero: **** **** **** {item.number.slice(15)}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    subCard: {
        backgroundColor: "rgba(25, 23, 61, 0.5)",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.5)",
        margin: 10,
        borderRadius: 8,
        padding: 10,
      },
      input: {
        textAlign: "center",
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        width: 300,
        height: 80,
      },
})