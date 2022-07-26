import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
import { useSelector } from "react-redux";

const conversion = 128.01;

export default function WalletTotal() {
  const [dropdown, setDropdown] = React.useState(true);
  const money = useSelector((state) => state.userDetail.balance);
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <Text style={{ color: "white" }}>Tu total</Text>
        {dropdown ? (
          <IconButton
            icon="eye-outline"
            color="white"
            size={20}
            onPress={() => setDropdown(!dropdown)}
          />
        ) : (
          <IconButton
            icon="eye-off-outline"
            color="white"
            size={20}
            onPress={() => setDropdown(!dropdown)}
          />
        )}
      </View>
      {dropdown && (
        <Text style={{ color: "white" }}>{"ARG: " + Math.floor(money)}</Text>
      )}
      {/* {dropdown && (
        <Text style={{ color: "white" }}>
          {"DOL: " + Math.floor((money / conversion).toFixed(2))}
        </Text>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
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
