import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers, getUser } from "../../redux/actions";

import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import Home from "../Home/Home.jsx";
import Wallet from "../Wallet/Wallet.jsx";
import Investor from "../Investor/Investor.jsx";

const HomeRoutes = () => {
  const Tab = createBottomTabNavigator();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"black"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wallet" color={"black"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Investor"
        component={Investor}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="stats-chart"
              color={"black"}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeRoutes;
