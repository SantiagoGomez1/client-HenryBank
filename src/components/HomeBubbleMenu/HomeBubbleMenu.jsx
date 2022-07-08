import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { IconButton } from "react-native-paper";

const HomeBubbleMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <IconButton
          style={{ paddingTop: 20 }}
          icon="bank-transfer-out"
          color="white"
          size={50}
          onPress={() => console.log("uy")}
        />
        <Text style={{ color: "white", paddingBottom: 10 }}>Ingresar</Text>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton
          style={{ paddingTop: 24 }}
          icon="bank-transfer"
          color="white"
          size={50}
          onPress={() => console.log("uy")}
        />
        <Text style={{ color: "white", paddingBottom: 10 }}>Transferir</Text>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton
          style={{ paddingTop: 20 }}
          icon="sync"
          color="white"
          size={40}
          onPress={() => console.log("uy")}
        />
        <Text style={{ color: "white", paddingTop:5 }}>Movimientos</Text>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton
          style={{ paddingTop: 15 }}
          icon="align-vertical-bottom"
          color="white"
          size={40}
          onPress={() => console.log("uy")}
        />
        <Text style={{ color: "white", paddingTop:5 }}>Inversiones</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 55,
  },
});

export default HomeBubbleMenu;
