import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";


const CardUserMovimientos = ({ id, image, name, amount, date }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.borde}>
          {/* <Image style={styles.img} source={{ uri: `${image}` }} /> */}
          <Icon
          name={image}
          type='material-community'          
          size={35}
          color={amount<0 ? 'red' : '#00FF00'} />
        </View>
        <View style={styles.data}>
          <Text style={styles.text}>{name}</Text>
          <Text style={{ color: "white" }}>{date}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textAmount}>$ {amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,    
    justifyContent: 'space-between',  
  },
  subContainer: {
    flexDirection: "row",
    paddingRight:25,
    alignItems: 'center',
  },
  img: {
    width: 38,
    height: 38,
  },
  borde: {
    alignItems: "center",
    justifyContent: "center",    
    // borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    // backgroundColor: "white",
    width: 40,
    height: 40,    
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  textAmount: {
    alignItems: 'center',
    paddingLeft: 10,
    color: "white",
    paddingTop:15,
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    width: 80,
    height: 50,
    margin: 10,
    borderRadius: 20,
  },
  data: {
    padding: 10,
  },
});

export default CardUserMovimientos;
