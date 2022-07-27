import {
  TouchableOpacity,
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

export default function InvestorBuyGeneral({ route, navigation }) {
  const { id, ticket, price } = route.params;
  const [value, setValue] = React.useState("");

  //Trayendo el token
  const dispatch = useDispatch();
  const token = useSelector((state) => state.logIn.token);
  const buyDetail = useSelector((state) => state.buyDetail);
  const saldo = useSelector((state) => state.userDetail.balance);
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
          <View style={{ display: "flex" }}>
            <Text
              style={{
                color: "white",
                fontSize: 25,
                marginVertical: 15,
                textAlign: "center",
              }}
            >
              ¿Cuánto quieres comprar?
            </Text>
          </View>
          <Divider inset={true} insetType="middle" />
          <View style={styles.subCard}>
            <Text style={{ color: "white", fontSize: 16 }}>
              Precio de mercado: USD $ {price.toFixed(4)}
            </Text>
            <Text style={{ color: "white", fontSize: 16 }}>
              Precio de mercado: AR $ {(price * 300).toFixed(4)}
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 16 }}>
              Montos disponibles: $ {saldo}
            </Text>
          </View>
          <View style={{ alignItems: "center", paddingBottom: 20 }}>
            <TextInput
              style={styles.input}
              placeholder="$00.00"
              placeholderTextColor="white"
              keyboardType="number-pad"
              value={value}
              onChangeText={setValue}
            />
          </View>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 16 }}>
              Cantidad estimada V{" "}
              {value !== ""
                ? (parseInt(value) / (price * 127.82)).toFixed(4)
                : 0}
            </Text>
          </View>
        </View>
        <View style={styles.btn}>
          {/* <Button
            title="Continuar"
            onPress={async () => {
              const response = await axios.post(
                "https://h-bank.herokuapp.com/crypto/buy",
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
              console.log("Esta es la respuesta de continuar", response.data);
              if (response.data.msg === "Nueva Crypto Comprada") {
                console.log("Entro en el primer if");
                navigation.navigate("SuccessBuy", {
                  success: 1,
                });
              } else if (response.data.msg === "Crypto Comprada") {
                console.log("Entro en el segundo if");
                navigation.navigate("SuccessBuy", {
                  success: 1,
                });
              } else if (response.data.msg === "Fondos insuficientes") {
                navigation.navigate("SuccessBuy", {
                  success: 2,
                });
              }
            }}
          /> */}
          <TouchableOpacity
            onPress={async () => {
              const response = await axios.post(
                "https://h-bank.herokuapp.com/crypto/buy",
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
              console.log("Esta es la respuesta de continuar", response.data);
              if (response.data.msg === "Nueva Crypto Comprada") {
                console.log("Entro en el primer if");
                navigation.navigate("SuccessBuy", {
                  success: 1,
                });
              } else if (response.data.msg === "Crypto Comprada") {
                console.log("Entro en el segundo if");
                navigation.navigate("SuccessBuy", {
                  success: 1,
                });
              } else if (response.data.msg === "Fondos insuficientes") {
                navigation.navigate("SuccessBuy", {
                  success: 2,
                });
              }
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#4facfe", "#00f2fe"]}
              style={{ paddingVertical: 10, width: 200, borderRadius: 11 }}
            >
              <Text style={{ color: "#ffffff", textAlign: "center" }}>
                Siguiente
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#140152",
  },
  background: {
    flex: 1,
    justifyContent: "space-around",
    height: height,
  },
  card: {
    borderWidth: 1,
    marginHorizontal: 15,
    marginTop: 10,
    padding: 10,
    alignItems: "center",
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
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
  btn: {
    alignSelf: "center",
  },
});
