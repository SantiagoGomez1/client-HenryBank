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

const RenderScreen = () => {
  const news = useSelector((state) => state.news);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Noticias</Text>
      {!news ? (
        <ActivityIndicator size="large" color="#0000ff"/>
      ) : (
        <FlatList
          data={news}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardNews
              id={item.id}
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
