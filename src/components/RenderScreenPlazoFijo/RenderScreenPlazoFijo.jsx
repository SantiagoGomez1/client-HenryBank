import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Input, Icon } from "react-native-elements";
import { lockedStake } from "../../redux/actions";


const RenderScreenPlazoFijo = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.logIn.token);

  const [mount, setMount] = useState([]);
  const [errorMount, setErrorMount] = useState("");

  const goSuccessPlazoFijo = () => {
    navigation.navigate("SuccessPlazoFijo");
  };
  const handleOnChange = (e, type) => {
    setMount({ ...mount, [type]: e.nativeEvent.text });
  };

  const createLockedStake = () => {
    if (!validateData()) {
      return;
    }
    dispatch(lockedStake(token, mount));
    goSuccessPlazoFijo();
  };

  const validateData = () => {
    setErrorMount("");
    let isValid = true;

    if (Number(mount.mountLockedStake) < 1000) {
      setErrorMount("Debes ingresar un monto mayor a $1.000");
      isValid = false;
    }
    return isValid;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Plazo Fijo</Text>
      <Text style={styles.subText}>Monto mínimo $1.000</Text>
      <Input
        style={styles.input}
        placeholder="$ 00,00"
        placeholderTextColor="white"
        keyboardType="number-pad"
        onChange={(e) => handleOnChange(e, "mountLockedStake")}
        errorMessage={errorMount}
      />
      <View style={styles.containerBoxes}>
        <View style={styles.box}>
          <Text style={styles.descText}>Moneda: AR$</Text>
        </View>
        <View style={styles.containerBox}>
          <View style={styles.box1}>
            <Text style={styles.descText}>Tiempo de Plazo: 30 días</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.descText}>53 % TNA</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={() => createLockedStake()}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#667eea", "#764ba2"]}
            style={{ paddingVertical: 10, width: 280, borderRadius: 11 }}
          >
            <Text style={{ color: "#ffffff", textAlign: "center" }}>
              Confirmar
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 450,
    width: 350,
    alignItems: "center",
    paddingTop: 20,
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  subText: {
    paddingTop: 20,
    color: "gray",
    fontSize: 15,
  },
  descText: {
    color: "white",
    fontSize: 13,
    // paddingLeft: 10,
  },
  input: {
    textAlign: "center",
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    width: 300,
    height: 80,
  },
  containerBoxes: {
    justifyContent: "space-between",
  },
  containerBox: {
    flexDirection: "row",
  },
  containerButton: {
    justifyContent: "center",
    paddingVertical: 20,
  },
  box: {
    paddingLeft: "7%",
    color: "white",
    paddingTop: 15,
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    width: 130,
    height: 55,
    margin: 10,
    borderRadius: 20,
  },
  box1: {
    paddingLeft: "3%",
    color: "white",
    paddingTop: 15,
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    width: 170,
    height: 55,
    margin: 10,
    borderRadius: 20,
  },
  box2: {
    paddingLeft: "10%",
    color: "white",
    paddingTop: 15,
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    width: 130,
    height: 55,
    margin: 10,
    borderRadius: 20,
  },
});
export default RenderScreenPlazoFijo;
