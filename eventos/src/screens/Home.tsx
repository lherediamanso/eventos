import { FlatList, Pressable, StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Button, Touchable, TouchableOpacity } from 'react-native'


import Separator from '../components/Separator'
import Eventos from '../components/Eventos'
import Events from './Events'


// data
import { EVENTOS_LIST } from '../data/contants'


const Home = ({ navigation }) => {


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <View >
          <View style={styles.containerBlue}>
            <View style={styles.cajaPorcentaje}>
              <Text style={styles.textTitle}>Eventos Gastronómicos</Text>
              <Text style={styles.textInfo}>Los mejores eventos!</Text>
              <Pressable
                style={styles.btnIrEventos}
                onPress={() => {
                  navigation.navigate('Eventos', {
                  })
                }}
              >
                <Text style={styles.textBtn}>Ir a Eventos</Text>
              </Pressable>
            </View>
            <View style={styles.cajaPorcentaje}>
              <Image
                style={styles.imgPrincipal}
                source={{ uri: 'https://i.ibb.co/SfTWxkR/plato-especial-miguel.jpg' }}
              />
            </View>
          </View >
          <View>
            <Text style={styles.textTitle}>Próximos Eventos Gastronómicos</Text>
          </View>
          <View style={styles.containerGreen}>
            <ScrollView
              style={styles.boxScroll}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
            >
              <FlatList
                data={EVENTOS_LIST}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={Separator}
                style={styles.boxScroll}
                renderItem={({ item }) => (
                  <Pressable
                    style={styles.boxScroll}
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

        <View style={styles.footer}>
          <Text style={styles.textInfo}>
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
    paddingHorizontal: 0,
    marginBottom: 2
  },
  box: {
    width: 100,
    height: 100,
    margin: 0
  },
  boxScroll: {
    width: '100%',
  },
  containerBlue: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  containerGreen: {
    flex: 1,
    flexDirection: 'column',
  },
  cajaPorcentaje: {
    width: '50%',
    margin: 0
  },
  caja: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 0
  },
  img: {
    width: '100%',
    height: '100%',
  },
  imgPrincipal: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 10
  },
  card: {
    paddingHorizontal: 0,
    justifyContent: 'center',
    backgroundColor: '#8D3DAF',
    alignItems: 'center',
    width: 300,
    height: 300,
    borderRadius: 10,
    margin: 0,
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
    padding: 0,
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
    marginHorizontal: 0,
  },
  text: {
    fontSize: 30,
    marginTop: 14,
    margin: 8

  },
  textTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    paddingTop: 20
  },
  textInfo: {
    fontWeight: '400',
    fontSize: 16,
    padding: 10
  },
  btnIrEventos: {
    width: 120,
    padding: 5,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#065CC6',
  },
  textBtn: {
    color: '#ffffff',
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: 'powderblue'
  }
});

export default Home
