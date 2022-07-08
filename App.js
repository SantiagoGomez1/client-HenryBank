import "react-native-gesture-handler";
import React from "react";

import { Provider } from "react-redux";
import store from "./src/redux/store/index";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LogIn from "./src/components/Login/LogIn.jsx";
import HomeRoutes from "./src/components/HomeRoutes/HomeRoutes";
import RegisterA from "./src/components/RegisterA/RegisterA";
import RegisterB from "./src/components/RegisterB/RegisterB.jsx";
import RegisterC from "./src/components/RegisterC/RegisterC";
import Success from "./src/components/Success/Success";
import DetailUser from "./src/components/DetailUser/detailUser";
import InvestorBuy from "./src/components/InvestorBuy/InvestorBuy";
import DetailCoinsInvestorBuy from "./src/components/DetailCoinsInvestorBuy/DetailCoinsInvestorBuy";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
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
          <Stack.Screen name="InvestorBuy" component={InvestorBuy} />
          <Stack.Screen
            name="DetailCoinsInvestorBuy"
            component={DetailCoinsInvestorBuy}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
