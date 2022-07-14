import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  getUsers,
  getUser,
  getUserDetail,
  getNews,
  getAllUsers,
  getMyUser
} from "../../redux/actions";


import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import Home from "../Home/Home.jsx";
import Wallet from "../Wallet/Wallet.jsx";
import Investor from "../Investor/Investor.jsx";

const HomeRoutes = () => {
  const Tab = createBottomTabNavigator();
  const log = useSelector((state) => state.logIn.token);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getUser());
    dispatch(getNews())
    dispatch(getMyUser(logIn))
    dispatch(getAllUsers(logIn))
    dispatch(getUserDetail(logIn));
    dispatch(getNews());
    dispatch(getUserDetail(log));
  }, [dispatch]);

  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "aqua",
        tabBarStyle: {
          backgroundColor: "#140152",
        },
        PressColor: "gray",
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wallet" color={color} size={size} />
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
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeRoutes;
