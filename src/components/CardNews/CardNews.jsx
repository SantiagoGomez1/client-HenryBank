import React from "react";

import { View, Text, StyleSheet, Image, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CardNews = ({ name, title, description, url, date, image }) => {
  const handleOpenUrl = () => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          onAccessibilityTap={() => onClick()}
          style={styles.image}
          source={{ uri: `${image}` }}
        />
        <TouchableOpacity onPress={() => handleOpenUrl()}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    height: 500,
    width: 325,
    marginVertical: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "transparent",
    borderBottomColor: "white",
    justifyContent: "space-around",
  },

  image: {
    width: 325,
    height: 200,
    borderRadius: 10,
  },
  text: {
    color: "orange",
    textAlign: "center",
    marginVertical: 10,
  },
  textTitle: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    width: 280,
  },
  textDescription: {
    alignSelf: "center",
    color: "white",
    fontSize: 15,
    textAlign: "center",
    width: 300,
    marginBottom: 10,
  },
});

export default CardNews;
