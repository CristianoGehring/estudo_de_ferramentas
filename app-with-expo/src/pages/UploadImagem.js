import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';

export default function UploadImagem({ navigation }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });

    if (!result.cancelled) {
      setImage(result.uri);
      saveImage(result)
    }
  };

  const takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });

    if (!result.cancelled) {
      setImage(result.uri);
      saveImage(result)
    }
  };

  const saveImage = async (result) => {
    getImage()
    let filename = result.uri.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`

    return await fetch('http://192.168.0.153:3000/upload-image', {
      method: 'POST',
      body: JSON.stringify({
        type,
        filename,
        imgsource: result.base64,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    });
  }

  const getImage = (result) => {
    fetch('http://192.168.0.153:3000/upload-image', {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      },
    })
    .then((response) => {
      console.log(response.data)
    })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={pickImage} mode='contained' style={{width:'90%', marginVertical: 6}}>"Escolha uma imagem do rolo da câmera</Button>
      <Button onPress={takePicture} mode='contained' style={{width:'90%', marginVertical: 6}}>Utilize a câmera</Button>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}