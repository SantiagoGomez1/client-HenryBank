import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Button, Dialog, ListItem, Avatar, Icon} from '@rneui/themed';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { getContacts, renderScreen, getContactsSelected } from "../../redux/actions/index";
import UserCardContacto from "./UserCardContacto.jsx";

const Dialogs = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.logIn.token);  
  const contacts = useSelector((state) => state.contacts);

  const [visible6, setVisible6] = useState(false);

  const [contactsSelected, setContactsAdded] = useState({
      name: '',
      cbu: '',
      id: '',
      image: '',
  });

  const toggleDialog6 = () => {
    setVisible6(!visible6);
  };


  const handleChange = (name, id, image, cbu, alias) => {
    toggleDialog6()
    setContactsAdded({...contactsSelected,
      name: name,
      cbu: cbu,
      id: id,
      image: image,
    });  
    // dispatch(renderScreen(7));
  };
  
  // console.log('contactsSelected', contactsSelected)

  useEffect(() => {
    dispatch(getContacts(token));
    dispatch(getContactsSelected(contactsSelected));
  }, []);

  useEffect(() => {
    !contactsSelected.id ? null :
    dispatch(renderScreen(7))
  }, [contactsSelected]);  

  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={styles.button}
          title="Contactos"
          onPress={toggleDialog6}
        >
          Contactos
          <Icon name="star" color="yellow" />
        </Button>

        {!contactsSelected.id ? null : <UserCardContacto data={contactsSelected} />}
        
      </View>
      <Dialog
        isVisible={visible6}
        onBackdropPress={toggleDialog6}
      >
        <Dialog.Title title="Elige un contacto"/>
        {contacts.map((el, i) => (
          <ListItem
            key={i}
            containerStyle={{
              marginHorizontal: -10,
              borderRadius: 8,
            }}
            onPress={() => handleChange(el.name, el.id, el.image, el.cbu, el.alias)}
          >
            <Avatar rounded source={{ uri: el.image }} />
            <ListItem.Content>
              <ListItem.Title style={{ fontWeight: '700' }}>
                {el.name}
              </ListItem.Title>
              <ListItem.Subtitle>Alias: {el.alias}</ListItem.Subtitle>
              <ListItem.Subtitle>CBU: {el.cbu}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>

        ))}
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    width: 'auto',
    margin: 20,
  },
  buttonContainer: {
    // margin: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dialogs;