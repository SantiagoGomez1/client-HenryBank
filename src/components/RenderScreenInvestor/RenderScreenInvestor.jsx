import React from "react";

import { View, Text, StyleSheet, Image, Button } from "react-native";

const RenderScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Inversiones</Text>
      <View style={styles.containerButton}>
        <View>
          <Button style={styles.btn} title="Plazo Fijo"></Button>
        </View>
        <View>
          <Button style={styles.btn} title="Divisas/Crypto"></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "white",
    height: 450,
    width: 350,
    borderRadius: 25,
    paddingTop: 20,
  },
  containerButton: {
    flex: 1,
    justifyContent: "center",
    justifyContent:'space-evenly',
    marginHorizontal: 20,
  },
  text: {
    alignSelf: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default RenderScreen;
