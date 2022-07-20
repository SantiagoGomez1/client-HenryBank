import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

import CarouselImages from "../CarouselImages/CarouselImages.jsx";
import WalletTotal from "../WalletTotal/WalletTotal.jsx";
import UserCardHome from "../UserCardHome/UserCardHome";

const Wallet = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <UserCardHome />
        <WalletTotal />
        <CarouselImages
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
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

export default Wallet;
