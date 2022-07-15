import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import { getUserDetail } from "../../redux/actions";

const DetailUser = () => {
  const user = useSelector((state) => state.userDetail);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const log = useSelector((state) => state.logIn.token);
  const goBack = () => {
    navigation.navigate("Configs");
  };
  useEffect(() => {
    dispatch(getUserDetail(log));
  }, []);
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <TouchableOpacity style={styles.back} onPress={() => goBack()}>
          <Text style={styles.btn}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.textPerfil}>Perfil</Text>
        <View>
          <Image style={styles.imgUser} source={{ uri: user.image }}></Image>
          <Text style={styles.textMain}>
            {user.name} {user.lastName}
          </Text>
        </View>
        <View style={styles.container2}>
          <View>
            <Text style={styles.textMain2}>Datos Personales</Text>
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
            <Text style={styles.textMain2}>Datos Bancarios</Text>
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
    borderColor: "#126492",
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    margin: 5,
    width: 300,
  },
  background: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    paddingTop: Constants.statusBarHeight,
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
    fontSize: 25,
    textAlign: "center",
  },
  textMain2: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  textSecondary: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
    padding: 2,
    margin: 4,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 8,
  },
  textPerfil: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  btn: {
    fontSize: 40,
    color: "aqua",
  },
  back: {
    position: "absolute",
    left: 0,
    margin: 10,
  },
});

export default DetailUser;
