import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import Home from "../Home/home.jsx";
import Wallet from "../Wallet/wallet.jsx";
import Investor from "../Investor/investor.jsx";

const homeRoutes = () => {
  const Tab = createBottomTabNavigator();
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
              <MaterialCommunityIcons
                name="wallet"
                color={"black"}
                size={size}
              />
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

export default homeRoutes;
