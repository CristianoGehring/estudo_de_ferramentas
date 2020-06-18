import React from 'react';
import { StatusBar } from 'react-native'
import Routes from './src/routes';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

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

export default function App(props) {
  console.log(props)
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Routes />
      </PaperProvider>
    </>
  )
}