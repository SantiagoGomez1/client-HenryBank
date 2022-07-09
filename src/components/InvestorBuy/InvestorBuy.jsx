import { StyleSheet, Text, TextInput, View, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import UserCardHome from "../UserCardHome/UserCardHome";
import { Button } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CardCoinsInvestorBuy from "../CardCoinsInvestorBuy/CardCoinsInvestorBuy";

var { height } = Dimensions.get("window");

const coins = [
  {
    id: "huobi-btc",
    symbol: "hbtc",
    name: "Huobi BTC",
    image: {
      thumb:
        "https://assets.coingecko.com/coins/images/12407/thumb/Unknown-5.png?1599624896",
      small:
        "https://assets.coingecko.com/coins/images/12407/small/Unknown-5.png?1599624896",
      large:
        "https://assets.coingecko.com/coins/images/12407/large/Unknown-5.png?1599624896",
    },
    current_price: 21916,
    price_change_percentage_24h: 4.77115,
    price_change_percentage_7d: 11.18081,
    price_change_percentage_30d: -29.93179,
    price_change_percentage_1y: -34.75568,
    last_updated: "2022-07-08T15:34:10.002Z",
  },
  {
    id: "huobi-btc2",
    symbol: "hbtc",
    name: "Huobi BTC",
    image: {
      thumb:
        "https://assets.coingecko.com/coins/images/12407/thumb/Unknown-5.png?1599624896",
      small:
        "https://assets.coingecko.com/coins/images/12407/small/Unknown-5.png?1599624896",
      large:
        "https://assets.coingecko.com/coins/images/12407/large/Unknown-5.png?1599624896",
    },
    current_price: 21916,
    price_change_percentage_24h: 4.77115,
    price_change_percentage_7d: 11.18081,
    price_change_percentage_30d: -29.93179,
    price_change_percentage_1y: -34.75568,
    last_updated: "2022-07-08T15:34:10.002Z",
  },
];

export default function InvestorBuy() {
  const [text, setText] = React.useState("");
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <UserCardHome />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Buscar..."
            placeholderTextColor="white"
          />
          <Button
            title="Buscar"
            containerStyle={{
              marginTop: 13,
            }}
            type="clear"
            titleStyle={{ color: "white" }}
            onPress={() => console.log(text)}
          />
        </View>
        <View style={styles.card}>
          <FlatList
            data={coins}
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
        </View>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  background: {
    flex: 1,
    justifyContent: "space-around",
    height: height,
  },
  input: {
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    margin: 10,
    borderRadius: 8,
    padding: 10,
    color: "white",
    width: 300,
  },
  card: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 8,
    padding: 10,
    height: 500,
  },
});
