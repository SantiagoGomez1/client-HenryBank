import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";

const DetailUser = () => {
  const user = useSelector((state) => state.userData);
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <View>
          <Text style={styles.textPerfil}>Perfil</Text>
        </View>
        <View>
          <Image
            style={styles.imgUser}
            source={require("../../imgs/userImgDefault.png")}
          ></Image>
          <Text style={styles.textMain}>
            {user.name} {user.lastName}
          </Text>
        </View>
        <View style={styles.container2}>
          <View>
            <Text style={styles.textMain2}>Datos personales</Text>
            <Text style={styles.textSecondary}>Dni: {user.identity}</Text>
            <Text style={styles.textSecondary}>Genero: {user.gender}</Text>
            <Text style={styles.textSecondary}>
              Cumpleaños: {user.dateOfBirth}
            </Text>
            <Text style={styles.textSecondary}>Ciudad: {user.city}</Text>
            <Text style={styles.textSecondary}>País: {user.nationality}</Text>
            <Text style={styles.textSecondary}>Dirección: {user.address}</Text>
          </View>
          <View>
            <Text style={styles.textMain2}>Datos bancarios</Text>
            <Text style={styles.textSecondary}>Alias:</Text>
            <Text style={styles.textSecondary}>CBU:</Text>
            <Text style={styles.textSecondary}>CVU:</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 50,
    padding: 15,
  },
  background: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-evenly",
  },
  imgUser: {
    height: 175,
    width: 175,
    borderRadius: 100,
    alignSelf: "center",
    margin: 10,
  },
  textMain: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
  },
  textMain2: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  textSecondary: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
  },
  textPerfil: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default DetailUser;
