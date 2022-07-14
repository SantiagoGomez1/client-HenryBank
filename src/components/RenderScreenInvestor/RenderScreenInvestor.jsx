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
      <Text style={styles.text3}>
        Tu apartado en el cual tus inversiones son fáciles
      </Text>
      <Text style={styles.text2}>¿Necesitas obtener un plazo fijo?</Text>
      <View style={styles.btn}>
        <Button
          title="¡Entra aquí y obtenlo!"
          onPress={() => setScreen(5)}
        ></Button>
      </View>
      <Text style={styles.text2}>¿Querés comprar cripto o divisas?</Text>
      <View style={styles.btn2}>
        <Button
          title="¡Entra aquí y comprá!"
          onPress={() => navigation.navigate("InvestorBuy")}
        />
      </View>
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
