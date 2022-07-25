import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AdminUserCard from "../AdminUserCard/AdminUserCard";
import { Input, Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { searchUser } from "../../redux/actions";

const AdminHome = () => {
  const users = useSelector((state) => state.allUsersSearch);
  const user = useSelector((state) => state.userDetail);
  const filtered = users.filter(
    (u) => u.email !== user.email && u.email !== "enanoloco@henrry.com"
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const token = useSelector((state) => state.logIn.token);
  const [input, setInput] = useState({
    user: "",
  });
  const onClick = (item) => {
    navigation.navigate("AdminUserDetail", { info: item });
  };
  const handleOnChange = (e, type) => {
    setInput({ ...input, [type]: e.nativeEvent.text });
  };

  const onSumbit = () => {
    dispatch(searchUser(token, input));
  };

  if (!filtered[0]) {
    return (
      <LinearGradient
        colors={["#126492", "#140152"]}
        style={styles.background2}
      >
        <Text style={styles.text2}>
          ¡No hay usuarios los cuales administrar!
        </Text>
        <Image
          style={styles.img}
          source={require("../../imgs/error.png")}
        ></Image>
      </LinearGradient>
    );
  }
  return (
    <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
          <AdminUserCard ruta={"Configs"} />
        </View>
        <View style={styles.container2}>
          <Input
            containerStyle={styles.input}
            placeholder="estebanquito.henrybank"
            onChange={(e) => handleOnChange(e, "user")}
          ></Input>
          <View style={styles.btn}>
            <Button
              title="Buscar"
              color="purple"
              onPress={() => onSumbit()}
            ></Button>
          </View>
        </View>
        <View>
          <FlatList
            data={filtered}
            renderItem={({ item }) => (
              <View style={styles.container3}>
                <View style={{ alignSelf: "center" }}>
                  <Image
                    style={styles.image}
                    source={{ uri: `${item.image}` }}
                  />
                </View>
                <View style={{ alignSelf: "center" }}>
                  <Text style={styles.textMain}>
                    {item.name} {item.lastName}
                  </Text>
                  <Text style={styles.text}>{item.cbu}</Text>
                  <Text style={styles.text}>{item.email}</Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Icon
                    onPress={() => onClick(item)}
                    style={styles.got}
                    name="account-cog-outline"
                    type="material-community"
                    color={"purple"}
                    size={30}
                  />
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
  },
  background2: {
    justifyContent: "space-evenly",
    flex: 1,
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
  text2: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
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
  img: {
    height: 300,
    width: 300,
    alignSelf: "center",
    padding: 5,
  },
});

export default AdminHome;
