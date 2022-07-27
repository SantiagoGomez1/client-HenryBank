import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  getCryptosHistorial,
  getLockedStakeHistorial,
  getTransactionsHistorial,
} from "../../redux/actions";
import Constants from "expo-constants";

const AdminMovements = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const { email, type, name } = route.params;
  const token = useSelector((state) => state.logIn.token);
  const historial = useSelector((state) => state.historial);
  console.log(historial);
  const goBack = () => {
    navigation.navigate("AdminHome");
  };
  if (type === "Cryptos") {
    console.log(1);
    useEffect(() => {
      dispatch(getCryptosHistorial(email, token));
    }, []);
  }
  if (type === "Plazos fijos") {
    console.log(2);
    useEffect(() => {
      dispatch(getLockedStakeHistorial(email, token));
    }, []);
  }
  if (type === "Transacciones") {
    console.log(3);
    useEffect(() => {
      dispatch(getTransactionsHistorial(email, token));
    }, []);
  }
  if (!historial[0]) {
    return (
      <LinearGradient
        colors={["#126492", "#140152"]}
        style={styles.background2}
      >
        <Text style={styles.titleMain}>
          ¡{name} no tiene historial de {type} aun!
        </Text>
        <Image
          style={styles.img}
          source={require("../../imgs/error.png")}
        ></Image>
        <View style={{ alignSelf: "center", marginVertical: 15 }}>
          <Button
            title="Volver"
            color={"purple"}
            onPress={() => goBack()}
          ></Button>
        </View>
      </LinearGradient>
    );
  }
  if (type === "Cryptos") {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <View>
          <Text style={styles.titleMain}>
            Historial de {type} de {name}
          </Text>
        </View>
        <View>
          <FlatList
            data={historial}
            renderItem={({ item }) => (
              <View style={styles.containerInfo}>
                <Text style={styles.text}>
                  Tipo de transacción: {item.transactionType}
                </Text>
                <Text style={styles.text}>Nombre: {item.nameCrypto}</Text>
                <Text style={styles.text}>Monto: ${item.amount}</Text>
                <Text style={styles.text}>Precio: ${item.price}</Text>
                <Text style={styles.text}>Fecha: {new Date(item.date).toLocaleDateString('sp-AR')+' '+new Date(item.date).toLocaleTimeString()}</Text>
              </View>
            )}
          ></FlatList>
        </View>
        <View style={{ alignSelf: "center", marginVertical: 15 }}>
          <Button
            title="Volver"
            color={"purple"}
            onPress={() => goBack()}
          ></Button>
        </View>
      </LinearGradient>
    );
  }
  if (type === "Plazos fijos") {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <View>
          <Text style={styles.titleMain}>
            Historial de {type} de {name}
          </Text>
        </View>
        <View>
          <FlatList
            data={historial}
            renderItem={({ item }) => (
              <View style={styles.containerInfo}>
                <Text style={styles.text}>Desposito: ${item.deposit}</Text>
                <Text style={styles.text}>Parking: {item.parking}</Text>
                <Text style={styles.text}>TNA: ${item.roi}</Text>
                <Text style={styles.text}>
                  Fecha de inicio: {new Date(item.start_date).toLocaleDateString('sp-AR')+' '+new Date(item.start_date).toLocaleTimeString()}
                </Text>
                <Text style={styles.text}>
                  Fecha de finalización: {item.end_date}
                </Text>
              </View>
            )}
          ></FlatList>
        </View>
        <View style={{ alignSelf: "center", marginVertical: 15 }}>
          <Button
            title="Volver"
            color={"purple"}
            onPress={() => goBack()}
          ></Button>
        </View>
      </LinearGradient>
    );
  }
  if (type === "Transacciones") {
    return (
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <View>
          <Text style={styles.titleMain}>
            Historial de {type} de {name}
          </Text>
        </View>
        <View>
          <FlatList
            data={historial}
            renderItem={({ item }) => (
              <View style={styles.containerInfo}>
                <Text style={styles.text}>Monto: ${item.amount}</Text>
                <Text style={styles.text}>
                  Balance del receptor: ${item.amountDestiny}
                </Text>
                <Text style={styles.text}>
                  Balance del emisor: ${item.amountOrigin}
                </Text>
                <Text style={styles.text}>Fecha: {new Date(item.date).toLocaleDateString('sp-AR')+' '+new Date(item.date).toLocaleTimeString()}</Text>
              </View>
            )}
          ></FlatList>
        </View>
        <View style={{ alignSelf: "center", marginVertical: 15 }}>
          <Button
            title="Volver"
            color={"purple"}
            onPress={() => goBack()}
          ></Button>
        </View>
      </LinearGradient>
    );
  }
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: Constants.statusBarHeight,
  },
  background2: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  containerInfo: {
    borderColor: "#126492",
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    margin: 15,
    width: 300,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "#140152",
    alignSelf: "center",
  },
  titleMain: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    margin: 20,
  },
  img: {
    width: 250,
    height: 250,
    alignSelf: "center",
    margin: 10,
  },
  text: {
    color: "#fff",
    fontSize: 15,
  },
});

export default AdminMovements;
