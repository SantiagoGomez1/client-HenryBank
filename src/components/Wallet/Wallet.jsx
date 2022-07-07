import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import { StyleSheet, View } from "react-native";
import CarouselImages from "../CarouselImages/CarouselImages.jsx";
import WalletTotal from "../WalletTotal/WalletTotal.jsx";

const Wallet = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <WalletTotal money={150000} />
        <CarouselImages />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
  },
});

export default Wallet;
