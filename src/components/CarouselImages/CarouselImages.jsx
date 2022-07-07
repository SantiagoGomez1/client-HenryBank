import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";

const SLIDER_WIDTH = Dimensions.get("window").width;

const data = [
  {
    title: "Alan Brito",
    number: "5123 4528 4826",
    expira: "5/6",
  },
  {
    title: "Elban Quito",
    number: "5123 1236 1405",
    expira: "8/3",
  },
  {
    title: "Lorem Ipsum",
    number: "2530 1615 1405",
    expira: "9/27",
  },
];

export default function CarouselImages({
  width,
  height,
  activeSlide,
  setActiveSlide,
}) {
  //Images son url's
  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.container} key={index}>
        <Text style={{ color: "white" }}>Numero Tarjeta</Text>
        <Text style={{ color: "white" }}>{item.number}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 10,
          }}
        >
          <View>
            <Text style={{ color: "white" }}>Nombre Tarjeta</Text>
            <Text style={{ color: "white" }}>{item.title}</Text>
          </View>
          <View>
            <Text style={{ color: "white" }}>Expira</Text>
            <Text style={{ color: "white" }}>{item.expira}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.containerCarousel}>
      <Carousel
        layout="tinder"
        data={data}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemHeight={250}
        itemWidth={SLIDER_WIDTH}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <MyPagination data={data} activeSlide={activeSlide} />
    </View>
  );
}

function MyPagination({ data, activeSlide }) {
  return (
    <Pagination
      dotsLength={data.length}
      activeDotIndex={activeSlide}
      containerStyle={styles.containerPagination}
      dotStyle={styles.dotActive}
      inactiveDotStyle={styles.dotInactive}
      inactiveDotOpacity={0.6}
      inactiveDotScale={0.6}
    />
  );
}

const styles = StyleSheet.create({
  containerCarousel: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "white",
    margin: 10,
    borderRadius: 8,
    height: 250,
    display: "flex",
    alignItems: "center",
    paddingTop: 25,
  },
  container: {
    margin: 10,
    backgroundColor: "#BD00FF",
    borderRadius: 8,
    padding: 10,
    paddingTop: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  containerPagination: {
    backgroundColor: "transparent",
    zIndex: 1,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  dotActive: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 2,
    backgroundColor: "#126492",
  },
  dotInactive: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginHorizontal: 2,
    backgroundColor: "white",
  },
});
