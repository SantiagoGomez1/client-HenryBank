import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";

const DetailUser = () => {
  const user = useSelector((state) => state.user);
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <View>
          <Image
            style={styles.imgUser}
            source={{ uri: `${user.image}` }}
          ></Image>
          <Text style={styles.textMain}>{user.fullName}</Text>
        </View>
        <View>
          <Text>Datos personales</Text>
          <Text>{user.birthday}</Text>
          <Text>Datos bancarios</Text>
          <Text>{user.years}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
  },
  imgUser: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: "#140152",
    borderWidth: 5,
  },
  textMain: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
  },
});

export default DetailUser;
