import React, { useEffect } from "react";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

import { renderScreen } from "../../redux/actions/index.js";
import { useDispatch } from 'react-redux'

import CarouselImages from "../CarouselImages/CarouselImages.jsx";
import WalletTotal from "../WalletTotal/WalletTotal.jsx";
import UserCardHome from "../UserCardHome/UserCardHome";

const Wallet = () => {
  const dispatch = useDispatch()
  const [activeSlide, setActiveSlide] = React.useState(0);
  
  useEffect(() => {
    dispatch(renderScreen(0))
  },[dispatch])
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <UserCardHome />
        <WalletTotal money={150000} />
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
