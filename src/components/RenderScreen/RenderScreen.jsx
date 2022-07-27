import React from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";
import Constants from "expo-constants";

import CardNews from "../CardNews/CardNews.jsx";

const RenderScreen = () => {
  let ID = 1;
  const news = useSelector((state) => state.news);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Noticias</Text>
      {!news ? (
        <View style={styles.backgroun2}>
          <View></View>
          <ActivityIndicator size={50} color="#0000ff" />
          <View></View>
        </View>
      ) : (
        <FlatList
          data={news}
          renderItem={({ item }) => (
            <CardNews
              id={ID++}
              image={item.urlToImage}
              name={item.source.name}
              title={item.title}
              description={item.description}
              url={item.url}
              date={item.publishedAt}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 450,
    width: 350,
    alignItems: "center",
    paddingTop: 20,
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  backgroun2: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    width: "100%",
    alignSelf: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 100,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
export default RenderScreen;
