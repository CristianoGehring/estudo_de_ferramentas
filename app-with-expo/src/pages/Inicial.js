import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

export default function Example({ navigation }) {
  async function navegar() {
    navigation.navigate('HelloWorld');
  }    

  const { colors } = useTheme();
  var teste = false;

  return (
    <View style={styles.container}>
      <Button style={styles.button} icon="camera" mode="contained" onPress={ () => navigation.navigate('UploadImagem') } >Upload Imagem</Button>
      <Button style={styles.button} mode="outlined" color={teste ? colors.primary : colors.accent} compact={false} onPress={ () => navigation.navigate('HelloWorld') } >Hello World</Button>
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
  button: {
    width: '90%',
    marginVertical: 6,
  }
});