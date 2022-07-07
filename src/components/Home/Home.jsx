import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import UserCardHome from "../UserCardHome/UserCardHome.jsx";
import UserCapital from '../UserCapital/UserCapital.jsx'

const Home = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <View>
          <UserCardHome />
        </View>
        <View>
          <UserCapital />
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
});

export default Home;
