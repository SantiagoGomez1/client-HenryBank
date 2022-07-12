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
import SuccessOperacion from "./src/components/SuccessOperacion/SucessOperacion";
import SuccessPlazoFijo from "./src/components/SucessPlazoFijo/SuccessPlazoFijo";
import UserDetail from "./src/components/UserDetail/UserDetail";
import DetailCoinsInvestorBuy from "./src/components/DetailCoinsInvestorBuy/DetailCoinsInvestorBuy";
import InvestorBuy from "./src/components/InvestorBuy/InvestorBuy";
import Confirmation from "./src/components/SuccessLogIn/SuccessLogIn";
import InvestorBuyGeneral from "./src/components/InvestorBuyGeneral/InvestorBuyGeneral";
import InvestorSell from "./src/components/InvestorSell/InvestorSell";
import InvestorDetail from "./src/components/InvestorDetail/InvestorDetail";

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
          <Stack.Screen name="Confirmation" component={Confirmation} />
          <Stack.Screen name="RegisterA" component={RegisterA} />
          <Stack.Screen name="RegisterB" component={RegisterB} />
          <Stack.Screen name="RegisterC" component={RegisterC} />
          <Stack.Screen name="Success" component={Success} />
          <Stack.Screen name="SuccessOperacion" component={SuccessOperacion} />
          <Stack.Screen name="SuccessPlazoFijo" component={SuccessPlazoFijo} />
          <Stack.Screen name="HomeRoutes" component={HomeRoutes} />
          <Stack.Screen name="User Detail" component={UserDetail} />
          <Stack.Screen name="InvestorBuy" component={InvestorBuy} />
          <Stack.Screen
            name="DetailCoinsInvestorBuy"
            component={DetailCoinsInvestorBuy}
          />
          <Stack.Screen
            name="InvestorBuyGeneral"
            component={InvestorBuyGeneral}
          />
          <Stack.Screen name="InvestorSell" component={InvestorSell} />
          <Stack.Screen name="InvestorDetail" component={InvestorDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
