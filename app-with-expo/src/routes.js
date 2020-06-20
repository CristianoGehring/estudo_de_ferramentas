import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import logo from './assets/logo.png';

import Inicial from './pages/Inicial';
import HelloWorld from './pages/HelloWorld';
import UploadImagem from './pages/UploadImagem';
import Calendar from './pages/Calendar';
import Chat from './pages/Chat';

const Routes = createAppContainer(
  createStackNavigator({
    Inicial,
    UploadImagem,
    Calendar,
    Chat,
    HelloWorld
  }, {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerTitle: () => <Image source={logo} />,
      headerStyle: {
        backgroundColor: '#264653'
      }
    }
  })
);

export default Routes;