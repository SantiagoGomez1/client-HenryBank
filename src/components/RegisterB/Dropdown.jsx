import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";

import { getCountries, getCities } from "../../redux/actions";

//----------------------------Gender----------------------------//
  const data = [
    { label: 'Femenino', value: 'Femenino' },
    { label: 'Masculino', value: 'Masculino' },
    { label: 'X', value: 'X' },
  ];

  export function DropdownComponentGender ({setGender}){
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);   

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Género
          </Text>
        );
      }
      return <Text style={[styles.label2]}>Género</Text>;
    };

    return (
        <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
        //   search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Elige una opción' : '...'}
        //   searchPlaceholder="Buscar..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setGender(item.value);
            setIsFocus(false);
          }}
        //   renderLeftIcon={() => (
        //     <AntDesign
        //       style={styles.icon}
        //       color={isFocus ? 'blue' : 'black'}
        //       name="Safety"
        //       size={20}
        //     />
        //   )}
        />
      </View>
    );
  };

//----------------------------Nationality----------------------------//
export function DropdownComponentNationality ({setNationality}){
  const dispatch = useDispatch();
  const country = useSelector(state => state.countries)
  let countries=[]
  for (var i = 0; i <= country.length; i++){
    countries.push({label: country[i], value:country[i]})
  };

  const [value, setValue] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
    
  useEffect(() => {        
    dispatch(getCountries());    
  }, []);
  
  useEffect(() => {    
    dispatch(getCities(value));    
  }, [value]);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Nacionalidad
        </Text>
      );
    }
    return <Text style={[styles.label2]}>Nacionalidad</Text>;
  };

  return (
      <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={countries}
        // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Elige un país' : '...'}
        // searchPlaceholder="Buscar..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
          setNationality(item.value);
        }}
      //   renderLeftIcon={() => (
      //     <AntDesign
      //       style={styles.icon}
      //       color={isFocus ? 'blue' : 'black'}
      //       name="Safety"
      //       size={20}
      //     />
      //   )}
      />
    </View>
  );
};
//----------------------------City----------------------------//
export function DropdownComponentCity ({setCity}){  
  const city = useSelector(state => state.cities)
  var cities=[]
  for (var i = 0; i <= city.length; i++){
    cities.push({label: city[i], value:city[i]})
  };
  
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Provincias/Estados
        </Text>
      );
    }
    return <Text style={[styles.label2]}>Provincias/Estados</Text>;
  };

  return (
      <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={cities}
        // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Elige una provincia' : '...'}
        // searchPlaceholder="Buscar..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
          setCity(item.value);
        }}
      //   renderLeftIcon={() => (
      //     <AntDesign
      //       style={styles.icon}
      //       color={isFocus ? 'blue' : 'black'}
      //       name="Safety"
      //       size={20}
      //     />
      //   )}
      />
    </View>
  );
};

  const styles = StyleSheet.create({
    container: {        
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 25,    
      width: '85%',
      margin: 15,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,      
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    label2: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,        
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });