import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

import AdminHome from "../AdminHome/AdminHome";
import AdminActions from "../AdminActions/AdminActions";

const AdminRoutes = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="AdminHome"
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
        name="AdminHome"
        component={AdminHome}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AdminActions"
        component={AdminActions}
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

export default AdminRoutes;
