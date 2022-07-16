import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native";
import { getUserDetail } from "../../redux/actions";
import { useNavigation } from "@react-navigation/native";

const Configs = () => {
  const navigation = useNavigation();

  const user = useSelector((state) => state.userDetail);

  const dispatch = useDispatch();

  const log = useSelector((state) => state.logIn.token);

  const goHome = () => {
    navigation.navigate("Home");
  };
  const goPersonal = () => {
    navigation.navigate("User Detail");
  };
  const goClose = () => {
    navigation.navigate("Log In");
  };
  const goDescription = () => {
    navigation.navigate("Description");
  };
  const goHelp = () => {
    navigation.navigate("Help");
  };
  const goAdmin = () => {
    navigation.navigate("Admin Routes");
  };

  useEffect(() => {
    dispatch(getUserDetail(log));
  }, []);

  return (
    <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
      <TouchableOpacity style={styles.back} onPress={() => goHome()}>
        <Text style={styles.btn}>{"<"}</Text>
      </TouchableOpacity>
      <Text style={styles.textPerfil}>Configuración de usuario</Text>
      <View>
        <Image style={styles.imgUser} source={{ uri: user.image }}></Image>
        <Text style={styles.textMain}>
          {user.name} {user.lastName}
        </Text>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.cont} onPress={() => goPersonal()}>
          <Text style={styles.text}>- Datos personales</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cont} onPress={() => goDescription()}>
          <Text style={styles.text}>- ¿Qué es Henry Bank?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cont} onPress={() => goHelp()}>
          <Text style={styles.text}>- Ayuda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cont} onPress={() => goAdmin()}>
          <Text style={styles.text}>- Modo admin</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity onPress={() => goClose()}>
          <Text style={styles.closeSesion}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flexDirection: "column",
  },
  cont: {
    flexDirection: "row",
  },
  background: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    paddingTop: Constants.statusBarHeight,
  },
  imgUser: {
    height: 175,
    width: 175,
    borderRadius: 100,
    alignSelf: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    margin: 10,
  },
  textMain: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  textMain2: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  textPerfil: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  btn: {
    fontSize: 40,
    color: "aqua",
  },
  back: {
    position: "absolute",
    left: 0,
    margin: 10,
  },
  closeSesion: {
    color: "aqua",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  btnPress: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "aqua",
    justifyContent: "center",
    width: 70,
    height: 70,
    borderRadius: 60,
  },
});

export default Configs;
