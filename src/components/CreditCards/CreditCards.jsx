import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native'
import React, { useEffect } from "react";
import { useNavigation } from '@react-navigation/native'
import { deleteTarjetas, getTarjetas } from '../CreditCardAsyncStorage/CreditCardAsyncStorage'
import { useFocusEffect } from "@react-navigation/native";


export default function CreditCards() {
  const [tarjetas, setTarjetas] = React.useState([])

  const navigation = useNavigation()

  useFocusEffect(
    React.useCallback(() => {
      getTarjetas().then(res => {
        console.log(res)
        setTarjetas(res)
      })
    }, [])
    );

  function borrarTarjetas() {
    deleteTarjetas().then((res) => {
      setTarjetas([])
      console.log(res)
    })
  }
  
  return (
    <View style={{ display: "flex", justifyContent: "space-around"}}>
      <ScrollView>

      {tarjetas.length > 0 &&
        tarjetas.map((item, index) => (
          <View key={index}>
            <Text style={{
              color: "white",
              fontSize: 15,
            }}>{item.name}</Text>
            <Text style={{
              color: "white",
              fontSize: 15,
            }}>{item.number}</Text>
          </View>
        ))}
      </ScrollView>
      <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
      <Button 
        title='Agregar Nueva tarjeta'
        onPress={() => 
          navigation.navigate("NewCreditCard")}
        style={{ marginBottom: 10}}
      />
      <Button 
        title='Eliminar tarjetas'
        onPress={() => borrarTarjetas()}
        style={{ marginTop: 10}}
      />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
})