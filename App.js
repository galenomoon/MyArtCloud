//react-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//styles
import { StyleSheet } from 'react-native';
import { FaUser, FaHome, FaPenAlt } from 'react-icons/fa';

//firebase
import app from './src/firebaseConection';
import { getDatabase } from 'firebase/database';

//components
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Write from './src/pages/Write';


export default function App() {
  const Tab = createBottomTabNavigator();
  const styles = StyleSheet.create({
    label: {
      fontSize: 13,
      color: '#000'
    } 
  })
  
  const tabConfig = {
    "login": {
      headerShown: false,
      tabBarIcon: () => <FaUser size={30} />,
      tabBarLabel: "Entrar",
      tabBarLabelStyle: styles.label
    },
    "home": {
      tabBarIcon: () => <FaHome size={30} />,
      headerShown: false,
      tabBarLabel: "Meus Textos",
      tabBarLabelStyle: styles.label
    },
    "write": {
      tabBarIcon: () => <FaPenAlt size={30}  />,
      headerShown: false,
      tabBarLabel: "Escrever",
      tabBarLabelStyle: styles.label
    }
  }

  return (
     <NavigationContainer>
       <Tab.Navigator>
         <Tab.Screen name="Login" options={tabConfig.login} component={Login} />
         <Tab.Screen name="Home" options={tabConfig.home} component={Home} />
         <Tab.Screen name="Write" options={tabConfig.write} component={Write} />
       </Tab.Navigator>
     </NavigationContainer>
  );
}

