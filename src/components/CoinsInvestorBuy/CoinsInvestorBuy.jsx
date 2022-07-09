import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardCoinsInvestorBuy from "../CardCoinsInvestorBuy/CardCoinsInvestorBuy";

export default function CoinsInvestorBuy({ data }) {
  return (
    <ScrollView>
      {data.map((item, index) => (
        <View key={index}>
          <CardCoinsInvestorBuy
            id={item.id}
            image={item.image.thumb}
            name={item.name}
            symbol={item.symbol}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
