import React, { useEffect } from "react";

import { StyleSheet, Text, TextInput, View, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-elements";

import UserCardHome from "../UserCardHome/UserCardHome";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import { getCoins, searchCoins } from "../../redux/actions";
import CoinsInvestorBuy from "../CoinsInvestorBuy/CoinsInvestorBuy";

var { height } = Dimensions.get("window");

export default function InvestorBuy() {
  const [text, setText] = React.useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.coins);
  const logIn = useSelector((state) => state.logIn.token);

  useEffect(() => {
    dispatch(getCoins(logIn));
  }, []);

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
            onPress={() => {
              if (text === "") {
                dispatch(getCoins());
              } else {
                dispatch(searchCoins(text));
              }
            }}
          />
        </View>
        <View style={styles.card}>
          <CoinsInvestorBuy data={data} />
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
