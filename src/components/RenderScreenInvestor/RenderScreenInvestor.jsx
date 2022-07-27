import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { renderScreen } from "../../redux/actions";

const RenderScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const setScreen = (screen) => {
    dispatch(renderScreen(screen));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Inversiones</Text>
      <Text style={styles.text2}>¿Querés constituir un plazo fijo?</Text>
      <View style={styles.btn2}>
        <TouchableOpacity onPress={() => setScreen(5)}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#4facfe", "#00f2fe"]}
            style={{ paddingVertical: 10, width: 280, borderRadius: 11 }}
          >
            <Text style={{ color: "#ffffff", textAlign: "center" }}>
              ¡Entra aquí y obtenlo!
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <Text style={styles.text2}>¿Querés comprar crypto?</Text>
      <View style={styles.btn2}>
        <TouchableOpacity onPress={() => navigation.navigate("InvestorBuy")}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#4facfe", "#00f2fe"]}
            style={{ paddingVertical: 10, width: 280, borderRadius: 11, }}
          >
            <Text style={{ color: "#ffffff", textAlign: "center" }}>
              ¡Entra aquí y comprá!
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 450,
    width: 350,
    paddingTop: 20,
    justifyContent: "space-between",
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  text2: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    margin: 5,
  },
  text3: {
    color: "grey",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  btn2: {
    alignSelf: "center",
    paddingBottom: 20,
  },
  btn: {
    alignSelf: "center",
  },
});

export default RenderScreen;
