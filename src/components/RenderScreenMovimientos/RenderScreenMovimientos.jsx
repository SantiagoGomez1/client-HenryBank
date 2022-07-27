import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, FlatList, Text, StyleSheet, Image } from "react-native";

import { Input, Icon } from "react-native-elements";
import { getMovements } from "../../redux/actions";
import Switch from "./Switch.jsx";
import UserCardMovimientos from "../UserCardMovimientos/UserCardMovimientos.jsx";

const RenderScreenMovimientos = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.logIn.token);
  const mov = useSelector((state) => state.movements);
  const [typee, setTypee] = useState({ typee: "" });
  const [render, setRender] = useState("INGRESOS");

  const handleType = (e, type) => {
    setTypee({ ...typee, [type]: e.nativeEvent.text });
  };

  var movimientos = [];

  for (const key in mov) {
    if (mov[key].length !== 0 && key === "recharges") {
      // console.log('las key', key, mov[key])
      mov[key].forEach((element) => {
        let id = element.idOp;
        let date = element.date.split("/").reverse().join("/");
        let amount = element.amount;
        let hour = element.hour;

        let obj = Object.create({ id, date, amount, hour });
        obj.id = id;
        obj.date = date + " " + hour;
        obj.hour = hour;
        obj.amount = amount;
        obj.name = "Recarga";
        obj.icon = "plus-circle-outline";

        // console.log('obj create', obj)
        movimientos.push(obj);
        // console.log('array movimientos', movimientos)
      });
    } else if (mov[key].length !== 0 && key === "transactionsReceived") {
      mov[key].forEach((element) => {
        let id = element.idOp;
        let date = element.date.split("/").reverse().join("/");
        let amount = element.amount;
        let hour = element.hour;

        let obj = Object.create({ id, date, amount, hour });
        obj.id = id;
        obj.date = date + " " + hour;
        obj.hour = hour;
        obj.amount = amount;
        obj.name = "Transferencia Recibida";
        obj.icon = "arrow-right-circle-outline";

        movimientos.push(obj);
      });
    } else if (mov[key].length !== 0 && key === "transactionsSent") {
      mov[key].forEach((element) => {
        let id = element.idOp;
        let date = element.date.split("/").reverse().join("/");
        let amount = element.amount;
        let hour = element.hour;

        let obj = Object.create({ id, date, amount, hour });
        obj.id = id;
        obj.date = date + " " + hour;
        obj.hour = hour;
        obj.amount = amount;
        obj.name = "Transferencia Enviada";
        obj.icon = "arrow-left-circle-outline";

        movimientos.push(obj);
      });
    } else if (mov[key].length !== 0 && key === "buyCrypto") {
      mov[key].forEach((element) => {
        let id = element.id;
        let date = element.date.split("/").reverse().join("/");
        let amount = element.amount;
        let name = element.name;
        let hour = element.hour;
        let image = element.image.thumb;

        let obj = Object.create({ id, date, amount, name, hour });
        obj.id = id;
        obj.date = date + " " + hour;
        obj.hour = hour;
        obj.amount = amount;
        obj.name = name;
        obj.icon = "arrow-left-circle-outline";

        movimientos.push(obj);
      });
    } else if (mov[key].length !== 0 && key === "sellCrypto") {
      mov[key].forEach((element) => {
        let id = element.id;
        let date = element.date.split("/").reverse().join("/");
        let amount = element.amount;
        let name = element.name;
        let hour = element.hour;
        let image = element.image.thumb;

        let obj = Object.create({ id, date, amount, name, hour });
        obj.id = id;
        obj.date = date + " " + hour;
        obj.hour = hour;
        obj.amount = amount;
        obj.name = name;
        obj.icon = "arrow-right-circle-outline";

        movimientos.push(obj);
      });
    } else if (mov[key].length !== 0 && key === "pendingLockedStake") {
      mov[key].forEach((element) => {
        let id = element.idOp;
        let date = element.date.split("/").reverse().join("/");
        let amount = element.amount;
        let hour = element.hour;

        let obj = Object.create({ id, date, amount, hour });
        obj.id = id;
        obj.date = date + " " + hour;
        obj.hour = hour;
        obj.amount = amount;
        obj.name = "Constitución Plazo Fijo";
        obj.icon = "arrow-left-circle-outline";

        movimientos.push(obj);
      });
    } else if (mov[key].length !== 0 && key === "finalizedLockedStake") {
      mov[key].forEach((element) => {
        let id = element.idOp;
        let date = element.date.split("/").reverse().join("/");
        let amount = element.amount;
        let hour = element.hour;

        let obj = Object.create({ id, date, amount, hour });
        obj.id = id;
        obj.date = date + " " + hour;
        obj.hour = hour;
        obj.amount = amount;
        obj.name = "Vencimiento Plazo Fijo";
        obj.icon = "arrow-right-circle-outline";

        movimientos.push(obj);
      });
    }
    // console.log('vacio', key)
  }

  let movementsSort = movimientos.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  // console.log(movementsSort);
  let filteredIngresos = movementsSort.filter((e) => e.amount.includes("+"));
  let filteredEgresos = movementsSort.filter((e) => e.amount.includes("-"));
  console.log(filteredIngresos);
  console.log(filteredEgresos);
  let filtertedIngresosType = movementsSort
    .filter((e) => e.amount.includes("+"))
    .filter((e) => e.name.toLowerCase().includes(typee.typee.toLowerCase()));
  let filtertedEgresosType = movementsSort
    .filter((e) => e.amount.includes("-"))
    .filter((e) => e.name.toLowerCase().includes(typee.typee.toLowerCase()));
  console.log(filtertedIngresosType);
  console.log(filtertedEgresosType);
  const searchForType = () => {
    if (render === "INGRESOS") {
      setRender("INGRESOStype");
    }
    if (render === "EGRESOS") {
      setRender("EGRESOStype");
    }
  };

  useEffect(() => {
    dispatch(getMovements(token));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Movimientos</Text>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Input
          placeholder="Recarga"
          placeholderTextColor={"gray"}
          onChange={(e) => handleType(e, "typee")}
          style={styles.input}
          rightIcon={
            <Icon
              name="search"
              color={"white"}
              size={30}
              onPress={() => searchForType()}
            />
          }
        />
      </View>
      <Switch setRender={setRender} />
      {!filteredEgresos[0] && !filteredIngresos[0] ? (
        <View style={styles.cont}>
          <Image
            style={styles.imgSuccess}
            source={require("../../imgs/javimilei.png")}
          ></Image>
          <Text style={styles.text2}>
            ¡Todavía no tienes movimientos en tu cuenta!
          </Text>
        </View>
      ) : render === "INGRESOS" ? (
        <FlatList
          data={filteredIngresos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <UserCardMovimientos
              id={item.id}
              image={item.icon}
              name={item.name}
              amount={item.amount}
              date={
                item.date
                  .substring(0, 10)
                  .trim()
                  .split("/")
                  .reverse()
                  .join("/") /* +' '+item.hour */
              }
            />
          )}
        />
      ) : render === "EGRESOS" ? (
        <FlatList
          data={filteredEgresos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <UserCardMovimientos
              id={item.id}
              image={item.icon}
              name={item.name}
              amount={item.amount}
              date={
                item.date
                  .substring(0, 10)
                  .trim()
                  .split("/")
                  .reverse()
                  .join("/") /* +' '+item.hour */
              }
            />
          )}
        />
      ) : render === "EGRESOStype" ? (
        <FlatList
          data={filtertedEgresosType}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <UserCardMovimientos
              id={item.id}
              image={item.icon}
              name={item.name}
              amount={item.amount}
              date={
                item.date
                  .substring(0, 10)
                  .trim()
                  .split("/")
                  .reverse()
                  .join("/") /* +' '+item.hour */
              }
            />
          )}
        />
      ) : render === "INGRESOStype" ? (
        <FlatList
          data={filtertedIngresosType}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <UserCardMovimientos
              id={item.id}
              image={item.icon}
              name={item.name}
              amount={item.amount}
              date={
                item.date
                  .substring(0, 10)
                  .trim()
                  .split("/")
                  .reverse()
                  .join("/") /* +' '+item.hour */
              }
            />
          )}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 450,
    width: 350,
    alignItems: "center",
    paddingTop: 20,
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
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
  text2: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
  },
  imgSuccess: {
    height: 100,
    width: 100,
    alignSelf: "center",
    padding: 5,
    borderRadius: 50,
  },
  cont: { paddingTop: 30 },
});

export default RenderScreenMovimientos;
