import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "@rneui/themed";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
const axios = require("axios");

var { height } = Dimensions.get("window");

export default function InvestorSell({ route, navigation }) {
  const { id, ticket, price, amount } = route.params;
  const [value, setValue] = React.useState("");

  //token
  const dispatch = useDispatch();
  const token = useSelector((state) => state.logIn.token);
  console.log("Estos son los params", route.params);
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <View style={{ display: "flex", alignItems: "center", marginTop: 30 }}>
          <Text
            style={{
              color: "white",
              fontSize: 30,
              textTransform: "uppercase",
            }}
          >
            {ticket}
          </Text>
        </View>

        <View style={styles.card}>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 25, marginVertical: 15 }}>
              ¿Cuánto quieres vender?
            </Text>
          </View>
          <Divider inset={true} insetType="middle" />
          <View style={styles.subCard}>
            <Text style={{ color: "white", fontSize: 16 }}>
              Precio de mercado: AR$ {price}
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 16 }}>
              Acciones disponibles: {parseInt(amount).toFixed(4)}
            </Text>
          </View>
          <View style={{ alignItems: "center", paddingBottom: 20 }}>
            <TextInput
              style={styles.input}
              placeholder="v 0"
              placeholderTextColor="white"
              keyboardType="number-pad"
              value={value}
              onChangeText={setValue}
            />
          </View>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 16 }}>
              Monto estimado AR$
              {value !== "" ? (parseInt(value) * price).toFixed(1) : 0}
            </Text>
          </View>
        </View>

        <Button
          title="Continuar"
          onPress={async () => {
            const response = await axios.post(
              "https://h-bank.herokuapp.com/crypto/sell",
              {
                amount: value,
                crypto: id,
                price,
              },
              {
                headers: {
                  Authorization: token,
                },
              }
            );
            console.log("Esta es la respuesta en sell", response.data);
            if (response.data.msg === "HenryBank Crypto Vendida") {
              navigation.navigate("SuccessSell", {
                success: 1,
              });
            } else if (response.data.msg === "Balance de crypto insuficiente") {
              navigation.navigate("SuccessSell", {
                success: 2,
              });
            }
          }}
        />
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "space-around",
    height: height,
  },
  card: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 8,
    padding: 10,
    height: 200,
  },
  input: {
    textAlign: "center",
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    width: 300,
    height: 80,
  },
  subCard: {
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
});
