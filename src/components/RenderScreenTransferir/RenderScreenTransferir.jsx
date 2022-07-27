import React, { useState } from "react";

import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Input, Icon } from "react-native-elements";
import {
  renderScreen,
  userTransfer,
  setTransfer,
  setTransferAlias,
  userTransferAlias,
} from "../../redux/actions/index";

import { useDispatch, useSelector } from "react-redux";
import Switch from "./Switch.jsx";
import ContactsDialog from "./ContactsDialog.jsx";

import UserCardTransferencia from "../UserCardTransferencia/UserCardTransferencia";

const RenderScreenTransferir = ({}) => {
  const user = useSelector((state) => state.userTransfer);
  const users = useSelector((state) => state.allUsers);
  const token = useSelector((state) => state.logIn.token);

  const [params, setParams] = useState({ cbu: 0 });
  const [paramsAlias, setParamsAlias] = useState({ alias: "" });
  const [errors, setErrors] = useState("");
  const [render, setRender] = useState("");
  const [next, setNext] = useState(false);

  const dispatch = useDispatch();

  const setScreen = (screen) => {
    dispatch(renderScreen(screen));
  };

  const handleOnChange = (e, type) => {
    setParams({ ...params, [type]: e.nativeEvent.text });
  };

  const searchTransfer = () => {
    if (!params.cbu.length) {
      setErrors("Debes rellenar este campo.");
    }
    if (params.length > 22) {
      setErrors("Estas excediendo los caracteres.");
    }
    let userExist = users?.find((user) => user.cbu === params.cbu);
    if (!userExist) {
      setErrors("El identificador ingresado no existe");
    } else {
      dispatch(setTransfer(token, params));
      dispatch(userTransfer(userExist));
      setNext(true);
      setErrors("");
    }
  };

  const handleOnChangeAlias = (e, type) => {
    setParamsAlias({ ...paramsAlias, [type]: e.nativeEvent.text });
  };

  const searchTransferAlias = () => {
    if (!paramsAlias.alias.length) {
      setErrors("Debes rellenar este campo.");
    }
    let userExist = users?.find((user) => user.alias === paramsAlias.alias);
    if (!userExist) {
      setErrors("El identificador ingresado no existe");
    } else {
      dispatch(setTransferAlias(token, paramsAlias));
      dispatch(userTransferAlias(userExist));
      setNext(true);
      setErrors("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transferencia</Text>

      <Switch setRender={setRender} />

      <ContactsDialog />

      {render === "Alias" ? (
        <Input
          placeholder="Alias"
          placeholderTextColor={"gray"}
          errorMessage={errors}
          onChange={(e) => handleOnChangeAlias(e, "alias")}
          style={styles.input}
          rightIcon={
            <Icon
              name="search"
              color={"white"}
              size={30}
              onPress={() => searchTransferAlias()}
            />
          }
        />
      ) : (
        <Input
          placeholder="Número de CBU"
          placeholderTextColor={"gray"}
          keyboardType="number-pad"
          errorMessage={errors}
          onChange={(e) => handleOnChange(e, "cbu")}
          style={styles.input}
          rightIcon={
            <Icon
              name="search"
              color={"white"}
              size={30}
              onPress={() => searchTransfer()}
            />
          }
        />
      )}
      {!next ? null : (
        <View style={{paddingBottom:20}}>
          <UserCardTransferencia data={user} />
        </View>
      )}
      <View>
        {!next ? (
          <TouchableOpacity>
            <LinearGradient
              start={{ x: 1, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#f5f7fa", "#c3cfe2"]}
              style={{ paddingVertical: 10, width: 300, borderRadius: 11 }}
            >
              <Text style={{ color: "#ffffff", textAlign: "center" }}>
                Siguiente
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setScreen(7)}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#667eea", "#764ba2"]}
              style={{ paddingVertical: 10, width: 300, borderRadius: 11 }}
            >
              <Text style={{ color: "#ffffff", textAlign: "center" }}>
                Siguiente
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    height: 450,
    width: 350,
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  input: {
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    color: "white",
    borderRadius: 20,
    paddingLeft: 10,
    margin: 5,
    width: 170,
    height: 55,
    textDecorationColor: "transparent",
  },
  containerInput: {
    alignSelf: "flex-start",
    paddingLeft: 12,
  },
  inputCode: {
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    color: "white",
    borderRadius: 20,
    paddingLeft: 10,
    margin: 5,
    width: 20,
    height: 55,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 100,
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default RenderScreenTransferir;
