import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Example({ navigation }) {
  async function navegar() {
    navigation.navigate('HelloWorld');
  }    

  return (
    <View style={styles.container}>
      <Button title="Hello World" onPress={ () => navigation.navigate('HelloWorld') } />
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