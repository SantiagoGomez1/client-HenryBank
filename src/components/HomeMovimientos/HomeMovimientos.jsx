import React from "react";

import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import UserCardHome from "../UserCardHome/UserCardHome.jsx";
import UserCapital from "../UserCapital/UserCapital.jsx";
import HomeBubbleMenu from "../HomeBubbleMenu/HomeBubbleMenu.jsx";


const HomeMovimientos = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <View>
          <UserCardHome />
        </View>
        <View>
          <UserCapital />
        </View>
        <View style={styles.homeBubble}>
          <HomeBubbleMenu />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      flex: 1,
    },
    homeBubble:{
      paddingTop:15,
    }
  });

export default HomeMovimientos;
