import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const AdminUserDetail = () => {
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate("Admin Routes");
  };
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textTitle}>Detalle de usuario</Text>
        <Text style={styles.btn} onPress={() => onClick()}>
          Volver
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: Constants.statusBarHeight,
  },
  textTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  btn: {
    color: "aqua",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default AdminUserDetail;
