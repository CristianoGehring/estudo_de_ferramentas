import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import SocketIOClient from 'socket.io-client';

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
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '90%', marginVertical: 6 }}
        onChangeText={text => setAthor(text)}
        value={author}
      />

      <View style={{ width: '90%', marginVertical: 6}}>
        { allMessages.map(renderMessages) }
      </View>
      
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '90%', marginVertical: 6 }}
        onChangeText={text => setMessage(text)}
        value={message}
      />

      <Button style={{ width: '90%', marginVertical: 6 }} title="Enviar" onPress={ () => { sendMessage() } } />
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