import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import { Text, ScrollView, StyleSheet } from "react-native";
import CarouselImages from "../CarouselImages/CarouselImages.jsx";
import WalletTotal from "../WalletTotal/WalletTotal.jsx";

const Wallet = () => {
  return (
    <ScrollView>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <WalletTotal money={150000} />
        <CarouselImages />
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-around",
  },
});

export default Wallet;
