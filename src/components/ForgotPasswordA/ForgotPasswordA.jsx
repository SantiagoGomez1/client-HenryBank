import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Button,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Input } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
var { height } = Dimensions.get("window");
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions";
import { useNavigation } from "@react-navigation/native";
import { forgotA } from "../../redux/actions";
import Constants from "expo-constants";

const ForgotPasswordA = () => {
  const navigation = useNavigation();
  const goHome = () => {
    navigation.navigate("Log In");
  };
  const [formData, setFormData] = useState({
    email: "",
    identity: 0,
  });
  const [errorEmail, setErrorEmail] = useState("");
  const [errorIdentity, setErrorIdentity] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const getAllUsers = useSelector((state) => state.users);
  console.log(getAllUsers);

  const handleOnChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const validateData = () => {
    setErrorEmail("");
    setErrorIdentity("");
    let isValid = true;

    if (!validateEmail(formData.email)) {
      setErrorEmail("Debes ingresar un E-mail válido");
      isValid = false;
    }
    if (!getAllUsers?.find((u) => u.email === formData.email)) {
      setErrorEmail("Este E-mail no está asociado a una cuenta");
      isValid = false;
    }
    if (formData.identity.length < 8 || formData.identity.length > 8) {
      setErrorDNI("Tu D.N.I deberia tener 8 carácteres");
      isValid = false;
    }

    return isValid;
  };

  const onSumbit = () => {
    if (!validateData()) {
      return;
    }
    dispatch(forgotA(formData));
    navigation.navigate("ForgotPasswordB");
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.text}>¿Olvidaste tu contraseña?</Text>
        <Input
          containerStyle={styles.input}
          placeholder="soyhenry@gmail.com"
          label="E-mail"
          onChange={(e) => handleOnChange(e, "email")}
          errorMessage={errorEmail}
        />
        <Input
          containerStyle={styles.input}
          placeholder="Solo números"
          label="D.N.I"
          onChange={(e) => handleOnChange(e, "identity")}
          errorMessage={errorIdentity}
        />
        <Button
          title="Enviar"
          color={"purple"}
          onPress={() => onSumbit()}
        ></Button>
        <Text style={styles.text2}>
          Denes ingresar ambos datos correctamente de tu cuenta para poder
          ingresar una nueva contraseña
        </Text>
        <TouchableOpacity onPress={() => goHome()}>
          <Text style={styles.btn}>Volver</Text>
        </TouchableOpacity>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#140152",
  },
  background: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    paddingTop: Constants.statusBarHeight,
    height: height,
  },
  text: {
    color: "#fff",
    fontSize: 25,
  },
  text2: {
    color: "grey",
    fontSize: 10,
    padding: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 25,
    margin: 15,
    paddingLeft: 25,
    paddingTop: 15,
    width: "85%",
  },
  btn: {
    fontSize: 15,
    color: "aqua",
  },
});

const validateEmail = function (email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export default ForgotPasswordA;
