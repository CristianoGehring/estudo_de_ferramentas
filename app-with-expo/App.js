import React from 'react';
import { StatusBar } from 'react-native'
import Routes from './src/routes';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2a9d8f',
    accent: '#e76f51',
    background: '#264653'
  },
};
const MyTheme = {
  dark: true,
  colors: {
    primary: '#2a9d8f',
    background: '#264653',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
  },
};

export default function App(props) {
  console.log(props)
  return (
    <>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={MyTheme}>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
          <Routes />
        </NavigationContainer>  
      </PaperProvider>
    </>
  )
}