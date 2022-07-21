import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  getTarjetas } from '../CreditCardAsyncStorage/CreditCardAsyncStorage'
import { useFocusEffect } from '@react-navigation/native';


export default function GetCards() {
    const [tarjetas, setTarjetas] = React.useState([])

    useFocusEffect(
        React.useCallback(() => {
          getTarjetas().then(res => {
            console.log(res)
            setTarjetas(res)
          })
        }, [])
    );
  return (
    <ScrollView style={{ height: 400 }}>

      {tarjetas?.length > 0 &&
        tarjetas.map((item, index) => (
          <View key={index}  style={styles.subCard}>
            <Text style={{
              color: "white",
              fontSize: 15,
            }}>Nombre: {item.name}</Text>
            <Text style={{
              color: "white",
              fontSize: 15,
            }}>Numero: {item.number}</Text>
          </View>
        ))}
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    subCard: {
        backgroundColor: "rgba(25, 23, 61, 0.5)",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.5)",
        margin: 10,
        borderRadius: 8,
        padding: 10,
      },
})