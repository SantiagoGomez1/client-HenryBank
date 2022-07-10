import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { renderScreen } from "../../redux/actions";

const RenderScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const setScreen = (screen) => {
    dispatch(renderScreen(screen));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Inversiones</Text>
      <View style={styles.containerButton}>
        <View>
          <Button title="Plazo Fijo" onPress={() => setScreen(5)}></Button>
        </View>
        <View>
          <Button
            title="Divisas/Crypto"
            onPress={() => navigation.navigate("InvestorBuy")}
          />
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
    justifyContent: "space-evenly",
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
