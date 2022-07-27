import "react-native-gesture-handler";
import React from "react";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

import { Provider } from "react-redux";
import store from "./src/redux/store/index";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StripeProvider } from "@stripe/stripe-react-native";
// const { KEY_PUBLIC_STRIPE } = process.env;

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
import Confirmation from "./src/components/Confirmation/Confirmation";
import InvestorBuyGeneral from "./src/components/InvestorBuyGeneral/InvestorBuyGeneral";
import InvestorSell from "./src/components/InvestorSell/InvestorSell";
import InvestorDetail from "./src/components/InvestorDetail/InvestorDetail";
import SuccessBuy from "./src/components/SuccessBuy/SuccessBuy";
import Configs from "./src/components/Configs/Configs";
import Description from "./src/components/Description/Description";
import Help from "./src/components/Help/Help";
import SuccessSell from "./src/components/SuccessSell/SuccessSell";
import AdminRoutes from "./src/components/AdminRoutes/AdminRoutes";
import AdminUserDetail from "./src/components/AdminUserDetail/AdminUserDetail";
import ForgotPasswordA from "./src/components/ForgotPasswordA/ForgotPasswordA";
import ForgotPasswordB from "./src/components/ForgotPasswordB/ForgotPasswordB";
import ForgotPasswordConfirm from "./src/components/ForgotPasswordConfirm/ForgotPasswordConfirm";
import NewCreditCard from "./src/components/NewCreditCard/NewCreditCard";
import AdminMovements from "./src/components/AdminMovements/AdminMovements";
import AdminConfirmation from "./src/components/AdminConfirmation/AdminConfirmation";
import SuccessIngresar from "./src/components/SuccessIngresar/SuccessIngresar";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <StripeProvider
      publishableKey="pk_test_51LLqmtH8Bu4sbaZfApMWp5L2CIdiRgngXX5gNt6Kkk4PXMTfTr8k8dpGErzxGOr5LpLNG97omPRLZxUthHKz59jW00I72zp6zd"
      merchantIdentifier="merchant.identifier"
    >
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
            <Stack.Screen
              name="SuccessOperacion"
              component={SuccessOperacion}
            />
            <Stack.Screen
              name="SuccessPlazoFijo"
              component={SuccessPlazoFijo}
            />
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
            <Stack.Screen name="SuccessBuy" component={SuccessBuy} />
            <Stack.Screen name="SuccessSell" component={SuccessSell} />
            <Stack.Screen name="Configs" component={Configs} />
            <Stack.Screen name="Description" component={Description} />
            <Stack.Screen name="Help" component={Help} />
            <Stack.Screen name="Admin Routes" component={AdminRoutes} />
            <Stack.Screen name="AdminUserDetail" component={AdminUserDetail} />
            <Stack.Screen name="ForgotPasswordA" component={ForgotPasswordA} />
            <Stack.Screen name="ForgotPasswordB" component={ForgotPasswordB} />
            <Stack.Screen
              name="ForgotPasswordConfirm"
              component={ForgotPasswordConfirm}
            />
            <Stack.Screen name="NewCreditCard" component={NewCreditCard} />
            <Stack.Screen name="AdminMovements" component={AdminMovements} />
            <Stack.Screen
              name="AdminConfirmation"
              component={AdminConfirmation}
            />
            <Stack.Screen name="SuccessIngresar" component={SuccessIngresar} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </StripeProvider>
  );
}
