import React, { useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "Alias", value: "Alias" },
  { label: "CBU", value: "CBU" },
];

export function DropAliasCBU({ setIdent }) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>Identificador</Text>
      );
    }
    return <Text style={[styles.label2]}>Identificador</Text>;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Elige una opción" : "..."}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIdent(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {        
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 25,    
      width: '90%',
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,      
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