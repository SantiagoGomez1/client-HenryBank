import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";

const AdminUserDetail = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textTitle}>Detalle de usuario</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  textTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default AdminUserDetail;
