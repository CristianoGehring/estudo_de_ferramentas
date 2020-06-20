import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

export default function Example({ navigation }) {
  const { tema } = useTheme();

  const buttons = [
    {
      title: 'Upload Imagem',
      route: 'UploadImagem',
      icone: 'camera'
    },
    {
      title: 'Calendário',
      route: 'Calendar',
    },
    {
      title: 'Hello Word',
      route: 'HelloWorld',
      style: 'text'
    },
  ]

  var renderButton = (button, i) => {
    return (
      <View style={styles.buttons} key={i}>
        <Button icon={button.icone}  mode={button.style ? button.style : 'contained'} onPress={ () => navigation.navigate(`${button.route}`) } >{button.title}</Button>
      </View>
    )
  };

  return (
    <View style={styles.box}>
      {/* <Image
        style={styles.tinyLogo}
        source={require('../../assets/logo.png')}
      /> */}
        <View style={styles.container}>
          { buttons.map(renderButton) }
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: '#264653',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    width: '90%',
    marginVertical: 6
  },
  tinyLogo: {
    marginTop: 24,
    width: 120,
    height: 32,
  },
});