import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getMyUser, putTransfer } from "../../redux/actions/index";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import UserCardTransferencia from "../UserCardTransferencia/UserCardTransferencia";
import UserCardContacto from "../RenderScreenTransferir/UserCardContacto.jsx";

const RenderScreenTransferirMonto = () => {
  const [params, setParams] = useState({ amount: 0 });
  const [errors, setErrors] = useState(true);

  const token = useSelector((state) => state.logIn.token);
  const user = useSelector((state) => state.userTransfer);
  const myUser = useSelector((state) => state.myUser);
  const contactsSelected = useSelector((state) => state.addContacts);

  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getMyUser(token));
    }, [])
  );

  const handleOnChange = (e, type) => {
    setParams({ ...params, [type]: e.nativeEvent.text });
  };

  const validar = () => {
    if (Number(params.amount) === 0) {
      setErrors(false);
      setTimeout(() => {
        setErrors(true);
      }, 1000);
      return;
    }
    if (Number(params.amount) > Number(myUser.balance)) {
      setErrors(false);
      setTimeout(() => {
        setErrors(true);
      }, 1000);
      return;
    }
    Alert.alert(
      "Transferir dinero",
      `¿Seguro quieres transferir $${params.amount}?`,
      [
        {
          text: "Cancelar",
        },
        { text: "Si", onPress: () => handleSubmitTransfer() },
      ]
    );
  };

  const handleSubmitTransfer = () => {
    dispatch(putTransfer(token, params));
    navigation.navigate("SuccessOperacion");
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transferencia</Text>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.subText}>Monto...</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 40 }}>$</Text>
          {!errors ? (
            <TextInput
              style={styles.inputError}
              placeholder="00,00"
              placeholderTextColor="red"
              keyboardType="number-pad"
              onChange={(e) => handleOnChange(e, "amount")}
            />
          ) : (
            <TextInput
              style={styles.input}
              placeholder="00,00"
              placeholderTextColor="white"
              keyboardType="number-pad"
              onChange={(e) => handleOnChange(e, "amount")}
            />
          )}
        </View>
      </View>
      {!contactsSelected.id ? (
        <UserCardTransferencia data={user} />
      ) : (
        <UserCardContacto data={contactsSelected} />
      )}
      {/* <View>
        <Button title="Enviar" onPress={() => validar()} />
      </View> */}
      <TouchableOpacity onPress={() => validar()}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#667eea", "#764ba2"]}
          style={{ paddingVertical: 10, width: 280, borderRadius: 11 }}
        >
          <Text style={{ color: "#ffffff", textAlign: "center" }}>
            Enviar
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent: "space-around",
    height: 450,
    width: 350,
    alignItems: "center",
    paddingTop: 20,
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  subText: {
    paddingTop: 20,
    color: "gray",
    fontSize: 15,
  },
  input: {
    textAlign: "center",
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    width: 150,
    height: 80,
  },
  inputError: {
    textAlign: "center",
    color: "red",
    fontSize: 40,
    fontWeight: "bold",
    width: 150,
    height: 80,
  },
});
export default RenderScreenTransferirMonto;
