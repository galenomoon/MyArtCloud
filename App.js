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

  const tabConfig = {
    "login": {
      headerShown: false
    },
    "home": {
      headerShown: false
    },
    "write": {
      headerTitle: "",
      headerStyle: {
        height: 40
      }
    }
  }

  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor={"#1fa3b8"} style="light" />
      <Stack.Navigator>
        <Stack.Screen name="Login" options={tabConfig.login} component={Login} />
        <Stack.Screen name="Home" options={tabConfig.home} component={Home} />
        <Stack.Screen name="Write" options={tabConfig.write} component={Write} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

