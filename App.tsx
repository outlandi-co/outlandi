import ImageEditorScreen from './screens/ImageEditorScreen';

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
        <Tab.Screen name="ImageEditor" component={ImageEditorScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
