import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

const AdminUserCard = () => {
  const user = useSelector((state) => state.userDetail);
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate("HomeRoutes");
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View>
          <View style={styles.image}>
            <Image
              onAccessibilityTap={() => onClick()}
              style={styles.image}
              source={{ uri: `${user.image}` }}
            />
          </View>
        </View>
        <View style={styles.data}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Modo Admin</Text>
          <Text style={{ color: "gray" }}>
            {user.name} {user.lastName}
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.btn} onPress={() => onClick()}>
          Volver
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: Constants.statusBarHeight + 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  data: {
    paddingLeft: 10,
  },
  btn: {
    color: "aqua",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
});

export default AdminUserCard;
