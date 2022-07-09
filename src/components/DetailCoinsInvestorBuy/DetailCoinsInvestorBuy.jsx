import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCoinId } from "../../redux/actions";

var { height } = Dimensions.get("window");

export default function DetailCoinsInvestorBuy({ route }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.coinDetail);

  useEffect(() => {
    dispatch(getCoinId(route.params.id));
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
        {data && (
          <View>
            <View style={{ display: "flex", alignItems: "center" }}>
              <Image style={styles.img} source={{ uri: data.image.large }} />
            </View>
            <View style={styles.card}>
              <Text style={{ color: "white", fontSize: 35 }}>{data.name}</Text>
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
                Porcentaje de cambio de precio 1 año
              </Text>
              <Text style={{ color: "white", fontSize: 18 }}>
                {data.price_change_percentage_1y} %
              </Text>
              <Text style={{ color: "white", fontSize: 18 }}>
                Porcentaje de cambio de precio 30 dias
              </Text>
              <Text style={{ color: "white", fontSize: 18 }}>
                {data.price_change_percentage_30d} %
              </Text>
              <Text style={{ color: "white", fontSize: 18 }}>
                Porcentaje de cambio de precio 7 días
              </Text>
              <Text style={{ color: "white", fontSize: 18 }}>
                {data.price_change_percentage_7d} %
              </Text>
              <Text style={{ color: "white", fontSize: 18 }}>
                Porcentaje de cambio de precio 24 años
              </Text>
              <Text style={{ color: "white", fontSize: 18 }}>
                {data.price_change_percentage_24h} %
              </Text>
            </View>
          </View>
        )}
      </LinearGradient>
    </View>
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
  img: {
    width: 200,
    height: 200,
    margin: 40,
  },
  card: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    margin: 10,
    borderRadius: 8,
    padding: 10,
    height: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
