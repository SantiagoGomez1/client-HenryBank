import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Nav = () => {
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
        <Stack.Screen name="RegisterC" component={RegisterC} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="HomeRoutes" component={HomeRoutes} />
        <Stack.Screen name="Detail User" component={DetailUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
