import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Sobre extends Component {
  render() {
    return (
      <ScrollView>
        <View style={style.containerSobre}>
          <Text style={style.tituloSobre}>Bem vindos ao BAZZAAR</Text>
            <Image style={style.imagem} source={{ uri: 'https://cdn.pixabay.com/photo/2016/10/13/12/36/uniqlo-1737665_960_720.jpg' }}/>
          <Text style={style.textoSobre}>
            Nossos produtos são inspirados pelas pessoas que estão à nossa
            volta, com suas belezas e suas qualidades. Produtos de bom gosto
            especialmente para você. Descubra our story e aproveite as
            promoções.
          </Text>
          <Text style={style.textoSobre}>
            Rua Eusébio, 10 Centro, Cidade das Águas
          </Text>
          <Text style={style.textoSobre}>
            Aberta de Segunda a Sexta das 10:00 as 21:00
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  containerSobre: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tituloSobre: {
    fontFamily: 'Barlow',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  textoSobre: {
    fontFamily: 'Barlow',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 5,
  },
  imagem: {
    flex: 1,
    width: 340,
    height: 100,
    margin: 10,
  },
});
