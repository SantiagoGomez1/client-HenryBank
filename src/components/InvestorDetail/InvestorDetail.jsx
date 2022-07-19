import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Divider } from "@rneui/themed";
import Charts from "../Charts/Charts";
import { useSelector } from "react-redux";
const axios = require("axios");

var { height } = Dimensions.get("window");

export default function InvestorDetail({ route, navigation }) {
  const { id, ticket, cantidad, precio } = route.params;
  const token = useSelector((state) => state.logIn.token);

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
          <View>
            <Text style={{ color: "white", fontSize: 16 }}>
              Total valorizado
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                marginTop: 9,
                marginRight: 5,
              }}
            >
              AR$
            </Text>
            <Text style={{ color: "white", fontSize: 25 }}>{parseInt(cantidad).toFixed(4)}</Text>
          </View>
          <Text style={{ color: "white", fontSize: 20 }}>¡Estás ganando!</Text>
          <View>
            <Text style={{ color: "green", fontSize: 20 }}>
              24,56% AR$ 45.208,5
            </Text>
            <Divider inset={true} insetType="right" />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>PPC</Text>
            <Text style={{ color: "white", fontSize: 20 }}>AR$ 7.236,26</Text>
          </View>
        </View>

        <View style={[styles.card, { height: 280 }]}>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 30 }}>Cotización</Text>
          </View>
          <View>
            <Charts id={id} />
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
            Cantidad:{" "}
          </Text>
          <Text style={{ color: "white", fontSize: 16, marginRight: 10 }}>
            {parseInt(cantidad).toFixed(4)}
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
            Comprometido:{" "}
          </Text>
          <Text style={{ color: "white", fontSize: 16, marginRight: 10 }}>
            0
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 20,
          }}
        >
          <Button
            title="vender"
            onPress={() =>
              navigation.navigate("InvestorSell", {
                id,
                ticket,
                price: precio,
                amount: cantidad,
              })
            }
          />
          <Button
          title="Vender todo"
          onPress={async () => {
            const response = await axios.post(
              "https://h-bank.herokuapp.com/crypto/sell",
              {
                amount: cantidad,
                crypto: id,
                price: precio,
              },
              {
                headers: {
                  Authorization: token,
                },
              }
            );
            if (response.data.msg === "Crypto Vendida") {
              navigation.navigate("SuccessSell", {
                success: 1,
              });
            } else if (
              response.data.msg === "No se encontro la crypto, corrobora datos"
            ) {
              navigation.navigate("SuccessSell", {
                success: 2,
              });
            }
          }}
        />
          <Button
            title="Comprar más"
            onPress={() =>
              navigation.navigate("InvestorBuyGeneral", {
                id,
                ticket,
                price: precio,
              })
            }
          />
        </View>
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
    height: 180,
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
