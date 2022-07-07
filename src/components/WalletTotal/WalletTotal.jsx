import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";

const conversion = 0.0079;

export default function WalletTotal({ money }) {
  const [dropdown, setDropdown] = React.useState(true);

  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <Text style={{ color: "white" }}>Tu total</Text>
        {dropdown ? (
          <IconButton
            icon="eye-off-outline"
            color="white"
            size={20}
            onPress={() => setDropdown(!dropdown)}
          />
        ) : (
          <IconButton
            icon="eye-outline"
            color="white"
            size={20}
            onPress={() => setDropdown(!dropdown)}
          />
        )}
      </View>
      {dropdown && <Text style={{ color: "white" }}>{"ARG: " + money}</Text>}
      {dropdown && (
        <Text style={{ color: "white" }}>
          {"DOL: " + (money * conversion).toFixed(2)}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "white",
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
