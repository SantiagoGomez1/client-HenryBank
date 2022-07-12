import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

import { useSelector } from "react-redux";

const UserCardTransferencia = () => {
  const user = useSelector((state) => state.user);

  return (
    <View style={styles.container}>
      <Image
        onAccessibilityTap={() => onClick()}
        style={styles.image}
        source={{ uri: `${user.image}` }}
      />
      <View style={styles.containerData}>
        <Text style={styles.text}>{user.fullName}</Text>
        <Text style={styles.textCBU}>CBU: {user.cbu}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    paddingLeft:10,
    borderWidth:1,
    borderColor:'white',
    borderRadius:40,
    height:90,
    width:300
  },
  containerData:{
    paddingLeft:15
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize:19
  },
  textCBU:{
    color:'gray',
    fontSize:13
  }
});

export default UserCardTransferencia;
