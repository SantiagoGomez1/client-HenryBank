import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { IconButton } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

const HomeBubbleMenu = () => {
  const navigation = useNavigation();
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
        <View>
          <Text style={{ color: "white", paddingBottom: 10, fontSize:8.5 }}>Ingresar</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton
          style={{ paddingTop: 24 }}
          icon="bank-transfer"
          color="white"
          size={50}
          onPress={() => console.log("uy")}
        />
        <View>
          <Text style={{ color: "white", paddingBottom: 10, fontSize:8.5 }}>Transferir</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton
          style={{ paddingTop: 20 }}
          icon="sync"
          color="white"
          size={40}
          onPress={() => navigation.navigate("HomeMovimientos")}
        />
        <View>
          <Text style={{ color: "white", paddingTop: 5, fontSize:8.5 }}>Movimientos</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton
          style={{ paddingTop: 15 }}
          icon="align-vertical-bottom"
          color="white"
          size={40}
          onPress={() => console.log("uy")}
        />
        <View>
          <Text style={{ color: "white", paddingTop: 5, fontSize:9 }}>Inversiones</Text>
        </View>
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
