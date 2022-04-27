import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Banner from '../Components/Banner';
import Detalhes from '../Components/modal';
import Produtos from '../Components/modal';
import Novidades from '../Components/Novidades';
import Promocoes from '../Components/Promocoes';

export default class Home extends Component {
  render() {
    const banner = [
      {
        id: 1,
        imagem:
          'https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg',
      },
      {
        id: 2,
        imagem:
          'https://cdn.pixabay.com/photo/2016/10/13/12/36/uniqlo-1737665_960_720.jpg',
      },
    ];

    const novidades = [
      {
        id: 1,
        nome: 'Moletons',
        imagem:
          'https://img.freepik.com/psd-gratuitas/modelo-de-moletom-com-capuz-juvenil_126278-359.jpg?t=st=1650580380~exp=1650580980~hmac=aab26cf470d8fa7ac856eb07e3eec7bcff6be45cc98559880509a74429d44e82&w=740',
      },
      {
        id: 2,
        nome: 'Vestidos',
        imagem: 'https://images.pexels.com/photos/1394882/pexels-photo-1394882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 3,
        nome: 'Óculos',
        imagem: 'https://images.pexels.com/photos/1068866/pexels-photo-1068866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 4,
        nome: 'Bikinis',
        imagem: 'https://images.pexels.com/photos/54265/bikini-two-piece-swimwear-women-two-parter-54265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
    ];

    const promo =[
      {
        id: 1,
        nome: 'Beleza',
        imagem:
          'https://images.pexels.com/photos/208052/pexels-photo-208052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 2,
        nome: 'Eletrônicos',
        imagem:
          'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 3,
        nome: 'Esportivos',
        imagem:
          'https://images.pexels.com/photos/6974955/pexels-photo-6974955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 4,
        nome: 'Para Casa',
        imagem:
          'https://images.pexels.com/photos/2146109/pexels-photo-2146109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
    ];

    return (
      <ScrollView>
        <View style={{flex: 1}}>
          <FlatList
            data={banner}
            renderItem={({item}) => Banner({item})}
            key={item => item.id}
            horizontal={true}
          />
        </View>

        <View style={style.containerRoupas}>
          <Text style={style.textoRoupas}>NOVIDADES</Text>
          <View style={{flex: 1}}>
            <FlatList
              data={novidades}
              renderItem={({item}) => Novidades({item})}
              key={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>

        <View style={style.containerRoupas}>
          <Text style={style.textoRoupas}>PROMOÇÕES</Text>
          <View style={{flex: 1}}>
            <FlatList
              data={promo}
              renderItem={({item}) => Promocoes({item})}
              key={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>

      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  containerRoupas: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoRoupas: {
    fontFamily: 'Barlow',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },

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
});
