import React from "react";

import { View, Text, StyleSheet } from "react-native";

const RenderScreen = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container:{
    borderWidth: 1,
    borderColor: "white",
    height: 500,
    width: 300
  },
});
export default RenderScreen;
