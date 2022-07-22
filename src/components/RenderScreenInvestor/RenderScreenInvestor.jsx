import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";
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
      <View style={styles.btn}>
        <Button
          title="¡Entra aquí y obtenlo!"
          color={"purple"}
          onPress={() => setScreen(5)}
        ></Button>
      </View>
      <Text style={styles.text2}>¿Querés comprar crypto?</Text>
      <View style={styles.btn2}>
        <Button
          title="¡Entra aquí y comprá!"
          color={"purple"}
          onPress={() => navigation.navigate("InvestorBuy")}
        />
      </View>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "white",
    height: 450,
    width: 350,
    borderRadius: 8,
    paddingTop: 20,
    justifyContent: "space-between",
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
