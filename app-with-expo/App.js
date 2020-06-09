import React from 'react';
import { StatusBar } from 'react-native'
import Routes from './src/routes';

export default function App(props) {
  console.log(props)
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes />
    </>
  )
}