import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { IconButton } from "react-native-paper";

import Constants from "expo-constants";

const UserCardHome = () => {
  const user = useSelector((state) => state.userDetail);
  const navigation = useNavigation();
  const goDrawer = () => {
    navigation.navigate("Configs");
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View>
          <LinearGradient colors={["#126492", "#140152"]} style={styles.image}>
            <Image
              onAccessibilityTap={() => onClick()}
              style={styles.image}
              source={{ uri: `${user.image}` }}
            />
          </LinearGradient>
        </View>
        <View style={styles.data}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Bienvenido/a
          </Text>
          <Text style={{ color: "gray" }}>
            {user.name} {user.lastName}
          </Text>
        </View>
      </View>
      <View style={{ justifyContent: "center" }}>
        <IconButton
          icon="account"
          color="white"
          size={20}
          onPress={() => goDrawer()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: Constants.statusBarHeight + 5,
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
