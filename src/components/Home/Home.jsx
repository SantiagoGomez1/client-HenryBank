import React from "react";

import Constants from "expo-constants";

import { View, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";

import UserCardHome from "../UserCardHome/UserCardHome.jsx";
import UserCapital from "../UserCapital/UserCapital.jsx";
import HomeBubbleMenu from "../HomeBubbleMenu/HomeBubbleMenu.jsx";
import RenderScreen from "../RenderScreen/RenderScreen.jsx";
import RenderScreenTransferirMonto from "../RenderScreenTransferirMonto/RenderScreenTransferirMonto.jsx";
import RenderScreenIngresarMonto from "../RenderScreenIngresarMonto/RenderScreenIngresarMonto.jsx";
import RenderScreenMovimientos from "../RenderScreenMovimientos/RenderScreenMovimientos.jsx";
import RenderScreenTransferir from "../RenderScreenTransferir/RenderScreenTransferir.jsx";
import RenderScreenPlazoFijo from "../RenderScreenPlazoFijo/RenderScreenPlazoFijo.jsx";
import RenderScreenInvestor from "../RenderScreenInvestor/RenderScreenInvestor.jsx";
import RenderScreenIngresar from "../RenderScreenIngresar/RenderScreenIngresar.jsx";

const Home = () => {
  let screen = useSelector((state) => state.renderScreen);
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <View>
          <UserCardHome />
        </View>
        <HomeBubbleMenu />
        <View style={{ alignSelf: "center" }}>
          {screen === 0 ? (
            <RenderScreen />
          ) : screen === 1 ? (
            <RenderScreenIngresar />
          ) : screen === 2 ? (
            <RenderScreenTransferir />
          ) : screen === 3 ? (
            <RenderScreenMovimientos />
          ) : screen === 4 ? (
            <RenderScreenInvestor />
          ) : screen === 5 ? (
            <RenderScreenPlazoFijo />
          ) : screen === 6 ? (
            <RenderScreenIngresarMonto />
          ) : screen === 7 ? (
            <RenderScreenTransferirMonto />
          ) : (
            <RenderScreen />
          )}
        </View>

        <View></View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    paddingTop: Constants.statusBarHeight,
    justifyContent: "space-between",
    flex: 1,
  },
});

export default Home;
