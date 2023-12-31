import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Navigation
import { NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

// screens
import Home from './src/screens/Home'
import FormComments from './src/screens/FormComments'
import Index from './src/screens/index'
import Comments from './src/screens/Comments'
import DetailsEvents from './src/screens/DetailsEvents'
import Events from './src/screens/Events'


export type RootStackPramList = {
  Index: undefined;
  Comments:undefined;
  Details: {event:Eventos};
  DetailsEvents: {event:Eventos};
  FormComments: {event:Eventos};
  Eventos: {event:Eventos};
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
        name="DetailsEvents"
        component={DetailsEvents}
        options={{
          title: "Detalle evento"
        }}
        />
         <Stack.Screen
        name="Comments"
        component={Comments}
        options={{
          title: "Comentarios"
        }}
        />
        <Stack.Screen
        name="FormComments"
        component={FormComments}
        options={{
          title: "Adicionar comentarios"
        }}
        />
      <Stack.Screen
        name="Eventos"
        component={Events}
        options={{
          title: "Eventos"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App