import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Image, ActivityIndicator, Text } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import {
  banUser,
  disbanUser,
  adminToUser,
  userToAdmin,
} from "../../redux/actions";

const AdminConfirmation = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const { email, token, type, name } = route.params;

  if (type === "UA") {
    useEffect(() => {
      dispatch(userToAdmin(email, token));
    }, []);
  }
  if (type === "AU") {
    useEffect(() => {
      dispatch(adminToUser(email, token));
    }, []);
  }
  if (type === "BN") {
    useEffect(() => {
      dispatch(banUser(email, token));
    }, []);
  }
  if (type === "DB") {
    useEffect(() => {
      dispatch(disbanUser(email, token));
    }, []);
  }
  const userToAdminState = useSelector((state) => state.userToAdmin);
  const adminToUserState = useSelector((state) => state.adminToUser);
  const disbanUserState = useSelector((state) => state.disbanUser);
  const banUserState = useSelector((state) => state.banUser);

  if (type === "UA" && !userToAdminState[0]) {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <ActivityIndicator size={50} color="#0000ff" />
      </LinearGradient>
    );
  } else if (type === "AU" && !adminToUserState[0]) {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <ActivityIndicator size={50} color="#0000ff" />
      </LinearGradient>
    );
  } else if (type === "BN" && !banUserState[0]) {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <ActivityIndicator size={50} color="#0000ff" />
      </LinearGradient>
    );
  } else if (type === "DB" && !disbanUserState[0]) {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <ActivityIndicator size={50} color="#0000ff" />
      </LinearGradient>
    );
  } else if (
    type === "UA" &&
    userToAdminState === "cuenta convertida en admin con exito."
  ) {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textMain}>¡{name} ahora es admin!</Text>
        <Image
          style={styles.imgS}
          source={require("../../imgs/Check.png")}
        ></Image>
        <Text style={styles.noText}>
          {setTimeout(() => {
            navigation.navigate("Admin Routes");
          }, 1500)}
        </Text>
      </LinearGradient>
    );
  } else if (
    type === "AU" &&
    adminToUserState === "cuenta convertida en usuario correctamente."
  ) {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textMain}>¡{name} ahora es usuario!</Text>
        <Image
          style={styles.imgS}
          source={require("../../imgs/Check.png")}
        ></Image>
        <Text style={styles.noText}>
          {setTimeout(() => {
            navigation.navigate("Admin Routes");
          }, 1500)}
        </Text>
      </LinearGradient>
    );
  } else if (
    type === "DB" &&
    disbanUserState === "cuenta habilitada con exito."
  ) {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textMain}>¡{name} fué desbaneado con éxito!</Text>
        <Image
          style={styles.imgS}
          source={require("../../imgs/Check.png")}
        ></Image>
        <Text style={styles.noText}>
          {setTimeout(() => {
            navigation.navigate("Admin Routes");
          }, 1500)}
        </Text>
      </LinearGradient>
    );
  } else if (
    type === "BN" &&
    banUserState === "cuenta deshabilitada con exito."
  ) {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textMain}>¡{name} fué baneado con éxito!</Text>
        <Image
          style={styles.imgS}
          source={require("../../imgs/Check.png")}
        ></Image>
        <Text style={styles.noText}>
          {setTimeout(() => {
            navigation.navigate("Admin Routes");
          }, 1500)}
        </Text>
      </LinearGradient>
    );
  }
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-around",
    paddingTop: Constants.statusBarHeight,
  },
  imgS: {
    height: 300,
    width: 300,
    alignSelf: "center",
    padding: 5,
  },
  textMain: {
    color: "#fff",
    fontSize: 35,
    textAlign: "center",
    padding: 20,
  },
  textAdmin: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    padding: 20,
  },
  noText: {
    color: "transparent",
  },
});

export default AdminConfirmation;
