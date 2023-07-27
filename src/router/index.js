import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from '../screen/HomeScreen'
const drawer =createDrawerNavigator()
export default function Router(){
    return(
        <NavigationContainer>
            <drawer.Navigator>
                <drawer.Screen name="home" component={HomeScreen}/>
            </drawer.Navigator>

        </NavigationContainer>
    )
}