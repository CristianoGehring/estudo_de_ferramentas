import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SocketIOClient from 'socket.io-client';
import { Button } from 'react-native-paper';
import { Input } from '../style/style';

var socket = SocketIOClient('https://estudo-ferramentas.herokuapp.com/');
var allMessages = []

socket.on('previousMessages', function(messages) {
  allMessages = messages
})

export default function Chat({ navigation }) {
  const [author, setAthor] = React.useState('');
  const [message, setMessage] = React.useState('');
  // const [messages, setMessages] = React.useState(previousMessages);

  function renderMessages (message, i) {
    return (
      <Text style={{ color: 'white'}} key={i}>{message.author}: {message.message}</Text>
    )
  }

  socket.on('receivedMessage', (message) => {
    console.log('receivedMessage', message)
    allMessages.push(message)
    console.log(allMessages)
    setMessage('')
  })

  const sendMessage = () => {
    if (author.trim().length && message.trim().length) {
        let messageObject = {
            author,
            message
        }

        allMessages.push(messageObject)
        // setMessages(messages)

        socket.emit('sendMessage', messageObject)

        setMessage('')
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{width:'100%',}} contentContainerStyle={{ width: '100%',justifyContent: 'center',alignItems: 'center',}}>
        <Input
          style={{ width: '90%'}}
          onChangeText={text => setAthor(text)}
          value={author}
        />
  
        <View style={{width:'100%', flexDirection: 'column',alignItems: 'center'}}>
          <View style={{ width: '90%', marginVertical: 6}}>
            { allMessages.map(renderMessages) }
          </View>
        </View>
      </ScrollView>
      
      <View style={{width:'100%', flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
        <Input
          style={{width:'70%', marginRight: 8}}
          onChangeText={text => setMessage(text)}
          value={message}
        />
  
        <Button onPress={ () => { sendMessage() } } mode='contained'>Enviar</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});