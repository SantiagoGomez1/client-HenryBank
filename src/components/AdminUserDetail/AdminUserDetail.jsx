import React, { useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getAllUsers } from "../../redux/actions";
import AdminUserCard from "../AdminUserCard/AdminUserCard";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

const AdminUserDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { info } = route.params;
  console.log("info", info);
  const token = useSelector((state) => state.logIn.token);

  useEffect(() => {
    dispatch(getAllUsers(token));
  }, [dispatch]);

  const goCrypto = (email) => {
    navigation.navigate("AdminMovements", {
      email: email,
      type: "Cryptos",
      name: `${info.name} ${info.lastName}`,
    });
  };
  const goPlazos = (email) => {
    navigation.navigate("AdminMovements", {
      email: email,
      type: "Plazos fijos",
      name: `${info.name} ${info.lastName}`,
    });
  };
  const goTransacciones = (email) => {
    navigation.navigate("AdminMovements", {
      email: email,
      type: "Transacciones",
      name: `${info.name} ${info.lastName}`,
    });
  };

  const ban = (email) => {
    Alert.alert(
      "Ban",
      `¿Seguro quieres banear a ${info.name} ${info.lastName}?`,
      [
        {
          text: "Cancelar",
        },
        {
          text: "Si",
          onPress: () =>
            navigation.navigate("AdminConfirmation", {
              email: email,
              token: token,
              type: "BN",
              name: `${info.name} ${info.lastName}`,
            }),
        },
      ]
    );
  };
  const disban = (email) => {
    Alert.alert(
      "Ban",
      `¿Seguro quieres desbanear a ${info.name} ${info.lastName}?`,
      [
        {
          text: "Cancelar",
        },
        {
          text: "Si",
          onPress: () =>
            navigation.navigate("AdminConfirmation", {
              email: email,
              token: token,
              type: "DB",
              name: `${info.name} ${info.lastName}`,
            }),
        },
      ]
    );
  };
  const admintoUser = (email) => {
    Alert.alert(
      "Change Role",
      `¿Seguro quieres convertir en admin a ${info.name} ${info.lastName}?`,
      [
        {
          text: "Cancelar",
        },
        {
          text: "Si",
          onPress: () =>
            navigation.navigate("AdminConfirmation", {
              email: email,
              token: token,
              type: "AU",
              name: `${info.name} ${info.lastName}`,
            }),
        },
      ]
    );
  };

  const usertoAdmin = (email) => {
    if (info.role === "admin") {
      Alert.alert(
        "Usuario a admin",
        `${info.name} ${info.lastName} ya es administrador`
      );
    }
    Alert.alert(
      "Change Role",
      `¿Seguro quieres convertir en admin a ${info.name} ${info.lastName}?`,
      [
        {
          text: "Cancelar",
        },
        {
          text: "Si",
          onPress: () =>
            navigation.navigate("AdminConfirmation", {
              email: email,
              token: token,
              type: "UA",
              name: `${info.name} ${info.lastName}`,
            }),
        },
      ]
    );
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <AdminUserCard ruta={"AdminHome"} />
        <View style={styles.container}>
          <Text style={styles.textMain}>Datos de usuario</Text>
          <Image style={styles.img} source={{ uri: info.image }} />
          {info.role === "admin" ? (
            <Text style={styles.textMainAdmin}>
              {info.name} {info.lastName}
            </Text>
          ) : (
            <Text style={styles.textMain}>
              {info.name} {info.lastName}
            </Text>
          )}
          <View style={{ margin: 10 }}>
            <Text style={styles.textSubtile}>Información bancaria</Text>
            <Text style={styles.textSecondary}>{info.email}</Text>
            <Text style={styles.textSecondary}>{info.alias}</Text>
            <Text style={styles.textSecondary}>{info.cbu}</Text>
            <View
              style={{
                alignItems: "center",
                alignSelf: "center",
                flexDirection: "column",
                marginTop: 15,
              }}
            >
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => goCrypto(info.email)}
              >
                <Text style={styles.textSecondary}>Cryptos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => goPlazos(info.email)}
              >
                <Text style={styles.textSecondary}>Plazos fijos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => goTransacciones(info.email)}
              >
                <Text style={styles.textSecondary}>Transacciones</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.textMain}>Opciones</Text>
          <View style={styles.containerOpciones}>
            {info.state === "offline" ? (
              <TouchableOpacity
                style={styles.touchable}
                onPress={() =>
                  Alert.alert(
                    "Deshabilitar cuenta",
                    `La cuenta de ${info.name} ${info.lastName} ya esta deshabilitada`
                  )
                }
              >
                <Text style={styles.textSecondary}>Banear</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => ban(info.email)}
              >
                <Text style={styles.textSecondary}>Banear</Text>
              </TouchableOpacity>
            )}
            {info.state === "online" ? (
              <TouchableOpacity
                style={styles.touchable}
                onPress={() =>
                  Alert.alert(
                    "Habilitar cuenta",
                    `La cuenta de ${info.name} ${info.lastName} ya esta habilitada`
                  )
                }
              >
                <Text style={styles.textSecondary}>Desbanear</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => disban(info.email)}
              >
                <Text style={styles.textSecondary}>Desbanear</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.containerOpciones}>
            {info.role === "admin" ? (
              <TouchableOpacity
                style={styles.touchable}
                onPress={() =>
                  Alert.alert(
                    "Hace admin",
                    `${info.name} ${info.lastName} ya es admin`
                  )
                }
              >
                <Text style={styles.textSecondary}>Hacer admin</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => usertoAdmin(info.email)}
              >
                <Text style={styles.textSecondary}>Hacer admin</Text>
              </TouchableOpacity>
            )}

            {info.role === "user" ? (
              <TouchableOpacity
                style={styles.touchable}
                onPress={() =>
                  Alert.alert(
                    "Hace usuario",
                    `${info.name} ${info.lastName} ya es usuario`
                  )
                }
              >
                <Text style={styles.textSecondary}>Hacer usuario</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => admintoUser(info.email)}
              >
                <Text style={styles.textSecondary}>Hacer usuario</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: 10,
    margin: 20,
    borderRadius: 50,
  },
  textMain: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  textMainAdmin: {
    color: "gold",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  textTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  btn: {
    color: "aqua",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  img: {
    width: 200,
    height: 200,
    alignSelf: "center",
    margin: 10,
    borderRadius: 100,
  },
  textSecondary: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
    margin: 2,
  },
  textSubtile: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
  },
  containerOpciones: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  touchable: {
    backgroundColor: "#140152",
    padding: 10,
    borderRadius: 50,
    width: "45%",
    margin: 2,
  },
});

export default AdminUserDetail;
