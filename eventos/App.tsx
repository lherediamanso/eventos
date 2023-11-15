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
import Comments from './src/screens/Comments'
import DetailsEvents from './src/screens/DetailsEvents'


export type RootStackPramList = {
  Index: undefined;
  Comments:undefined;
  Details: {product:Product};
  DetailsEvents: {product:Product};

  FormComments: {event:Eventos};
  Eventos: {events:Eventos};


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
          title: "Details"
        }}
        />
        <Stack.Screen
        name="DetailsEvents"
        component={DetailsEvents}
        options={{
          title: "DetailsEvents"
        }}
        />
         <Stack.Screen
        name="Comments"
        component={Comments}
        options={{
          title: "Comments"
        }}
        />
        <Stack.Screen
        name="FormComments"
        component={FormComments}
        options={{
          title: "Comments"
        }}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App