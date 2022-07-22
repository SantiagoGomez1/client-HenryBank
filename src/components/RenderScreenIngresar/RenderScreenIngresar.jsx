import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StripeApp from "../StripeApp/StripeApp.jsx";
import SwitchSelector from "react-native-switch-selector";
import GetCards from "./GetCards.jsx";

const RenderScreenIngresar = () => {
  const [render, setRender] = React.useState("Nueva Tarjeta");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ingresar Dinero</Text>
      <SwitchSelector
        style={{ marginHorizontal: 20 }}
        initial={0}
        onPress={(value) => setRender(value)}
        textColor={"purple"} //'#7a44cf'
        selectedColor={"white"}
        buttonColor={"purple"}
        borderColor={"purple"}
        hasPadding
        options={[
          { label: "Nueva Tarjeta", value: "Nueva Tarjeta" },
          { label: "Tarjetas Asociadas", value: "Tarjetas Sincronizadas" },
        ]}
        testID="gender-switch-selector"
        accessibilityLabel="gender-switch-selector"
      />
      {render === "Nueva Tarjeta" ? <StripeApp /> : <GetCards />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "white",
    height: 450,
    width: 350,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    margin: 20,
  },
});

export default RenderScreenIngresar;
