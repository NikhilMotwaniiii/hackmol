import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AmbScreen from './src/mainScreens/AmbScreen';
// import RootNavigator from './src/navFiles/RootNavigator';
// import RootNavigator from './src/mainScreens/Login';
import RootNavigator from './src/mainScreens/Signup';


export default function App() {
  return (
   <RootNavigator></RootNavigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
