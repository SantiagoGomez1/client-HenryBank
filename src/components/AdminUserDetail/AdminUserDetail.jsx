import React from "react";
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
import { useRoute } from "@react-navigation/native";
import AdminUserCard from "../AdminUserCard/AdminUserCard";
import { useNavigation } from "@react-navigation/native";
import {
  banUser,
  disbanUser,
  userToAdmin,
  adminToUser,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const AdminUserDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { info } = route.params;
  const token = useSelector((state) => state.logIn.token);
  const dispatch = useDispatch();

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
        { text: "Si", onPress: () => dispatch(banUser(email, token)) },
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
        { text: "Si", onPress: () => dispatch(disbanUser(email, token)) },
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
        { text: "Si", onPress: () => dispatch(adminToUser(email, token)) },
      ]
    );
  };

  const usertoAdmin = (email) => {
    Alert.alert(
      "Change Role",
      `¿Seguro quieres convertir en admin a ${info.name} ${info.lastName}?`,
      [
        {
          text: "Cancelar",
        },
        { text: "Si", onPress: () => dispatch(userToAdmin(email, token)) },
      ]
    );
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <AdminUserCard ruta={"AdminHome"} />
        <View style={styles.container}>
          <Text style={styles.titleMain}>Datos de usuario</Text>
          <Image style={styles.img} source={{ uri: info.image }} />
          <Text style={styles.textTitle}>
            {info.name} {info.lastName}
          </Text>
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
          <Text style={styles.titleMain}>Opciones</Text>
          <View style={styles.containerOpciones}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => ban(info.email)}
            >
              <Text style={styles.textSecondary}>Banear</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => disban(info.email)}
            >
              <Text style={styles.textSecondary}>Desbanear</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerOpciones}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => usertoAdmin(info.email)}
            >
              <Text style={styles.textSecondary}>Hacer admin</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => admintoUser(info.email)}
            >
              <Text style={styles.textSecondary}>Hacer usuario</Text>
            </TouchableOpacity>
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
  titleMain: {
    color: "#fff",
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
