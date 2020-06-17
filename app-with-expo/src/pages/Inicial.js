import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Example({ navigation }) {
  const buttons = [
    {
      title: 'Hello Word',
      route: 'HelloWorld'
    },
    {
      title: 'Upload Imagem',
      route: 'UploadImagem'
    },
    {
      title: 'Calendário',
      route: 'Calendar'
    }
  ]

  var renderButton = (button, i) => {
    return (
      <View style={styles.buttons} key={i}>
        <Button title={button.title} onPress={ () => navigation.navigate(`${button.route}`) } />
      </View>
    )
  };

  return (
    <View style={styles.container}>
      { buttons.map(renderButton) }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    width: '90%',
    marginVertical: 6
  }
});