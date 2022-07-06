import 'react-native-gesture-handler'
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LogIn from "./components/logIn";
import HomeRoutes from "./components/HomeRoutes/homeRoutes";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Log In" component={LogIn} />
        <Stack.Screen name="HomeRoutes" component={HomeRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
