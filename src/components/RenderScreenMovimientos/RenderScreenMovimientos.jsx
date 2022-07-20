import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {View, TextInput, FlatList, Text, StyleSheet, Image} from "react-native";

import { getMovements } from "../../redux/actions";

import UserCardMovimientos from "../UserCardMovimientos/UserCardMovimientos.jsx";

const RenderScreenMovimientos = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.logIn.token);
  // const mov = useSelector((state) => state.user.movements);
  const mov = useSelector((state) => state.movements);

  // console.log('estados movements', (mov))

  var movimientos = [];
  
  for(const key in mov){
    if(mov[key].length !== 0 && key === 'recharges'){
        // console.log('las key', key, mov[key])
          mov[key].forEach(element => {  
          let id = element.idOp        
          let date = element.date.split('/').reverse().join('/')
          let amount = element.amount
          let hour = element.hour

          let obj = Object.create({id, date, amount, hour})
          obj.id = id;
          obj.date = date +' '+ hour;
          obj.hour = hour;
          obj.amount = amount;
          obj.name = 'Recarga';
          obj.icon = 'plus-circle-outline';
              
          // console.log('obj create', obj)
          movimientos.push(obj)
          // console.log('array movimientos', movimientos)
        });

      }else if(mov[key].length !== 0 && key === 'transactionsReceived'){        
          mov[key].forEach(element => {  
          let id = element.idOp        
          let date = element.date.split('/').reverse().join('/')
          let amount = element.amount
          let hour = element.hour

          let obj = Object.create({id, date, amount, hour})
          obj.id = id;
          obj.date = date +' '+ hour;
          obj.hour = hour;
          obj.amount = amount;
          obj.name = 'Trasnferencia Recibida';
          obj.icon = 'arrow-right-circle-outline';

          movimientos.push(obj)          
        });
      }else if(mov[key].length !== 0 && key === 'transactionsSent'){        
          mov[key].forEach(element => {  
          let id = element.idOp        
          let date = element.date.split('/').reverse().join('/')
          let amount = element.amount
          let hour = element.hour

          let obj = Object.create({id, date, amount, hour})
          obj.id = id;
          obj.date = date +' '+ hour;
          obj.hour = hour;
          obj.amount = amount;
          obj.name = 'Trasnferencia Enviada';
          obj.icon = 'arrow-left-circle-outline';

          movimientos.push(obj)          
        });
      }else if(mov[key].length !== 0 && key === 'buyCrypto'){        
          mov[key].forEach(element => {  
          let id = element.id        
          let date = element.date.split('/').reverse().join('/')
          let amount = element.amount
          let name = element.name
          let hour = element.hour
          let image = element.image.thumb

          let obj = Object.create({id, date, amount, name, hour})
          obj.id = id;
          obj.date = date +' '+ hour;
          obj.hour = hour;
          obj.amount = amount;
          obj.name = name;
          obj.icon = 'arrow-left-circle-outline';

          movimientos.push(obj)          
        });
      }else if(mov[key].length !== 0 && key === 'sellCrypto'){        
          mov[key].forEach(element => {  
            let id = element.id       
            let date = element.date.split('/').reverse().join('/')
            let amount = element.amount
            let name = element.name
            let hour = element.hour
            let image = element.image.thumb
  
            let obj = Object.create({id, date, amount, name, hour})
            obj.id = id;
            obj.date = date +' '+ hour;
            obj.hour = hour;
            obj.amount = amount;
            obj.name = name;
            obj.icon = 'arrow-right-circle-outline';              
          
          movimientos.push(obj)          
        });
      }else if(mov[key].length !== 0 && key === 'pendingLockedStake'){        
          mov[key].forEach(element => {  
          let id = element.idOp        
          let date = element.date.split('/').reverse().join('/')
          let amount = element.amount
          let hour = element.hour

          let obj = Object.create({id, date, amount, hour})
          obj.id = id;
          obj.date = date +' '+ hour;
          obj.hour = hour;
          obj.amount = amount;
          obj.name = 'Constitución Plazo Fijo';
          obj.icon = 'arrow-left-circle-outline';              
          
          movimientos.push(obj)          
        });
      }else if(mov[key].length !== 0 && key === 'finalizedLockedStake'){        
          mov[key].forEach(element => {  
          let id = element.idOp        
          let date = element.date.split('/').reverse().join('/')
          let amount = element.amount
          let hour = element.hour

          let obj = Object.create({id, date, amount, hour})
          obj.id = id;
          obj.date = date +' '+ hour;
          obj.hour = hour;
          obj.amount = amount;
          obj.name = 'Vencimiento Plazo Fijo';
          obj.icon = 'arrow-right-circle-outline';
                    
          movimientos.push(obj)          
        });
      }
        // console.log('vacio', key)      
  }
  
  let movementsSort = movimientos.sort((a, b) => new Date(a.date) - new Date(b.date));  

  useEffect(() => {
    dispatch(getMovements(token));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Movimientos</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor={"gray"}
        />
      </View>
      <FlatList
        data={movementsSort}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserCardMovimientos
            id={item.id}
            image={item.icon}
            name={item.name}
            amount={item.amount}
            date={item.date.substring(0,10).trim().split('/').reverse().join('/') /* +' '+item.hour */}
          />
        )}
      />
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
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    color: "white",
    backgroundColor: "rgba(25, 23, 61, 0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    paddingLeft: 10,
    width: 300,
    height: 40,
    margin: 10,
    borderRadius: 20,
  },
});

export default RenderScreenMovimientos;