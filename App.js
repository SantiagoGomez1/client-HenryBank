import "react-native-gesture-handler";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LogIn from "./components/Login/logIn.jsx";
import RegisterA from "./components/RegisterA/RegisterA";
import HomeRoutes from "./components/HomeRoutes/homeRoutes";
import RegisterB from "./components/RegisterB/registerB.jsx";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Log In"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Log In" component={LogIn} />
        <Stack.Screen name="RegisterA" component={RegisterA} />
        <Stack.Screen name="RegisterB" component={RegisterB} />
        <Stack.Screen name="HomeRoutes" component={HomeRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
