import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import UserCardHome from "../UserCardHome/UserCardHome";
import WalletTotal from "../WalletTotal/WalletTotal";
import Possession from "../Possession/Possession";

const Investor = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <UserCardHome />
        <WalletTotal money={150000} />
        <Possession />
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
});

export default Investor;
