import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

const UserCapital = () => {
  const user = useSelector((state) => state.user);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`$${user.capital}`}</Text>
      <Text style={{color:'gray'}}>Saldo Disponible</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    paddingVertical: 10
  },
  text:{
    color:'white',
    fontWeight:'bold',
    fontSize:30
  }
})

export default UserCapital;
