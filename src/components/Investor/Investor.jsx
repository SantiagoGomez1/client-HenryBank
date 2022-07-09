import React from "react";
import Constants from 'expo-constants'
import { View, Text, StyleSheet, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import UserCardHome from "../UserCardHome/UserCardHome";
import WalletTotal from "../WalletTotal/WalletTotal";
import Possession from "../Possession/Possession";
import HomeBubbleMenu from "../HomeBubbleMenu/HomeBubbleMenu";

const Investor = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <UserCardHome />
        <Button
          title="InvestorBuy"
          onPress={() => navigation.navigate("InvestorBuy")}
        />
        <WalletTotal money={150000} />
        <HomeBubbleMenu />
        <Possession />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-around",
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
  },
});

export default Investor;
