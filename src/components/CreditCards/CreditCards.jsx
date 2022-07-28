import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  deleteTarjetas,
  getTarjetas,
} from "../CreditCardAsyncStorage/CreditCardAsyncStorage";
import { useFocusEffect } from "@react-navigation/native";
import { Button } from "@rneui/themed";

export default function CreditCards() {
  const [tarjetas, setTarjetas] = React.useState([]);

  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      getTarjetas().then((res) => {
        console.log(res);
        setTarjetas(res);
      });
    }, [])
  );

  function borrarTarjetas() {
    deleteTarjetas().then((res) => {
      setTarjetas([]);
      console.log(res);
    });
  }

  return (
    <View style={{ display: "flex", justifyContent: "space-around" }}>
      <Text
        style={{
          fontSize: 18,
          color: "white",
          textAlign:'center',
          fontWeight:'bold'
        }}
      >
        Tarjetas asociadas
      </Text>
      <ScrollView style={{ height: 400 }}>
        {tarjetas?.length > 0 &&
          tarjetas.map((item, index) => (
            <View key={index} style={styles.subCard}>
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                }}
              >
                Nombre: {item.name}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                }}
              >
                Numero: {item.number}
              </Text>
            </View>
          ))}
      </ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
          <TouchableOpacity onPress={() => navigation.navigate("NewCreditCard")}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#667eea", "#764ba2"]}
                style={{ paddingVertical: 10,width:300, borderRadius: 10, alignSelf: 'center'}}
              >
                <Text style={{ color: "#ffffff", textAlign: "center" }}>
                  Agregar nueva tarjeta
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => borrarTarjetas()}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#667eea", "#764ba2"]}
                style={{ paddingVertical: 10,width:300, borderRadius: 10, alignSelf: 'center', marginTop:10 }}
              >
                <Text style={{ color: "#ffffff", textAlign: "center" }}>
                  Eliminar tarjetas
                </Text>
              </LinearGradient>
            </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subCard: {
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
});
