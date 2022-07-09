import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import {useSelector} from 'react-redux';

const RegisterC = () => {
  const userData = useSelector(state => state.userData)
  // console.log('esto es userData', userData)
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
            <Text style={styles.textSecondary}>Nombre: <Text style={styles.textTertiary}>{userData.name}</Text></Text>            
            <Text style={styles.textSecondary}>Apellido: <Text style={styles.textTertiary}>{userData.lastName}</Text></Text>            
            <Text style={styles.textSecondary}>Cedula de identidad/D.N.I: <Text style={styles.textTertiary}>{userData.identity}</Text></Text>            
            <Text style={styles.textSecondary}>Fecha de nacimiento: <Text style={styles.textTertiary}>{userData.dateOfBirth}</Text></Text>            
            <Text style={styles.textSecondary}>Ciudad: <Text style={styles.textTertiary}>{userData.city}</Text></Text>            
            <Text style={styles.textSecondary}>Nacionalidad: <Text style={styles.textTertiary}>{userData.nationality}</Text></Text>            
            <Text style={styles.textSecondary}>Domicilio: <Text style={styles.textTertiary}>{userData.address}</Text></Text>            
            
            {/* <Text style={styles.main2}>DATOS DE LA CUENTA</Text>            
            <Text style={styles.textSecondary}>E-mail: <Text style={styles.textTertiary}>{userData.email}</Text></Text>            
            <Text style={styles.textSecondary}>Contraseña: <Text style={styles.textTertiary}>{userData.password}</Text></Text>             */}
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
    fontWeight: "bold",
  },
  textTertiary: {
    color: "#fff",
    fontSize: 15,
    color: 'black',
  },
  btn: {
    alignSelf: "center",
  },
});

export default RegisterC;
