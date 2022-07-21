import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@rneui/themed";

import { renderScreen } from "../../redux/actions";

const RenderScreenMovimientosDetail = () => {
  const dispatch = useDispatch();
  const movements = useSelector((state) => state.movements);
  const detailMovements = useSelector((state) => state.detailMovements);

  const setScreen = (screen) => {
    dispatch(renderScreen(screen));
  };

  let mov = [];

  for(const key in movements){    
      movements[key].forEach(element => {
        if(element.id === detailMovements || element.idOp === detailMovements){
          console.log('ok')
          let id = element.idOp || element.id
          let date = element.date
          let amount = element.amount
          let hour = element.hour
          let name = element.name
          let names = key === 'recharges' ? 'Recarga' : 
                    key === 'transactionsReceived' ? 'Transferencia Recibida' :
                    key === 'transactionsSent' ? 'Transferencia Enviada' :
                    key === 'buyCrypto' ? 'Crypto '+name :
                    key === 'sellCrypto' ?'Crypto '+name :
                    key === 'pendingLockedStake' ? 'Constitución Plazo Fijo' :
                    key === 'finalizedLockedStake' ? 'Vencimiento Plazo Fijo' : ''

          let fromName = key === 'transactionsReceived' ? 'De: '+element.accountOrigin.name +' '+ element.accountOrigin.lastName :
                    key === 'transactionsSent' ? 'Para: '+element.accountDestiny.name +' '+element.accountDestiny.lastName :''

          let fromCbu = key === 'transactionsReceived' ? 'CBU: '+element.accountOrigin.cub :
                    key === 'transactionsSent' ? 'CBU: '+element.accountDestiny.cub :''
  
          let obj = Object.create({id, date, amount, hour, names})
          obj.id = id;
          obj.date = date;
          obj.hour = hour;
          obj.amount = amount;
          obj.name = name;
          obj.fromName = fromName;
          obj.fromCbu = fromCbu;
          obj.icon = 'plus-circle-outline';              
          
          mov.push(obj)
          }
      });
    }

  return (
    <View style={styles.container}>
      <Text style={styles.detail}>Detalles</Text>

      <Button title="ATRAS" onPress={() => setScreen(3)} />

      <View>       
          <View>
            <Icon
              name={'information-variant'}
              type="material-community"
              size={65}
              color={mov[0].amount < 0 ? "red" : "#00FF00"}
            />
          </View>
          <View >
            <Text style={styles.text}>{mov[0].names}</Text>
            <Text style={styles.text}>Fecha: {mov[0].date}</Text>
            <Text style={styles.text}>Hora: {mov[0].hour}</Text>
            <Text style={[styles.text, {color:Number(mov[0].amount) < 0 ? "red" : "#00FF00"}]}>$ {Number(mov[0].amount).toFixed(2)}</Text>
            <Text style={styles.text}>{mov[0].fromName}</Text>
            <Text style={styles.text}>{mov[0].fromCbu}</Text>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "white",
    height: 450,
    width: 350,
    borderRadius: 8,
    alignItems: "center",
    paddingTop: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    margin: 3,
  },
  detail: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default RenderScreenMovimientosDetail;
