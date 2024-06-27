import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './app/screens/HomeScreen';
import FileUploadScreen from './app/screens/FileUploadScreen';
import ImageUploadScreen from './app/screens/ImageLoaddScreen';
import CameraOverlayScreen from './app/screens/CameraOverlay';
import CameraCaptureScreen from './app/screens/CameraCaptureScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="FileUpload" component={FileUploadScreen} />
        <Tab.Screen name="ImageUpload" component={ImageUploadScreen} />
        <Tab.Screen name="CameraOverlay" component={CameraOverlayScreen} />
        <Tab.Screen name="CameraCapture" component={CameraCaptureScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
