import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
import LogIn from "./components/LogIn/logIn";
import RegisterB from "./components/RegisterB/registerB";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Log In">
        <Stack.Screen name="Log In" component={LogIn} />
        <Stack.Screen name="Register B" component={RegisterB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
