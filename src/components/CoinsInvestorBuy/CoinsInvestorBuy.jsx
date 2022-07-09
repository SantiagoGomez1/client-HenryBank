import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import CardCoinsInvestorBuy from "../CardCoinsInvestorBuy/CardCoinsInvestorBuy";

export default function CoinsInvestorBuy({ data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CardCoinsInvestorBuy
          id={item.id}
          image={item.image.small}
          name={item.name}
          symbol={item.symbol}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});
