import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "react-native-paper";

const Help = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate("Configs");
  };
  return (
    <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
      <Text style={styles.title}>Ayuda</Text>
      <View style={styles.containerText}>
        <Text style={styles.description}>
          Si necesitas ayuda puedes escribirnos en nuesta cuenta de instagram
        </Text>
        <IconButton
          style={styles.icon}
          icon="instagram"
          color="orange"
          size={50}
        />
        <Text style={styles.description}>@henrybank.app</Text>
      </View>
      <TouchableOpacity>
        <Text onPress={() => goBack()} style={styles.back}>
          Volver
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-around",
    paddingTop: Constants.statusBarHeight,
  },
  containerText: {
    width: 300,
    alignSelf: "center",
    padding: 5,
    borderColor: "#126492",
    backgroundColor: "#140152",
    borderWidth: 1,
    borderRadius: 8,
  },
  icon: {
    alignSelf: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  description: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    padding: 10,
  },
  back: {
    color: "aqua",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Help;
