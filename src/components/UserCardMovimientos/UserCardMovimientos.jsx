import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import { useDispatch } from "react-redux";

import { renderScreen, detailMovements } from "../../redux/actions/index";

const CardUserMovimientos = ({ id, image, name, amount, date }) => {
  const dispatch = useDispatch();
  const setScreen = (screen) => {
    dispatch(renderScreen(screen));
  };

  const [idState, setIdState] = useState(id);

  const sendId = () => {
    setIdState(id);
    setScreen(8);
    dispatch(detailMovements(idState));
  };

  return (
    <TouchableOpacity onPress={() => sendId()}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.borde}>
            <Icon
              name={image}
              type="material-community"
              size={35}
              color={amount < 0 ? "red" : "#00FF00"}
            />
          </View>
          <View style={styles.data}>
            <Text style={styles.text}>{name}</Text>
            <Text style={{ color: "white" }}>{date}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.textAmount}>${amount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  img: {
    width: 38,
    height: 38,
  },
  borde: {
    alignItems: "center",
    borderColor: "white",
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  textAmount: {
    justifyContent: "center",
    textAlign: "center",
    padding: 15,
    color: "white",
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    height: 50,
    margin: 10,
    borderRadius: 20,
  },
  data: {
    padding: 10,
  },
});

export default CardUserMovimientos;
