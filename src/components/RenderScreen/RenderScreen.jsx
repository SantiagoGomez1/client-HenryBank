import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";

import CardNews from "../CardNews/CardNews.jsx";
let ID = 1;

const RenderScreen = () => {
  const news = useSelector((state) => state.news);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Noticias</Text>
      {!news[0] ? (
        <View style={{}}>
          <ActivityIndicator size="large" color="#0000ff" />
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
              content={item.content}
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
    borderColor: "white",
    height: 450,
    width: 350,
    borderRadius: 8,
    alignItems: "center",
    paddingTop: 20,
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
