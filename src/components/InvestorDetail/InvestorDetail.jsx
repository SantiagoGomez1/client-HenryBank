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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Divider } from "@rneui/themed";
import Charts from "../Charts/Charts";

var { height } = Dimensions.get("window");

export default function InvestorDetail({ route, navigation }) {
  const { id, ticket, cantidad } = route.params;
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
            <Text style={{ color: "white", fontSize: 25 }}>234.351,45</Text>
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
            {cantidad}
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
                price: 50000,
              })
            }
          />
          <Button
            title="Comprar más"
            onPress={() =>
              navigation.navigate("InvestorBuyGeneral", {
                id,
                ticket,
                precio: 50000,
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
