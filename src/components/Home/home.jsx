import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import UserCardHome from "../UserCardHome/UserCardHome.jsx";

const Home = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // colors={["#0965C0","#285EB9","purple","#140152"]}
        colors={["#39358B", "#126492"]}
        style={styles.background}
      >
        <Text>
          <UserCardHome />
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: 1000,
  },
});

export default Home;
