import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux'
import { renderScreen } from "../../redux/actions";

const SuccessTransferencia = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const set = () => {
    setTimeout(() => {
      navigation.navigate("HomeRoutes");
      dispatch(renderScreen(0))
    }, 1500);
  };

  useEffect(() => {
    set();
  }, []);
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textMain}>Operacion Exitosa</Text>
        <Image
          style={styles.imgSuccess}
          source={require("../../imgs/Check.png")}
        ></Image>
        <Text style={styles.textSecondaty}>¡Gracias!</Text>
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

export default SuccessTransferencia;
