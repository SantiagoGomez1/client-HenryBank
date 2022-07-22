import { StyleSheet, Text, View, Image, Button } from "react-native";
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

          <View style={styles.btn}>
            <Button
              title="Comprar"
              color={"purple"}
              onPress={() =>
                navigation.navigate("InvestorBuyGeneral", {
                  id: route.params.id,
                  ticket: data.symbol,
                  price: data.current_price,
                })
              }
            />
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
    padding: 20,
  },
  img: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  card: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 8,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    alignSelf: "center",
  },
});
