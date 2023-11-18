import { ScrollView, StyleSheet, Text, View, Image, Pressable, Button, FlatList } from 'react-native'
import React, { useState, useEffect, PropsWithChildren } from 'react'

// react navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native";

import { RootStackPramList } from "../../App"
import Events from '../components/Eventos';
import Separator from '../components/Separator'
import Comentarios from '../components/Comentarios';

type DetailsEventProps = NativeStackScreenProps<RootStackPramList, "DetailsEvents">
const i=0
const DetailsEvents = ({ route, navigation }) => {
  
  const { event } = route.params

  const [comentario, setcomentario] = useState(

    
    event
  
  )
  
  useEffect(() => {

    if(route.params?.event.comentarios[0])
    
    {
      comentario.comentarios.push(route.params?.event.comentarios[0])

    }
}, [route.params?.event]);

  return (
    <View>
      <View>
        <Image
          source={{ uri: comentario.imageUrl }}
          style={styles.imagen}
        />
      </View>
      <View>
        <Text style={styles.titulo}>{comentario.name}</Text>
        <Text style={styles.textos}>{comentario.fecha}</Text>
        <Text style={styles.textos}>{comentario.lugar}</Text>

        <Text style={styles.textos}>{comentario.descripcion}</Text>

        <Text style={styles.textos}>{comentario.comentario}</Text>

      </View>

      <View >        
          <FlatList
            data={comentario.comentarios}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Comentarios comment={item} />
            )}
          />
      </View>

      <Pressable
        style={styles.btnIrComentarios}
        onPress={() => {
          navigation.navigate('FormComments', { event: event })
        }}
      >
        <Text style={styles.textBtn}>Adicionar Comentario</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  imagen: {
    width: '60%',
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 20
  },
  titulo: {
    fontSize: 16,
    fontWeight: '800',
    paddingTop: 10,
    marginBottom: 4,
    textAlign: 'center'
  },
  textos: {
    fontSize: 12,
    fontWeight: '500',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    textAlign: 'left'
  },
  btnIrComentarios: {
    width: '50%',
    padding: 5,
    borderRadius: 8,
    marginTop:10,
    marginHorizontal: 8,
    backgroundColor: '#065CC6',
    alignSelf: 'center'
  },
  textBtn: {
    color: '#ffffff',
    textAlign: 'center',
  }
});


export default DetailsEvents
