import "react-native-gesture-handler";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LogIn from "./components/Login/logIn";
import homeRoutes from "./components/HomeRoutes/homeRoutes";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Log In" component={LogIn} />
        <Stack.Screen name="Home" component={homeRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
