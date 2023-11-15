import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//React navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackPramList} from "../../App"


// data
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "./Home"
import Events from './Events'

type IndexProps = NativeStackScreenProps<RootStackPramList, "Index">
const Tab = createMaterialTopTabNavigator();


  
const Index = ({navigation}: IndexProps) => {
  return (
    <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarItemStyle: { width: 100 },
          tabBarStyle: { backgroundColor: 'powderblue' },
        }}
      >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="eventos" component={Events} />


      </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});

export default Index
