import React from "react";

import { View, Text, FlatList, Button, Image, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

//HPÑA

const UserCardHome = () => {
  const user = useSelector((state) => state.user);
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: `${user.image}` }} />
      </View>
      <View>
        <Text style={{ color: "white", fontWeight: "bold" }}>Bienvenido!</Text>
        <Text style={{ color: "gray", fontWeight:'semiBold'}}>{user.fullName}</Text>
      </View>
    </View>
  );
  //   return <FlatList data={user} keyExtractor={({ id }) => id.toString()} renderItem={({item}) => (
  //   )}/>;
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingLeft: 20,
    flexDirection: "row",
    gap: 5,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default UserCardHome;
