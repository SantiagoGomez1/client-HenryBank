import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Image, ActivityIndicator, Text } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { clearAdmin } from "../../redux/actions";
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
  console.log(email);
  console.log(type);
  if (type === "UA") {
    useEffect(() => {
      dispatch(userToAdmin(email, token));
    }, [dispatch]);
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
  console.log(userToAdminState);
  console.log(adminToUserState);
  console.log(disbanUserState);
  console.log(banUserState);
  if (
    !disbanUserState.length &&
    !adminToUserState.length &&
    !banUserState.length &&
    !userToAdminState.length
  ) {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <ActivityIndicator size={50} color="#0000ff" />
      </LinearGradient>
    );
  }
  if (userToAdminState[0]) {
    console.log("user", userToAdminState);
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textMain}>¡{name} ahora es admin!</Text>
        <Image
          style={styles.imgS}
          source={require("../../imgs/Check.png")}
        ></Image>
        <Text style={styles.noText}>
          {setTimeout(() => {
            dispatch(clearAdmin());
            navigation.navigate("AdminHome");
          }, 1500)}
        </Text>
      </LinearGradient>
    );
  } else if (adminToUserState[0]) {
    console.log("admin", adminToUserState);
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textMain}>¡{name} ahora es usuario!</Text>
        <Image
          style={styles.imgS}
          source={require("../../imgs/Check.png")}
        ></Image>
        <Text style={styles.noText}>
          {setTimeout(() => {
            dispatch(clearAdmin());
            navigation.navigate("AdminHome");
          }, 1500)}
        </Text>
      </LinearGradient>
    );
  } else if (disbanUserState[0]) {
    console.log("disban", disbanUserState);
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textMain}>¡{name} fué desbaneado con éxito!</Text>
        <Image
          style={styles.imgS}
          source={require("../../imgs/Check.png")}
        ></Image>
        <Text style={styles.noText}>
          dispatch(clearAdmin())
          {setTimeout(() => {
            navigation.navigate("AdminHome");
          }, 1500)}
        </Text>
      </LinearGradient>
    );
  } else if (banUserState[0]) {
    console.log("ban", banUserState);
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.textMain}>¡{name} fué baneado con éxito!</Text>
        <Image
          style={styles.imgS}
          source={require("../../imgs/Check.png")}
        ></Image>
        <Text style={styles.noText}>
          {setTimeout(() => {
            dispatch(clearAdmin());
            navigation.navigate("AdminHome");
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
