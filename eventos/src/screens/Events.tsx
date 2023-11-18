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
  scrollView: {
    flex: 1,
    marginHorizontal: 20,
  },
  containerGreen: {
    flex: 1,
    flexDirection: 'column',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
    margin: 2
  },
});

export default Events
