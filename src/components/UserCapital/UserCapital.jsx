import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

const UserCapital = () => {
  const user = useSelector((state) => state.user);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`$${user.capital}`}</Text>
      <Text style={{ color: "gray", textAlign: "center" }}>
        Saldo Disponible
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
});

export default UserCapital;
