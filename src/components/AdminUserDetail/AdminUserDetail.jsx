import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";
import AdminUserCard from "../AdminUserCard/AdminUserCard";

const AdminUserDetail = () => {
  const route = useRoute();
  const { info } = route.params;
  console.log(info);
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
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.titleMain}>Opciones</Text>
          <View style={styles.containerOpciones}>
            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.textSecondary}>Plazos fijos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.textSecondary}>Transacciones</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerOpciones}>
            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.textSecondary}>Banear</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.textSecondary}>Desbanear</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerOpciones}>
            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.textSecondary}>Hacer admin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
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
