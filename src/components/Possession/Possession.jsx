import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getBalance, getMovements } from "../../redux/actions";
import { useFocusEffect } from "@react-navigation/native";

export default function Possession() {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const token = useSelector((state) => state.logIn.token);
  const balance = useSelector((state) => state.balance);
  const lockedStakeP = useSelector(
    (state) => state.movements.pendingLockedStake
  );
  const lockedStakeF = useSelector(
    (state) => state.movements.finalizedLockedStake
  );
  // console.log('lockedStake', lockedStakeP.length)

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getBalance(token));
      dispatch(getMovements(token));
    }, [])
  );

  /* console.log("Este es el balance", balance); */
  return (
    <View style={styles.card}>
      <View>
        <View style={{ display: "flex", alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: 30,
            }}
          >
            Tenecias
          </Text>
        </View>
        <View style={styles.caract}>
          <Text style={{ color: "white" }}>Simbolo</Text>
          <Text style={{ color: "white" }}>Cantidad</Text>
          <Text style={{ color: "white" }}>Valorizado</Text>
        </View>
      </View>
      <ScrollView
        style={{
          height: 80,
        }}
      >
        {!balance.length ? (
          <View style={{ justifyContent: "space-evenly", marginTop: 20 }}>
            <Image
              style={styles.imgS}
              source={require("../../imgs/error.png")}
            ></Image>
            <Text style={styles.textoValidation}>
              ¡No tienes tenencias aun!
            </Text>
          </View>
        ) : (
          balance.length > 0 &&
          balance.map(
            (item, index) =>
              item.balance !== "0" && (
                <View key={index}>
                  <TouchableOpacity
                    style={styles.subCard}
                    onPress={() => {
                      navigation.navigate("InvestorDetail", {
                        id: item.name,
                        ticket: item.name,
                        cantidad: item.balance,
                        precio: item.buyPrice,
                      });
                    }}
                  >
                    <View style={styles.caract}>
                      <Text style={{ color: "white" }}>{item.name}</Text>
                      <Text style={{ color: "white" }}>
                        {parseFloat(item.balance).toFixed(4)}
                      </Text>
                      <Text style={{ color: "white" }}>
                        {parseFloat(item.buyPrice).toFixed(2)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )
          )
        )}
      </ScrollView>

      {/* Segunda seccion */}

      <View>
        <View style={{ display: "flex", alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: 30,
            }}
          >
            Plazo Fijo
          </Text>
        </View>
        <View style={styles.caract}>
          <Text style={{ color: "white" }}>Inversion</Text>
          <Text style={{ color: "white" }}>TNA</Text>
          <Text style={{ color: "white" }}>Días</Text>
          <Text style={{ color: "white" }}>Ganacias</Text>
        </View>
      </View>
      <ScrollView
        style={{
          height: 80,
        }}
      >
        {!lockedStakeP ? (
          <View style={{ justifyContent: "space-evenly", marginTop: 20 }}>
            <Image
              style={styles.imgS}
              source={require("../../imgs/error.png")}
            ></Image>
            <Text style={styles.textoValidation}>
              ¡No tienes plazos fijos aun!
            </Text>
          </View>
        ) : lockedStakeP.length === lockedStakeF.length ? (
          <View style={{ marginTop: 20 }}>
            <Image
              style={styles.imgS}
              source={require("../../imgs/error.png")}
            ></Image>
            <Text style={styles.textoValidation}>
              ¡No tienes plazos fijos aun!
            </Text>
          </View>
        ) : (
          lockedStakeP.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                style={styles.subCard}
                onPress={() => {
                  navigation.navigate("Detalle PF", {
                    id: item.name,
                    amount: item.amount,
                  });
                }}
              >
                <View style={styles.caract}>
                  <Text style={{ color: "white" }}>
                    $ {item.amount.substring(1)}
                  </Text>
                  <Text style={{ color: "white" }}>53%</Text>
                  <Text style={{ color: "white" }}>30</Text>
                  <Text style={{ color: "green" }}>
                    $ {(item.amount.substring(1) * 1.05).toFixed(2)}*
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    margin: 10,
    borderRadius: 8,
    padding: 10,
    height: 450,
  },
  subCard: {
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
  caract: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textoValidation: {
    color: "red",
    textAlign: "center",
    fontSize: 20,
  },
  imgS: {
    alignSelf: "center",
    width: 50,
    height: 50,
  },
});
