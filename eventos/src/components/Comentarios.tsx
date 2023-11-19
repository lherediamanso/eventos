import { StyleSheet, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

import { Card, Text } from 'react-native-paper';


type ComentariosProps = PropsWithChildren<{
  comment: Comentario
}>

const Comentarios = ({ comment }: ComentariosProps) => {
  return (
    <Card style={styles.cardStile}>
      <Card.Content>
        <Text variant="titleLarge">{comment.name} - {comment.calificacion} </Text>
        <Text variant="bodyMedium">{comment.comentario}</Text>
      </Card.Content>
    </Card>
  )
}


const styles = StyleSheet.create({
  cardStile: {
    width: '95%',
    padding: 5,
    marginHorizontal:10,
    marginTop:10,
    marginBottom:2
  },
  titulo: {
    fontSize: 16,
    fontWeight: '800',
    paddingTop: 50,
    marginBottom: 4,
    textAlign: 'center'
  },
  name: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center'
  }
});

export default Comentarios
