import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  Button,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Input } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
var { height } = Dimensions.get("window");
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { forgotPassword } from "../../redux/actions";
import Constants from "expo-constants";

const ForgotPasswordB = () => {
  const navigation = useNavigation();
  const forgotData = useSelector((state) => state.forgotA);
  console.log(forgotData);
  const goBack = () => {
    navigation.navigate("ForgotPasswordA");
  };
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const handleOnChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const validateData = () => {
    setErrorPassword("");
    setErrorConfirmPassword("");
    let isValid = true;

    if (formData.password.length < 8) {
      setErrorPassword("Tu contraseña deberia tener 8 carácteres o más");
      setErrorConfirmPassword("Tu contraseña deberia tener 8 carácteres o más");
      isValid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      setErrorPassword("Tu contraseña debe ser igual en ambos campos");
      setErrorConfirmPassword("Tu contraseña debe ser igual en ambos campos");
      isValid = false;
    }
    if (!formData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
      setErrorPassword(
        "Deberia tener al menos una minuscula, una mayuscula y un número"
      );
      setErrorConfirmPassword(
        "Deberia tener al menos una minuscula, una mayuscula y un número"
      );
      isValid = false;
    }

    return isValid;
  };

  const onSumbit = () => {
    if (!validateData()) {
      return;
    }
    dispatch(
      forgotPassword(forgotData.email, forgotData.identity, formData.password)
    );
    navigation.navigate("ForgotPasswordConfirm");
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <Text style={styles.text}>Confirma tu nueva contraseña</Text>
        <Input
          containerStyle={styles.input}
          placeholder="8 digitos"
          label="Contraseña"
          onChange={(e) => handleOnChange(e, "password")}
          errorMessage={errorPassword}
        />
        <Input
          containerStyle={styles.input}
          placeholder="8 digitos"
          label="Confirmar contraseña"
          onChange={(e) => handleOnChange(e, "confirmPassword")}
          errorMessage={errorConfirmPassword}
        />
        <TouchableOpacity onPress={() => onSumbit()}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#667eea", "#764ba2"]}
            style={{
              paddingVertical: 10,
              width: 100,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "#ffffff", textAlign: "center" }}>
              Enviar
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.text2}>
          Debes ingresar ambas contraseñas iguales y esta pasara a ser su nueva
          contraseña
        </Text>
        <TouchableOpacity onPress={() => goBack()}>
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

export default ForgotPasswordB;
