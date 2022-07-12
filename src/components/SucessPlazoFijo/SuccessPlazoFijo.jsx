import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux'
import { renderScreen } from "../../redux/actions";

const SuccessPlazoFijo = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const set = () => {
    setTimeout(() => {
      navigation.navigate("HomeRoutes");
      dispatch(renderScreen(0))
    }, 3000);
  };

  useEffect(() => {
    set();
  }, []);
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textMain}>Plazo Fijo Confirmado</Text>
        <Image
          style={styles.imgSuccess}
          source={require("../../imgs/Check.png")}
        ></Image>
        <Text style={styles.textSecondaty}>Para ver el seguimiento de tus inversiones ingrese al apartado de estadisticas.</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    textAlign: "center",
    flex: 1,
    width: "100%",
  },
  background: {
    flex: 1,
    justifyContent: "space-around",
  },
  textMain: {
    color: "#fff",
    fontSize: 40,
    textAlign: "center",
    fontWeight:'bold'
  },
  textSecondaty: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  imgSuccess: {
    height: 300,
    width: 300,
    alignSelf: "center",
    padding: 5,
  },
});

export default SuccessPlazoFijo;
