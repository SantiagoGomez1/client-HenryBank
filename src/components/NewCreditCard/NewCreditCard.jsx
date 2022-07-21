import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { CreditCardInput } from "react-native-credit-card-input";
import { LinearGradient } from "expo-linear-gradient";
import { getTarjetas, saveTarjetas } from '../CreditCardAsyncStorage/CreditCardAsyncStorage'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";
import { useNavigation } from '@react-navigation/native'

var { height } = Dimensions.get("window");

export default function NewCreditCard() {
    const [data, setData] = React.useState({})
    const [bolTarjeta, setBolTarjeta] = React.useState(false)
    const [tarjetas, setTarjetas] = React.useState([])
    const navigation = useNavigation()

    function onChange(formData) {
        console.log(JSON.stringify(formData, null, " "))
        setData(formData.values)
        setBolTarjeta(formData.valid)
    }

    function asociarTarjeta(){
        
        if(bolTarjeta){
            const result = [
                ...tarjetas,
                data
            ]

            setTarjetas(result)
            
            saveTarjetas(result).then((res) => {
                console.log(res)
            })
            navigation.goBack()
        }else {
            console.log("Debe llenar todos los campos")
        } 
    }


    useEffect(() => {
        getTarjetas().then((res) => {
            if(res !== null){
                setTarjetas(res)
            }
            console.log(res)
        })
    }, [])

  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: "#140152", }}>
        <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>

        <View style={{ width: '100%', height: '30%', marginTop: 60}}>

      <CreditCardInput 
        autoFocus
        requiresName
        requiresCVC
        cardScale={0.9}
        allowScroll={true}
        labelStyle={styles.label}
        inputStyle={styles.input}
        validColor={"black"}
        invalidColor={"red"}
        placeholderColor={"darkgray"}
        placeholders={{ number: "1234 5678 1234 5678", name: "NOMBRE COMPLETO", expiry: "MM/YY", cvc: "CVC"}}
        labels={{ number: "NÚMERO DE TARJETA", expiry: "EXPIRA", name: "NOMBRE COMPLETO", cvc: "CVC/CCV"}}
        onChange={onChange}
      />
        </View>
        <View style={{
            width: 200,
            marginTop: 40,
            backgroundColor: "red",
            borderRadius: 60
        }}>
            <TouchableOpacity onPress={() => {bolTarjeta ?   
                asociarTarjeta()
                : Alert.alert("Debe llenar todos los campos")}}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 17,
                    color: "white",
                    paddingVertical: 15,
                }}>Asociar Tarjeta</Text>
            </TouchableOpacity>
        </View>
        </LinearGradient>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 60,
      },
      background: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-around",
        paddingTop: Constants.statusBarHeight,
        height: height,
      },
      label: {
        color: "black",
        fontSize: 12,
      },
      input: {
        fontSize: 16,
        color: "black",
      },
})