//react-navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//components
import Login from '../pages/Login';

export default function AuthRoutes() {
  const AuthStack = createNativeStackNavigator();

  return (
      <AuthStack.Navigator>
        <AuthStack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      </AuthStack.Navigator>
  );
}

