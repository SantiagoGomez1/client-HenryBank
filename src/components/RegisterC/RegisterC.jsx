import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";

const RegisterC = () => {
  const navigation = useNavigation();
  const goHome = () => {
    navigation.navigate("Success");
  };
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.titleMain}>Regístrate</Text>
        <View>
          <View style={styles.datos}>
            <Text style={styles.main2}>DATOS PERSONALES</Text>
            <Text style={styles.textSecondary}>Cedula de identidad/D.N.I:</Text>
            <Text style={styles.textSecondary}>Fecha de nacimiento:</Text>
            <Text style={styles.textSecondary}>Ciudad:</Text>
            <Text style={styles.textSecondary}>Nacionalidad:</Text>
            <Text style={styles.textSecondary}>Domicilio:</Text>
            <Text style={styles.main2}>DATOS DE LA CUENTA</Text>
            <Text style={styles.textSecondary}>E-mail:</Text>
            <Text style={styles.textSecondary}>Contraseña:</Text>
          </View>
        </View>
        <View style={styles.btn}>
          <Button title="Siguiente" onPress={() => goHome()}></Button>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#140152",
  },
  background: {
    flex: 1,
    justifyContent: "space-around",
    paddingTop: Constants.statusBarHeight,
  },
  datos: {
    alignSelf: "center",
    height: "auto",
    padding: 30,
  },
  titleMain: {
    color: "#fff",
    fontSize: 40,
    alignSelf: "center",
  },
  main2: {
    color: "#fff",
    alignSelf: "center",
    margin: 15,
  },
  textSecondary: {
    color: "#fff",
    fontSize: 15,
  },
  btn: {
    alignSelf: "center",
  },
});

export default RegisterC;
