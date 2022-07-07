import React, {useState} from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { Input, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { createIconSetFromFontello } from "react-native-vector-icons";



export default function RegisterA() {
  const navigation = useNavigation();

  const goRegisterB = () => {
    navigation.navigate("RegisterB");
  };

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  })
  const [errorEmail, setErrorEmail] = useState('')
  const [errorConfirmEmail, setErrorConfirmEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorConfirPassword, setErrorConfirmPassword] = useState('')

  const handleOnChange = (e, type) =>{
    setFormData({...formData, [type]: e.nativeEvent.text})
  }

  const registerUser = () => {
    if(!validateData()){
      return
    }
    console.log('todo ok', formData)
    goRegisterB()
  }

  const validateData = () => {
    setErrorEmail('')
    setErrorConfirmEmail('')
    setErrorPassword('')
    setErrorConfirmPassword('')
    let isValid = true

    if(!validateEmail(formData.email)){
      setErrorEmail('Debes ingresar un E-mail válido')
      isValid = false
    }
    if(formData.email !== formData.confirmEmail){
      setErrorEmail('Los E-mails no coinciden')
      setErrorConfirmEmail('Los E-mails  no coinciden')
      isValid = false
    }
    if(formData.password.length < 8){
      setErrorPassword('Debes ingresar una contraseña de 8 carácteres')
      isValid = false
    }
    if(formData.confirmPassword.length < 8){
      setErrorConfirmPassword('Debes ingresar una contraseña de 8 carácteres')      
      isValid = false
    }
    if(formData.password !== formData.confirmPassword){
      setErrorPassword('Las contraseñas no coinciden')
      setErrorConfirmPassword('Las contraseñas no coinciden')
      isValid = false
    }
      
    return isValid    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Regístrate</Text>

      {/* <Text style={styles.text}>E-mail</Text> */}
      <Input
        containerStyle={styles.input}        
        placeholder="soyhenry@gmail.com"
        label="E-mail"
        onChange={(e)=> handleOnChange(e, 'email')}
        errorMessage={errorEmail}
        defaultValue={formData.email}
        />

      {/* <Text style={styles.text}>Confirmar E-mail</Text> */}
      <Input
        containerStyle={styles.input}        
        placeholder="soyhenry@gmail.com"
        label="Confirmar E-mail"
        onChange={(e)=> handleOnChange(e, 'confirmEmail')}
        errorMessage={errorConfirmEmail}
        defaultValue={formData.confirmEmail}
        />

      {/* <Text style={styles.text}>Contraseña</Text> */}
      <Input
        containerStyle={styles.input}        
        placeholder="alfanumérica de 8 digitos"
        label="Contraseña"
        password={true}
        secureTextEntry={!showPassword}
        onChange={(e)=> handleOnChange(e, 'password')}
        errorMessage={errorPassword}
        defaultValue={formData.password}
        rightIcon={
          <Icon
            type='material-community'
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={styles.icon}
            onPress={()=> setShowPassword(!showPassword)}
          />
        }
      />              

      {/* <Text style={styles.text}>Confirmar Contraseña</Text> */}
      <Input
        containerStyle={styles.input}        
        placeholder="alfanumérica de 8 digitos"
        label="Confirmar Contraseña"
        password={true}
        secureTextEntry={!showPassword}
        onChange={(e)=> handleOnChange(e, 'confirmPassword')}
        errorMessage={errorConfirPassword}
        defaultValue={formData.confirmPassword}
        rightIcon={
          <Icon
            type='material-community'
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={styles.icon}
            onPress={()=> setShowPassword(!showPassword)}
          />
        }
        />

      <Button 
        style={styles.btn}
        title="Siguiente"
        // onPress={() => goRegisterB()}
        onPress={() => registerUser()}
      >
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#140152",
    alignItems: "center",
    marginTop: 30,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 25,
    margin: 5,
    paddingLeft: 25,
    paddingTop: 15,
    width: '85%',
  },
  btn: {
    flexDirection: "column",    
  },
  text: {
    color: "#fff",
  },
  tittle: {
    color: "#fff",
    fontSize: 45,
  },
  icon:{
    color: '#85929E'

  },

});


const validateEmail = function (email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email)
}