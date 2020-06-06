import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Example({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Hello World" onPress={ () => navigation.navigate('HelloWorld') } />
      <Button title="Acesso a Câmera" onPress={ () => navigation.navigate('CameraAccess') } />
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
});