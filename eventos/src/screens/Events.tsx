import { FlatList, Pressable, StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Button, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, PropsWithChildren } from 'react'

//React navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackPramList } from "../../App"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Separator from '../components/Separator'
import Eventos from '../components/Eventos'


import { EVENTOS_LIST } from '../data/contants'



const Events = ({ route, navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <View >

          <View style={styles.containerBlue}>
            <View style={styles.cajaPorcentaje}><Text>1</Text></View>
            <View style={styles.cajaPorcentaje}><Image
              style={styles.img}
              source={require('../../assets/icon.png')}
            /></View>
          </View >
          <View style={styles.containerGreen}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
            >
              <FlatList
                data={EVENTOS_LIST}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={Separator}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => {
                      navigation.navigate('DetailsEvents', {
                        event: item
                      })
                    }}
                  >
                    <Eventos event={item} />

                  </Pressable>
                )}
              />
            </ScrollView>

          </View>


        </View>

        <View>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 16,
    marginBottom: 4
  },

  box: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
    margin: 2
  },
  containerBlue: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'blue'
  },
  containerGreen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'green'
  },
  cajaPorcentaje: {
    width: '50%',
    height: '35%',
    margin: 2,
    backgroundColor: 'gray',
  },
  caja: {
    flex: 1,

    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  img: {
    width: '100%',
    height: '100%',
  },
  card: {

    paddingHorizontal: 8,
    justifyContent: 'center',
    backgroundColor: '#8D3DAF',
    alignItems: 'center',
    width: 300,
    height: 300,
    borderRadius: 10,
    margin: 8,
    marginTop: 10
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#8D3DAF',
    padding: 8,
    borderRadius: 10
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF'
  },
  userStatus: {
    fontSize: 12
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 30,
    marginTop: 14,
    margin: 8

  },
});

export default Events
