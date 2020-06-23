import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SocketIOClient from 'socket.io-client';
import { Button } from 'react-native-paper';
import { Input } from '../style/style';

var socket = SocketIOClient('https://estudo-ferramentas.herokuapp.com/');

export default function Chat({ navigation }) {
  const [author, setAthor] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  useEffect(() => {
    socket.on('previousMessages', function(messagesObject) {
      console.log('previousMessages', messagesObject)
      setMessages([messagesObject, ...messages])
    })
  }, [])

  socket.on('receivedMessage', (messageObject) => {
    console.log('receivedMessage', messageObject)
    setMessages([...messages, messageObject])
    setMessage('')
  })

  const sendMessage = () => {
    if (author.trim().length && message.trim().length) {
        let messageObject = {
            author,
            message
        }

        setMessages([...messages, messageObject])

        socket.emit('sendMessage', messageObject)

        setMessage('')
    }
  }

  function renderMessages (message, i) {
    return (
      <Text style={{ color: 'white'}} key={i}>{message.author}: {message.message}</Text>
    )
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