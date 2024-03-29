import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
import { useSelector } from "react-redux";

const conversion = (str) => {
  let result = str * 128.01;
  return Math.floor(result);
};

export default function WalletTotal() {
  const [dropdown, setDropdown] = React.useState(true);
  const money = useSelector((state) => state.userDetail.balance);
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <Text style={{ color: "white", textAlign: "center" }}>Tu total</Text>
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
        <View style={{ flexDirection: "row", justifyContent: 'flex-start' }}>
          <Text style={{ color: "white" }}>{"ARG: $" + Math.floor(money)}</Text>
        </View>
      )}
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
