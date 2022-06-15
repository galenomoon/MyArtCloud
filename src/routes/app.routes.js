//react-navigation
import { createDrawerNavigator } from '@react-navigation/drawer';

//components
import DrawerContent from '../components/DrawerContent';

//pages
import Home from '../pages/Home';
import Write from '../pages/Write';

export default function AppRoutes() {
  const AppDrawer = createDrawerNavigator();

  return (
    <AppDrawer.Navigator
      initialRouteName="Home"
      drawerContent={DrawerContent}
    >
      <AppDrawer.Screen name="Home" options={{ headerShown: false }} component={Home} />
      <AppDrawer.Screen name="Write" options={{ headerShown: false }} component={Write} />
    </AppDrawer.Navigator>
  );
}

