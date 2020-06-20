// import React from 'react'
// import { Image } from 'react-native'
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import logo from './assets/logo.png';

// import Inicial from './pages/Inicial';
// import HelloWorld from './pages/HelloWorld';
// import UploadImagem from './pages/UploadImagem';
// import Calendar from './pages/Calendar';
// import Chat from './pages/Chat';

// const Routes = createAppContainer(
//   createStackNavigator({
//     Inicial,
//     UploadImagem,
//     Calendar,
//     Chat,
//     HelloWorld
//   }, {
//     defaultNavigationOptions: {
//       headerTitleAlign: 'center',
//       headerTitle: () => <Image source={logo} />,
//       headerStyle: {
//         backgroundColor: '#264653'
//       }
//     }
//   })
// );

// export default Routes;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import Inicial from './pages/Inicial';
import HelloWorld from './pages/HelloWorld';
import UploadImagem from './pages/UploadImagem';
import Calendar from './pages/Calendar';
import Chat from './pages/Chat';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Chat: {
    lib: Ionicons,
    name: 'ios-chatbubbles',
  },
  Calendar: {
    lib: AntDesign,
    name: 'calendar',
  },
  UploadImagem: {
    lib: Ionicons,
    name: 'ios-camera',
  },
  HeloWorld: {
    lib: AntDesign,
    name: 'setting',
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {

          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor:'#2a9d8f',
        inactiveTintColor: '#92929c',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Inicial}
        options={{
          title: 'Início',
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          title: 'Chat',
        }}
      />

      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          title: 'Calendário',
        }}
      />
      <Tab.Screen
        name="UploadImagem"
        component={UploadImagem}
        options={{
          title: 'Upload Fotos',
        }}
      />
      <Tab.Screen
        name="HeloWorld"
        component={HelloWorld}
        options={{
          title: 'Helo World',
        }}
      />
    </Tab.Navigator>
  );
}