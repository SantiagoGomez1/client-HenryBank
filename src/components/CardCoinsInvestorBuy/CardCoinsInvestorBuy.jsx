import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function CardCoinsInvestorBuy({ id, image, name, symbol }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("DetailCoinsInvestorBuy", {
          id,
          image,
          name,
          symbol,
        })
      }
    >
      <View style={styles.caract}>
        <Image style={styles.img} source={{ uri: image }} />
        <Text style={{ color: "white" }}>{name}</Text>
        <Text style={{ color: "white" }}>{symbol}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
  img: {
    width: 20,
    height: 20,
  },
  caract: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
