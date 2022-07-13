import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "@rneui/themed";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import { buyCrytos } from "../../redux/actions";

var { height } = Dimensions.get("window");

export default function InvestorBuyGeneral({ route }) {
  const { id, ticket, price } = route.params;
  const [value, setValue] = React.useState("");

  //Trayendo el token
  const dispatch = useDispatch();
  const token = useSelector((state) => state.logIn.token);
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        <View style={{ display: "flex", alignItems: "center", marginTop: 30 }}>
          <Text
            style={{
              color: "white",
              fontSize: 30,
              textTransform: "uppercase",
            }}
          >
            {ticket}
          </Text>
        </View>

        <View style={styles.card}>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 25, marginVertical: 15 }}>
              ¿Cuánto quieres comprar?
            </Text>
          </View>
          <Divider inset={true} insetType="middle" />
          <View style={styles.subCard}>
            <Text style={{ color: "white", fontSize: 16 }}>
              Precio de mercado: USD$ {price}
            </Text>
            <Text style={{ color: "white", fontSize: 16 }}>
              Precio de mercado: AR$ {(price * 127.82).toFixed(2)}
            </Text>
          </View>
          <Text style={{ color: "white", fontSize: 20, marginLeft: 14 }}>
            Plazo: 48hs
          </Text>
        </View>

        <View style={styles.card}>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 16 }}>
              Montos disponibles
            </Text>
          </View>
          <View style={{ alignItems: "center", paddingBottom: 20 }}>
            <TextInput
              style={styles.input}
              placeholder="00,00$"
              placeholderTextColor="white"
              keyboardType="number-pad"
              value={value}
              onChangeText={setValue}
            />
          </View>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 16 }}>
              Cantidad estimada V{" "}
              {value !== ""
                ? (parseInt(value) / (price * 127.82)).toFixed(4)
                : 0}
            </Text>
          </View>
        </View>

        <Button
          title="Continuar"
          onPress={() => {
            dispatch(buyCrytos(id, price, value, token));
          }}
        />
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "space-around",
    height: height,
  },
  card: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 8,
    padding: 10,
    height: 200,
  },
  input: {
    textAlign: "center",
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    width: 300,
    height: 80,
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
});
