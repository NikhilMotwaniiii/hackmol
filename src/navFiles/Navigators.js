import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AmbScreen from '../mainScreens/AmbScreen';
import EmerScreen from '../mainScreens/EmerScreen';

const Home = createNativeStackNavigator();
export function HomeStack(){
    return (
        <Home.Navigator>
            <Home.Screen  name="AmbScreen" component={AmbScreen} options={{headerShown:false}}/>
            <Home.Screen  name="EmerScreen" component={EmerScreen} options={{headerShown:false}}/>
        </Home.Navigator>
    )
}