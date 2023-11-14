import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Navigation
import { NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

// screens
import Home from './src/screens/Home'
import FormComments from './src/screens/FormComments'
import Details from './src/screens/Details'
import Index from './src/screens/index'


export type RootStackPramList = {
  Index: undefined;

  Details: {product:Product};
  //FormComments: {texto:string};

}

const Stack = createNativeStackNavigator<RootStackPramList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index'>
        <Stack.Screen
        name="Index"
        component={Index}
        options={{
          title: "Home"
        }}
        />
        
        <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: "Detalle de evento"
        }}
        />
        <Stack.Screen
        name="FormComments"
        component={FormComments}
        options={{
          title: "Adicionar Comentario"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App