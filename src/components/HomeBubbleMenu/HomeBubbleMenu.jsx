import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { renderScreen } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "react-native-paper";

const HomeBubbleMenu = () => {
  const dispatch = useDispatch();

  const setScreen = (screen) => {
    dispatch(renderScreen(screen));
  };

  const press = useSelector(state => state.renderScreen)

  return (
    <View style={styles.container}>
      <View>
        {press === 1 || press === 6 ? (
          <IconButton
            style={styles.btnPress}
            icon="bank-transfer-out"
            color="white"
            size={40}
            onPress={() => setScreen(1)}
          />
        ) : (
          <IconButton
            style={styles.btn}
            icon="bank-transfer-out"
            color="white"
            size={40}
            onPress={() => setScreen(1)}
          />
        )}
        <Text style={styles.text}>Ingresar</Text>
      </View>
      <View>
        {press === 2 || press === 7 ? (
          <IconButton
            style={styles.btnPress}
            icon="bank-transfer"
            color="white"
            size={40}
            onPress={() => setScreen(2)}
          />
        ) : (
          <IconButton
            style={styles.btn}
            icon="bank-transfer"
            color="white"
            size={40}
            onPress={() => setScreen(2)}
          />
        )}
        <Text style={styles.text}>Transferir</Text>
      </View>
      <View>
        {press === 3 ? (
          <IconButton
            style={styles.btnPress}
            icon="sync"
            color="white"
            size={40}
            onPress={() => setScreen(3)}
          />
        ) : (
          <IconButton
            style={styles.btn}
            icon="sync"
            color="white"
            size={40}
            onPress={() => setScreen(3)}
          />
        )}
        <Text style={styles.text}>Movimientos</Text>
      </View>
      <View>
        {press === 4 || press === 5 ? (
          <IconButton
            style={styles.btnPress}
            icon="finance"
            color="white"
            size={40}
            onPress={() => setScreen(4)}
          />
        ) : (
          <IconButton
            style={styles.btn}
            icon="finance"
            color="white"
            size={40}
            onPress={() => setScreen(4)}
          />
        )}
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
  btnPress: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "purple",
    justifyContent: "center",
    width: 70,
    height: 70,
    borderRadius: 60,
  },
});

export default HomeBubbleMenu;
