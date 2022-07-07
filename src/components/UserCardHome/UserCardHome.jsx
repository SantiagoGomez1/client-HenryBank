import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { useSelector } from "react-redux";

import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

const UserCardHome = () => {
  const user = useSelector((state) => state.user);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View>
          <LinearGradient colors={["#126492", "#140152"]} style={styles.image}>
            <Image style={styles.image} source={{ uri: `${user.image}` }} />
          </LinearGradient>
        </View>
        <View style={styles.data}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Bienvenido!
          </Text>
          <Text style={{ color: "gray" }}>{user.fullName}</Text>
        </View>
      </View>
      <View style={{justifyContent:'center'}}><MaterialCommunityIcons style={{paddingLeft:175}} name="ellipsis-vertical" color={"white"} size={20}/></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingLeft: 20,
    flexDirection: "row",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  data: {
    paddingLeft: 10,
  }
});

export default UserCardHome;
