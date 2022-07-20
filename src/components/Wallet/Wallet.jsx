import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

import WalletTotal from "../WalletTotal/WalletTotal.jsx";
import UserCardHome from "../UserCardHome/UserCardHome";
import CreditCards from "../CreditCards/CreditCards"

const Wallet = () => {

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <UserCardHome />
        <WalletTotal />
        <View style={styles.card}>

        <CreditCards />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    margin: 10,
    borderRadius: 8,
    padding: 10,
    height: 450,
  },
});

export default Wallet;
