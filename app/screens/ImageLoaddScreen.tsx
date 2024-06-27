import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import emailjs from 'emailjs-com';

const ImageUploadScreen = () => {
  const [image, setImage] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.uri;
      const fileType = uri.split('.').pop();
      if (['jpg', 'png', 'psd', 'ai'].includes(fileType)) {
        setImage(uri);
      } else {
        alert('Invalid file type. Please select a jpg, png, psd, or ai file.');
      }
    }
  };

  const sendEmail = async () => {
    if (image) {
      const formData = new FormData();
      formData.append('file', {
        uri: image,
        name: `upload.${image.split('.').pop()}`,
        type: `image/${image.split('.').pop()}`,
      });

      emailjs.send('your_service_id', 'your_template_id', {
        to_email: email,
        message: 'Please find the attached image.',
        attachment: formData,
      }, 'your_user_id').then(response => {
        alert('Email sent successfully!');
      }).catch(error => {
        console.error('Email send error:', error);
        alert('Failed to send email.');
      });
    } else {
      alert('Please select an image first.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Send Email" onPress={sendEmail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});

export default ImageUploadScreen;
