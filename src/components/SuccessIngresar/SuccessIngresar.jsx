import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, ActivityIndicator, Alert } from "react-native";
import { useConfirmPayment } from "@stripe/stripe-react-native";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import axios from "axios";

const SuccessIngresar = () => {
  const navigation = useNavigation();
  const API_URL = "https://h-bank.herokuapp.com/user/recharge";
  const { confirmPayment } = useConfirmPayment();
  const dispatch = useDispatch();
  const route = useRoute();
  const { token, amount } = route.params;
  const validations = useSelector((state) => state.payment);
  console.log(validations);
  console.log("token", token);
  console.log("amount", amount);
  async function payment() {
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const response = await axios.post(
      API_URL,
      {
        amount: Number(amount),
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
      navigation.navigate("HomeRoutes");
    } else if (paymentIntent) {
      navigation.navigate("SuccessOperacion");
    }
  }

  useEffect(() => {
    payment();
  }, []);

  if (!validations[0]) {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <ActivityIndicator size={50} color="#0000ff" />
      </LinearGradient>
    );
  }
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-around",
    paddingTop: Constants.statusBarHeight,
  },
});

export default SuccessIngresar;
