import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";

import { IconButton } from "react-native-paper";

import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native";

import { useSelector } from "react-redux";

import { TouchableOpacity } from "react-native-gesture-handler";

const UserCardHome = () => {
  const user = useSelector((state) => state.user);
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate("User Detail");
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View>
          <LinearGradient colors={["#126492", "#140152"]} style={styles.image}>
            <TouchableOpacity onPress={() => onClick()}>
              <Image
                onAccessibilityTap={() => onClick()}
                style={styles.image}
                source={{ uri: `${user.image}` }}
              />
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={styles.data}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Bienvenido!
          </Text>
          <Text style={{ color: "gray" }}>{user.fullName}</Text>
        </View>
      </View>
      <View style={{ justifyContent: "center" }}>
        <IconButton
          icon="menu"
          color="white"
          size={20}
          onPress={() => console.log("uy")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  data: {
    paddingLeft: 10,
  },
});

export default UserCardHome;
