import React from "react";

import { useSelector } from "react-redux";

import UserCardMovimientos from "../UserCardMovimientos/UserCardMovimientos.jsx";

import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  Image,
} from "react-native";

const RenderScreenMovimientos = () => {
  const user = useSelector((state) => state.user);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Movimientos</Text>
      <View>
        <TextInput style={styles.input} placeholder="Search..." placeholderTextColor={'gray'} />
      </View>
      <FlatList
        data={user.movimientos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserCardMovimientos
            id={item.id}
            image={item.icon}
            name={item.name}
            amount={item.amount}
            date={item.date}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "white",
    height: 450,
    width: 350,
    borderRadius: 25,
    alignItems: "center",
    paddingTop: 20,
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    color: "white",
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    paddingLeft:10,
    width: 300,
    height: 40,
    margin: 10,
    borderRadius: 20,
  },
});

export default RenderScreenMovimientos;
