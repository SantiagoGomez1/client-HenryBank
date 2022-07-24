import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { Icon } from "react-native-elements";
import { getUserDetail } from "../../redux/actions";
import { useNavigation } from "@react-navigation/native";
import { useClipboard } from "@react-native-community/hooks";
import UpdateImage from "../UpdateImage/UpdateImage";
const Configs = () => {
  function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const navigation = useNavigation();

  const user = useSelector((state) => state.userDetail);

  const [copy, setCopy] = useClipboard();

  const dispatch = useDispatch();

  const log = useSelector((state) => state.logIn.token);

  const goHome = () => {
    navigation.navigate("Home");
  };
  const goPersonal = () => {
    navigation.navigate("User Detail");
  };
  const goClose = () =>
    Alert.alert("Cerrar sesión", "¿Seguro quieres desloguearte?", [
      {
        text: "Cancelar",
      },
      { text: "Si", onPress: () => navigation.navigate("Log In") },
    ]);
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
      <View style={styles.back}>
        <Icon
          name="arrow-left"
          type="material-community"
          color={"white"}
          size={30}
          onPress={() => goHome()}
        />
      </View>
      <Text style={styles.textPerfil}>Configuración de usuario</Text>
      <View>
        {/* <Image style={styles.imgUser} source={{ uri: user.image }}></Image> */}
       <UpdateImage />
        <Text style={styles.textMain}>
          {capitalizarPrimeraLetra(user.name)}{" "}
          {capitalizarPrimeraLetra(user.lastName)}
        </Text>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.cont} onPress={() => goPersonal()}>
          <Icon
            name="account-outline"
            type="material-community"
            color={"purple"}
            size={30}
          />
          <Text style={styles.text}>Datos personales</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cont} onPress={() => goDescription()}>
          <Icon
            name="help-network-outline"
            type="material-community"
            color={"purple"}
            size={30}
          />
          <Text style={styles.text}>¿Qué es Henry Bank?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cont} onPress={() => goHelp()}>
          <Icon
            name="chat-question-outline"
            type="material-community"
            color={"purple"}
            size={30}
          />
          <Text style={styles.text}>Ayuda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cont}
          onPress={() => setCopy(`${user.alias}`)}
        >
          <Icon
            name="content-copy"
            type="material-community"
            color={"purple"}
            size={30}
          />
          <Text style={styles.text}>{user.alias}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cont}
          onPress={() => setCopy(`${user.cbu}`)}
        >
          <Icon
            name="content-copy"
            type="material-community"
            color={"purple"}
            size={30}
          />
          <Text style={styles.text}>{user.cbu}</Text>
        </TouchableOpacity>
        {user.role === "admin" ? (
          <TouchableOpacity style={styles.cont} onPress={() => goAdmin()}>
            <Icon
              name="account-lock-outline"
              type="material-community"
              color={"purple"}
              size={30}
            />
            <Text style={styles.text}>Modo admin</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.container2}>
        <TouchableOpacity onPress={goClose}>
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
    alignItems: "center",
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
    margin: 5,
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
