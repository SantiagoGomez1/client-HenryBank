import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
import LogIn from "./components/logIn";
import RegisterA from './components/Register - A'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Log In" component={LogIn} />
        <Stack.Screen name="RegisterA" component={RegisterA} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
