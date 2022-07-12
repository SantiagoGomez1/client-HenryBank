import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Possession() {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <View>
        <View style={{ display: "flex", alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: 30,
            }}
          >
            Tenecias
          </Text>
        </View>
        <View style={styles.caract}>
          <Text style={{ color: "white" }}>Simbolo</Text>
          <Text style={{ color: "white" }}>Cantidad</Text>
          <Text style={{ color: "white" }}>Rendimiento</Text>
          <Text style={{ color: "white" }}>Valorizado</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.subCard}
        onPress={() => {
          console.log("touchable1");
        }}
      >
        <View style={styles.caract}>
          <Text style={{ color: "white" }}>APPL</Text>
          <Text style={{ color: "white" }}>128</Text>
          <Text style={{ color: "green" }}>8.79%</Text>
          <Text style={{ color: "white" }}>3779.50</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.subCard}
        onPress={() =>
          navigation.navigate("InvestorDetail", {
            ticket: "BTCUSD",
            cantidad: 128,
          })
        }
      >
        <View style={styles.caract}>
          <Text style={{ color: "white" }}>BTCUSD</Text>
          <Text style={{ color: "white" }}>0.05</Text>
          <Text style={{ color: "red" }}>-38.1%</Text>
          <Text style={{ color: "white" }}>1000.50</Text>
        </View>
      </TouchableOpacity>

      {/* Segunda seccion */}

      <View>
        <View style={{ display: "flex", alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: 30,
            }}
          >
            Plazo Fijo
          </Text>
        </View>
        <View style={styles.caract}>
          <Text style={{ color: "white" }}>Inversion</Text>
          <Text style={{ color: "white" }}>TNA</Text>
          <Text style={{ color: "white" }}>Días</Text>
          <Text style={{ color: "white" }}>Ganacias</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.subCard}
        onPress={() => {
          console.log("touchable3");
        }}
      >
        <View style={styles.caract}>
          <Text style={{ color: "white" }}>$480.000</Text>
          <Text style={{ color: "white" }}>53%</Text>
          <Text style={{ color: "white" }}>30</Text>
          <Text style={{ color: "white" }}>$21.200</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    margin: 10,
    borderRadius: 8,
    padding: 10,
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
  caract: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
