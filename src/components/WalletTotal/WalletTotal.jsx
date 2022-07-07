import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";

const conversion = 0.0079;

export default function WalletTotal({ dinero }) {
  const [desplegable, setDesplegable] = React.useState(true);

  return (
    <View style={styles.tarjeta}>
      <View style={styles.container}>
        <Text>Tu total</Text>
        {desplegable ? (
          <IconButton
            icon="eye-off-outline"
            iconColor="red"
            size={20}
            onPress={() => setDesplegable(!desplegable)}
          />
        ) : (
          <IconButton
            icon="eye-outline"
            iconColor="red"
            size={20}
            onPress={() => setDesplegable(!desplegable)}
          />
        )}
      </View>
      {desplegable && <Text>{"ARG: " + dinero}</Text>}
      {desplegable && <Text>{"DOL: " + (dinero * conversion).toFixed(2)}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
