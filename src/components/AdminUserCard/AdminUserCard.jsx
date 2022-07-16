import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Constants from "expo-constants";

const AdminUserCard = () => {
  const user = useSelector((state) => state.userDetail);
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

export default AdminUserCard;
