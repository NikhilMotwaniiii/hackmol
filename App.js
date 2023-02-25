import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AmbScreen from './src/mainScreens/AmbScreen';
import RootNavigator from './src/navFiles/RootNavigator';

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
