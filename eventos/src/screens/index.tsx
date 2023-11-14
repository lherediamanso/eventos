import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//React navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackPramList} from "../../App"

import ProductItem from '../components/ProductItem'
import Separator from '../components/Separator'

// data
import { PRODUCTS_LIST } from '../data/contants'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "./Home"
import Comments from './Comments'
import FormComments from './FormComments'

type IndexProps = NativeStackScreenProps<RootStackPramList, "Index">
const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
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
                <Tab.Screen name="Comments" component={FormComments} />

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
