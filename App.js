import "react-native-gesture-handler";
import React from "react";

import { Provider } from "react-redux";
import store from "./src/redux/store/index";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LogIn from "./src/components/Login/logIn.jsx";
import RegisterA from "./src/components/RegisterA/RegisterA";
import HomeRoutes from "./src/components/HomeRoutes/HomeRoutes";
import RegisterB from "./src/components/RegisterB/registerB.jsx";
import Success from "./src/components/Success/success";

export default function App() {
  const Stack = createStackNavigator();
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Success"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Log In" component={LogIn} />
        <Stack.Screen name="RegisterA" component={RegisterA} />
        <Stack.Screen name="RegisterB" component={RegisterB} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="HomeRoutes" component={HomeRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}
