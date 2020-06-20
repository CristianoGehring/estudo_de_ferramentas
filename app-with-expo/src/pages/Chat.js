import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import SocketIOClient from 'socket.io-client';
import { Button } from 'react-native-paper';

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
      <Text key={i}>{message.author}: {message.message}</Text>
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
        <TextInput
          style={{ height: 40, borderColor: 'rgba(255, 255, 255, .4)', borderWidth: 1, width: '90%', marginVertical: 6, paddingHorizontal: 8, color: 'white', borderRadius: 6 }}
          onChangeText={text => setAthor(text)}
          value={author}
        />
  
        <Text style={{ width: '90%', marginVertical: 6, color: 'white',}}>
          { allMessages.map(renderMessages) }
        </Text>
      </ScrollView>
      
      <View style={{width:'100%', flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
        <TextInput
          style={{ height: 40, borderColor: 'rgba(255, 255, 255, .4)', borderWidth: 1, width: '70%', marginVertical: 6, marginRight: 4, paddingHorizontal: 8, color: 'white', borderRadius: 6 }}
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