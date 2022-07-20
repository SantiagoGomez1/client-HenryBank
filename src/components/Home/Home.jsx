import React from "react";

import { View, StyleSheet, Text, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity } from "react-native";
import { renderScreen } from "../../redux/actions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import UserCardHome from "../UserCardHome/UserCardHome.jsx";
import UserCapital from "../UserCapital/UserCapital.jsx";
import HomeBubbleMenu from "../HomeBubbleMenu/HomeBubbleMenu.jsx";
import RenderScreen from "../RenderScreen/RenderScreen.jsx";
import RenderScreenMovimientosDetail from "../RenderScreenMovimientosDetail/RenderScreenMovimientosDetail";
import RenderScreenTransferirMonto from "../RenderScreenTransferirMonto/RenderScreenTransferirMonto.jsx";
import RenderScreenIngresarMonto from "../RenderScreenIngresarMonto/RenderScreenIngresarMonto.jsx";
import RenderScreenMovimientos from "../RenderScreenMovimientos/RenderScreenMovimientos.jsx";
import RenderScreenTransferir from "../RenderScreenTransferir/RenderScreenTransferir.jsx";
import RenderScreenPlazoFijo from "../RenderScreenPlazoFijo/RenderScreenPlazoFijo.jsx";
import RenderScreenInvestor from "../RenderScreenInvestor/RenderScreenInvestor.jsx";
import RenderScreenIngresar from "../RenderScreenIngresar/RenderScreenIngresar.jsx";

var { height } = Dimensions.get("window");

const Home = () => {
  let screen = useSelector((state) => state.renderScreen);
  const dispatch = useDispatch();

  const setScreen = (screen) => {
    dispatch(renderScreen(screen));
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <UserCardHome />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity onPress={() => setScreen(0)}>
            <Text
              style={{
                color: "#140152",
                backgroundColor: "aqua",
                padding: 5,
                borderRadius: 50,
              }}
            >
              ¡NOTICIAS!
            </Text>
          </TouchableOpacity>
          <UserCapital />
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
          ) : screen === 8 ? (
            <RenderScreenMovimientosDetail />
          ) : (
            <RenderScreen />
          )}
        </View>

        <View></View>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#140152",
  },
  background: {
    justifyContent: "space-between",
    flex: 1,
    height: height - 50,
  },
});

export default Home;
