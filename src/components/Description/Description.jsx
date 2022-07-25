import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  BackHandler,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

const Description = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate("Configs");
  };

  React.useEffect(() => {
    function handleBackButton() {
      navigation.navigate("Configs");
      return true;
    }

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButton
    );

    return () => backHandler.remove();
  }, [navigation]);
  return (
    <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>
      <Text style={styles.title}>¿Qué es Henry Bank?</Text>
      <View style={styles.containerText}>
        <Text style={styles.description}>
          Henry Bank es una billetera virtual la cual hace tu vida mas fácil, ya
          que cumple con muchas funcionalidades que facilitan tu día a día como
          comprar criptomonedas o divisas, pedir tu plazo fijo, mirar tus
          inversiones en tiempo real, hacer transferencias y cargar dinero.
          ¡Todo esto al alcance de tu mano! ¿Qué estas esperando? Ve...
        </Text>
      </View>
      <TouchableOpacity>
        <Text onPress={() => goBack()} style={styles.back}>
          Volver
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-around",
    paddingTop: Constants.statusBarHeight,
  },
  containerText: {
    width: 300,
    alignSelf: "center",
    padding: 5,
    borderColor: "#126492",
    backgroundColor: "#140152",
    borderWidth: 1,
    borderRadius: 8,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  description: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    padding: 10,
  },
  back: {
    color: "aqua",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Description;
