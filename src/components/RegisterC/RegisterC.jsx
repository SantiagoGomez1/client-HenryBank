import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import { useSelector } from "react-redux";

const RegisterC = () => {
  const userData = useSelector((state) => state.userData);
  // console.log('esto es userData', userData)
  const navigation = useNavigation();
  const goHome = () => {
    navigation.navigate("Success");
  };
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.titleMain}>Regístrate</Text>
        <View style={styles.dataContainer}>
            <Text style={styles.main2}>DATOS PERSONALES</Text>
          <View style={styles.datos}>
            <Text style={styles.textSecondary}>
              Nombre : <Text style={styles.textTertiary}>{userData.name}</Text>
            </Text>
            <Text style={styles.textSecondary}>
              Apellido :{" "}
              <Text style={styles.textTertiary}>{userData.lastName}</Text>
            </Text>
            <Text style={styles.textSecondary}>
              Cedula de identidad/D.N.I :{" "}
              <Text style={styles.textTertiary}>{userData.identity}</Text>
            </Text>
            <Text style={styles.textSecondary}>
              Fecha de nacimiento :{" "}
              <Text style={styles.textTertiary}>{userData.dateOfBirth}</Text>
            </Text>
            <Text style={styles.textSecondary}>
              Ciudad : <Text style={styles.textTertiary}>{userData.city}</Text>
            </Text>
            <Text style={styles.textSecondary}>
              Nacionalidad :{" "}
              <Text style={styles.textTertiary}>{userData.nationality}</Text>
            </Text>
            <Text style={styles.textSecondary}>
              Domicilio :{" "}
              <Text style={styles.textTertiary}>{userData.address}</Text>
            </Text>

            {/* <Text style={styles.main2}>DATOS DE LA CUENTA</Text>            
            <Text style={styles.textSecondary}>E-mail: <Text style={styles.textTertiary}>{userData.email}</Text></Text>            
            <Text style={styles.textSecondary}>Contraseña: <Text style={styles.textTertiary}>{userData.password}</Text></Text>             */}
          </View>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => goHome()}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#667eea", "#764ba2"]}
              style={{
                paddingVertical: 10,
                width: 150,
                borderRadius: 10,
                marginTop: 10,
              }}
            >
              <Text style={{ color: "#ffffff", textAlign: "center" }}>
                Siguiente
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#140152",
  },
  dataContainer:{
    borderWidth: 1,
    height: 450,
    width: 350,
    borderRadius: 30,
    alignSelf:'center',
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
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
    marginRight:40
  },
  titleMain: {
    color: "#fff",
    fontSize: 40,
    alignSelf: "center",
  },
  main2: {
    color: "#fff",
    alignSelf: "center",
    marginTop:20,
    margin: 10,
  },
  textSecondary: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    margin:10
  },
  textTertiary: {
    color: "#fff",
    alignSelf: "center",
  },
  btn: {
    alignSelf: "center",
  },
});

export default RegisterC;
