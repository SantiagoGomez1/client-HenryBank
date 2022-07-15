import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail, renderScreen } from "../../redux/actions";
import Constants from "expo-constants";

export default function SuccessSell({ route, navigation }) {
  const { success } = route.params;
  const dispatch = useDispatch();
  const log = useSelector((state) => state.logIn.token);

  const set = () => {
    setTimeout(() => {
      navigation.navigate("HomeRoutes");
      dispatch(renderScreen(0));
    }, 1500);
  };
  useEffect(() => {
    set();
    dispatch(getUserDetail(log));
  }, []);

  if (success === 1) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#126492", "#140152"]}
          style={styles.background}
        >
          <Text style={styles.textMain}>Venta exitosa</Text>
          <Image
            style={styles.imgSuccess}
            source={require("../../imgs/Check.png")}
          ></Image>
          <Text style={styles.textSecondaty}>¡Gracias!</Text>
        </LinearGradient>
      </View>
    );
  }
  if (success === 2) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#126492", "#140152"]}
          style={styles.background}
        >
          <Text style={styles.textMain}>Venta rechazada</Text>
          <Image
            style={styles.imgSuccess}
            source={require("../../imgs/error.png")}
          ></Image>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    textAlign: "center",
    flex: 1,
    width: "100%",
  },
  background: {
    flex: 1,
    justifyContent: "space-around",
  },
  textMain: {
    color: "#fff",
    fontSize: 45,
    textAlign: "center",
    fontWeight: "bold",
  },
  textSecondaty: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  imgSuccess: {
    height: 300,
    width: 300,
    alignSelf: "center",
    padding: 5,
  },
});
