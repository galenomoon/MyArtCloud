import React from 'react'

//navigation
import { NavigationContainer } from '@react-navigation/native';

//routes
import Routes from './src/routes'

//styles
import { StatusBar } from 'expo-status-bar';

//context
import AuthProvider from './src/contexts/auth'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar animated={true} backgroundColor={"#1fa3b8"} style="light" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}