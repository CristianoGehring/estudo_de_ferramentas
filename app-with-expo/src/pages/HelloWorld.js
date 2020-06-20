import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HelloWorld({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Button title="Inicial" onPress={ () => navigation.navigate('Inicial') } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});