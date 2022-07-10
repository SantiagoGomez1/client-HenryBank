import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const DetailUser = () => {
  const user = useSelector((state) => state.userDetail);
  const navigation = useNavigation();
  const goHome = () => {
    navigation.navigate("HomeRoutes");
  };
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <View>
          <TouchableOpacity onPress={() => goHome()}>
            <Text style={styles.textPerfil}>⬅ Perfil</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image style={styles.imgUser} source={{ uri: user.image }}></Image>
          <Text style={styles.textMain}>
            {user.name} {user.lastName}
          </Text>
        </View>
        <View style={styles.container2}>
          <View>
            <Text style={styles.textMain2}>Datos personales</Text>
            <Text style={styles.textSecondary}>DNI: {user.identity}</Text>
            <Text style={styles.textSecondary}>Genero: {user.gender}</Text>
            <Text style={styles.textSecondary}>
              Cumpleaños: {user.dateOfBirth}
            </Text>
            <Text style={styles.textSecondary}>Ciudad: {user.city}</Text>
            <Text style={styles.textSecondary}>País: {user.nationality}</Text>
            <Text style={styles.textSecondary}>Dirección: {user.address}</Text>
            <Text style={styles.textSecondary}>E-mail: {user.email}</Text>
          </View>
          <View>
            <Text style={styles.textMain2}>Datos bancarios</Text>
            <Text style={styles.textSecondary}>Alias: {user.alias}</Text>
            <Text style={styles.textSecondary}>CBU: {user.cbu}</Text>
            <Text style={styles.textSecondary}>Balance: {user.balance}</Text>
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
    height: 300,
    width: 300,
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
    padding: 5,
  },
  textPerfil: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default DetailUser;
