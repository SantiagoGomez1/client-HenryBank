import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";
import { renderScreen } from "../../redux/actions";
const RenderScreenMovimientosDetail = () => {
  const dispatch = useDispatch();

  const setScreen = (screen) => {
    dispatch(renderScreen(screen));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Noticias</Text>
      <Button title="ATRAS" onPress={() => setScreen(3)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "white",
    height: 450,
    width: 350,
    borderRadius: 8,
    alignItems: "center",
    paddingTop: 20,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default RenderScreenMovimientosDetail;
