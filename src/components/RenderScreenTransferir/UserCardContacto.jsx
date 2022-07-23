import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Button } from "@rneui/themed";


const UserCardContacto = ({data}) => {
  // console.log('esta es la data contactsSelected', data)
  
  return (
    <View style={styles.container}>
      <Image
        onAccessibilityTap={() => onClick()}
        style={styles.image}
        source={{ uri: `${data.image}` }}
      />
      <View style={styles.containerData}>
        <Text style={styles.text}>{data.name} </Text>
        <Text style={styles.textCBU}>CBU: {data.cbu}</Text>
      </View >
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
    paddingLeft:10,
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
    fontSize:12
  }
});

export default UserCardContacto;
