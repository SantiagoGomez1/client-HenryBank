import React from "react";
import { View, Text, StyleSheet, Button, FlatList, Image } from "react-native";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import AdminUserCard from "../AdminUserCard/AdminUserCard";
import { Input } from "react-native-elements";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const AdminHome = () => {
  const users = useSelector((state) => state.allUsers);
  console.log(users);
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate("AdminUserDetail");
  };
  return (
    <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
      <View>
        <View style={styles.container}>
          <AdminUserCard />
        </View>
        <View style={styles.container2}>
          <Input
            containerStyle={styles.input}
            placeholder="estebanquito.henrybank"
          ></Input>
          <View style={styles.btn}>
            <Button title="Buscar" color="transparent"></Button>
          </View>
        </View>
      </View>
      <View>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <View style={styles.container3}>
              <View style={{ alignSelf: "center" }}>
                <Image style={styles.image} source={{ uri: `${item.image}` }} />
              </View>
              <View style={{ alignSelf: "center" }}>
                <Text style={styles.textMain}>
                  {item.name} {item.lastName}
                </Text>
                <Text style={styles.text}>{item.cbu}</Text>
                <Text style={styles.text}>{item.email}</Text>
              </View>
              <View style={{ justifyContent: "center" }}>
                <Text onPress={() => onClick()} style={styles.got}>
                  :
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    marginBottom: 20,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
  },
  container3: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    margin: 10,
    borderRadius: 50,
  },
  input: {
    width: "70%",
  },
  btn: {
    height: "auto",
  },
  image: {
    width: 70,
    height: 70,
  },
  textMain: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  text: {
    color: "#fff",
    fontSize: 13,
  },
  got: {
    color: "#fff",
    fontSize: 30,
  },
});

export default AdminHome;
