import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCoinId } from "../../redux/actions";

export default function DetailCoinsInvestorBuy({ route, navigation }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.coinDetail);

  useEffect(() => {
    dispatch(getCoinId(route.params.id));
  }, []);

  React.useEffect(() => {
    function handleBackButton() {
      navigation.navigate("InvestorBuy");
      return true;
    }

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButton
    );

    return () => backHandler.remove();
  }, [navigation]);

  return (
    <View style={styles.container}>
      {data && (
        <LinearGradient
          colors={["#126492", "#140152"]}
          style={styles.background}
        >
          {data.hasOwnProperty("image") ? (
            <Image style={styles.img} source={{ uri: data.image.large }} />
          ) : null}
          <Text style={{ color: "white", fontSize: 35, textAlign: "center" }}>
            {data.name}
          </Text>
          <View style={styles.card}>
            <Text style={{ color: "white", fontSize: 20 }}>
              Ticket: {data.symbol}
            </Text>
            <Text style={{ color: "white", fontSize: 20 }}>
              Precio corriente
            </Text>
            <Text style={{ color: "white", fontSize: 20 }}>
              {data.current_price} $
            </Text>
            <Text style={{ color: "white", fontSize: 18 }}>
              Porcentaje cambio de precio 1 año
            </Text>
            <Text style={{ color: "white", fontSize: 18 }}>
              {data.price_change_percentage_1y} %
            </Text>
            <Text style={{ color: "white", fontSize: 18 }}>
              Porcentaje cambio de precio 30 dias
            </Text>
            <Text style={{ color: "white", fontSize: 18 }}>
              {data.price_change_percentage_30d} %
            </Text>
            <Text style={{ color: "white", fontSize: 18 }}>
              Porcentaje cambio de precio 7 días
            </Text>
            <Text style={{ color: "white", fontSize: 18 }}>
              {data.price_change_percentage_7d} %
            </Text>
            <Text style={{ color: "white", fontSize: 18 }}>
              Porcentaje cambio de precio 24 horas
            </Text>
            <Text style={{ color: "white", fontSize: 18 }}>
              {data.price_change_percentage_24h} %
            </Text>
          </View>

          <View style={styles.btn}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("InvestorBuyGeneral", {
                  id: route.params.id,
                  ticket: data.symbol,
                  price: data.current_price,
                })
              }
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#667eea", "#764ba2"]}
                style={{ paddingVertical: 10, width: 200, borderRadius: 11 }}
              >
                <Text style={{ color: "#ffffff", textAlign: "center" }}>
                  Siguiente
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "space-between",
  },
  img: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 35,
    borderRadius: 100,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 8,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginHorizontal: 15,
  },
  btn: {
    alignSelf: "center",
    margin: 5,
  },
  textSecondary: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    padding: 2,
    margin: 4,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 8,
  },
});
