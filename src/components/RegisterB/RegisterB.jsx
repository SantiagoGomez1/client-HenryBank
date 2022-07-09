import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Input, Icon } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";


const RegisterB = () => {
  const navigation = useNavigation();
  const goRegisterC = () => {
    navigation.navigate("RegisterC");
  };

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    identity: "",
    gender: "",
    dateOfBirth: "",
    city: "",
    nationality: "",
    address: "",    
  });
//----------------------States Picker-Date----------------------//
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);    
    hideDatePicker();
  };
//----------------------States Errors----------------------//
  const [errorName, setErrorName] = useState("");
  const [errorIdentity, setErrorIdentity] = useState("");
  const [errorDateOfBirth, setErrorDateOfBirth] = useState("");
//---------------------------------------------------------//

  const handleOnChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };  

  const registerUserPerData = () => {
    if (!validateData()) {
      return;
    }
    console.log("todo ok B", formData);
    goRegisterC();
    setFormData({
      name: "",
      lastName: "",
      identity: "",
      gender: "",
      dateOfBirth: "",
      city: "",
      nationality: "",
      address: "", 
    });
  };
//----------------------Funtion Validation----------------------//
  const validateData = () => {
    setErrorName("");
    setErrorIdentity("");
    let isValid = true;

    if (!validateName(formData.name)) {
      setErrorName("Debes ingresar solo letras");
      isValid = false;
    }
    if (!validateName(formData.lastName)) {
      setErrorName("Debes ingresar solo letras");
      isValid = false;
    }
    if (formData.identity.length < 8) {
      setErrorIdentity("Debes ingresar un número válido");
      isValid = false;
    }
    if (!validateIdentity(formData.identity)) {
      setErrorIdentity("Debes ingresar solo números");
      isValid = false;
    }
    if (!validateDateOfBirth(formData.dateOfBirth)) {
      setErrorDateOfBirth("Debes ingresar un formato correcto");
      isValid = false;
    }

    return isValid;
  };

  const validateName = function (name) {
    const re =/^[A-Z]+$/i;
    return re.test(name);
  };
  const validateIdentity = function (identity) {
    const re =/^[0-9]+$/;
    return re.test(identity);
  };
  const validateDateOfBirth = function (dateOfBirth) {
    const re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    return re.test(dateOfBirth);
  };
  
  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={["#126492", "#140152"]} style={styles.background}>

        <Text style={styles.textMain}>Regístrate</Text>
        
          <Input
            containerStyle={styles.input}
            placeholder="Ingresa tu nombre"
            label="Nombre"
            onChange={(e) => handleOnChange(e, "name")}
            errorMessage={errorName}
            defaultValue={formData.name}
          />

          <Input
            containerStyle={styles.input}
            placeholder="Ingresa tu apellido"
            label="Apellido"
            onChange={(e) => handleOnChange(e, "lastName")}
            errorMessage={errorName}
            defaultValue={formData.lastName}
          />

          <Input
            containerStyle={styles.input}
            placeholder="Solo números"
            label="Cedula de Identidad / D.N.I"
            onChange={(e) => handleOnChange(e, "identity")}
            errorMessage={errorIdentity}
            defaultValue={formData.identity}
          />

          <Input
            containerStyle={styles.input}
            placeholder="Elige una opción"
            label="Genero"
            onChange={(e) => handleOnChange(e, "gender")}
            // errorMessage={errorEmail}
            defaultValue={formData.gender}
          />

          <Input
            containerStyle={styles.input}
            placeholder="22/04/1995"
            label="Fecha de Nacimiento"
            onChange={(e) => handleOnChange(e, "dateOfBirth")}
            errorMessage={errorDateOfBirth}
            defaultValue={formData.dateOfBirth}
            rightIcon={
              <Icon
                type="material-community"
                name='calendar-account-outline'
                iconStyle={styles.icon}
                onPress={() => showDatePicker()}
              />
            }
          />

    {/* <View> */}
      {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    {/* </View> */}

          {/* <View style={styles.ciudadNacionalidad}> */}

            <Input
            containerStyle={styles.input}
            placeholder="Buenos Aires"
            label="Ciudad"
            onChange={(e) => handleOnChange(e, "city")}
            // errorMessage={errorEmail}
            defaultValue={formData.city}
            />

            <Input
            containerStyle={styles.input}
            placeholder="Argentina"
            label="Nacionalidad"
            onChange={(e) => handleOnChange(e, "nationality")}
            // errorMessage={errorEmail}
            defaultValue={formData.nationality}
            />

          {/* </View> */}

          <Input
            containerStyle={styles.input}
            placeholder="Cerro Arco 4065"
            label="Domicilio"
            onChange={(e) => handleOnChange(e, "address")}
            // errorMessage={errorEmail}
            defaultValue={formData.address}
          />      
        <View style={styles.btn}>
          <Button title="Siguiente" onPress={() => registerUserPerData()}></Button>
        </View>

      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
  },
  // ciudadNacionalidad: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   width:'50%',
  // },
  textMain: {
    color: "#fff",
    fontSize: 45,
  },
  text: {
    color: "#fff",
    fontSize: 25,
  },

  input: {
    backgroundColor: "white",
    borderRadius: 25,
    margin: 15,
    paddingLeft: 25,
    paddingTop: 15,
    width: "85%",    
  },
  btn: {
    margin:20,
  },
});

export default RegisterB;
