import React from "react";
import Constants from 'expo-constants'
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

import CarouselImages from "../CarouselImages/CarouselImages.jsx";
import WalletTotal from "../WalletTotal/WalletTotal.jsx";
import UserCardHome from "../UserCardHome/UserCardHome";
import HomeBubbleMenu from "../HomeBubbleMenu/HomeBubbleMenu.jsx";

const Wallet = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <UserCardHome />
        <WalletTotal money={150000} />
        <HomeBubbleMenu />
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
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
  },
});

export default Wallet;
