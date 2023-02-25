import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { OconProvider, DconProvider } from './src/contexts/AllContexts';

import AmbScreen from './src/mainScreens/AmbScreen';
// import RootNavigator from './src/navFiles/RootNavigator';
// import RootNavigator from './src/mainScreens/Login';
import RootNavigator from './src/mainScreens/Signup';


export default function App() {
  return (
    <DconProvider>
    <OconProvider>
      <RootNavigator></RootNavigator>
    </OconProvider>
    </DconProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
