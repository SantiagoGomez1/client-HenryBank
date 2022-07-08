import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { IconButton } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

const HomeBubbleMenu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <IconButton
          style={styles.btn}
          icon="bank-transfer-out"
          color="white"
          size={40}
          onPress={() => console.log("uy")}
        />
        <Text style={styles.text}>Ingresar</Text>
      </View>
      <View>
        <IconButton
          style={styles.btn}
          icon="bank-transfer"
          color="white"
          size={40}
          onPress={() => console.log("uy")}
        />
        <Text style={styles.text}>Transferir</Text>
      </View>
      <View>
        <IconButton
          style={styles.btn}
          icon="sync"
          color="white"
          size={40}
          onPress={() => navigation.navigate("HomeMovimientos")}
        />
        <Text style={styles.text}>Movimientos</Text>
      </View>
      <View>
        <IconButton
          style={styles.btn}
          icon="align-vertical-bottom"
          color="white"
          size={40}
          onPress={() => console.log("uy")}
        />
        <Text style={styles.text}>Inversiones</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    fontSize: 8.5,
    color: "#fff",
    paddingTop: 3,
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "white",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 60,
  },
});

export default HomeBubbleMenu;
