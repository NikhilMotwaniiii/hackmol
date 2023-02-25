import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from './MenuNavigator';

export default function RootNavigator(){
    return(
        <NavigationContainer>
            <DrawerNavigator></DrawerNavigator>
        </NavigationContainer>
    )
}