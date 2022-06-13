//react-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

//components
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Write from './src/pages/Write';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor={"#1fa3b8"} style="light" />
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen name="Write" options={{ headerShown: false }} component={Write} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

