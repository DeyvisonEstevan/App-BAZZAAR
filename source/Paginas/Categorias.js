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

export default class Categorias extends Component {
    render(){
        
          const fem = [
            {
              id: 1,
              produto:
                'https://cdn.pixabay.com/photo/2020/01/25/11/05/woman-4792222_960_720.jpg',
              nome: 'BLUSA VERMELHA',
              descricao:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sem pellentesque, accumsan lacus vel, consectetur est. Vestibulum ante metus, finibus in pulvinar sed, semper et erat. Quisque pellentesque enim ex, in vehicula ex laoreet ac. Maecenas eget dolor lorem. Vivamus vel convallis tellus.',
              preco: 'R$ 85,00',
            },
            {
              id: 2,
              produto:
                'https://cdn.pixabay.com/photo/2020/05/18/10/24/skirt-5185571_960_720.jpg',
              nome: 'SAIA COURO',
              descricao:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sem pellentesque, accumsan lacus vel, consectetur est. Vestibulum ante metus, finibus in pulvinar sed, semper et erat. Quisque pellentesque enim ex, in vehicula ex laoreet ac. Maecenas eget dolor lorem. Vivamus vel convallis tellus.',
              preco: 'R$ 60,00',
            },
            {
              id: 3,
              produto:
                'https://cdn.pixabay.com/photo/2020/05/18/10/24/pants-5185567_960_720.jpg',
              nome: 'CALÇA JARDINEIRA',
              descricao:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sem pellentesque, accumsan lacus vel, consectetur est. Vestibulum ante metus, finibus in pulvinar sed, semper et erat. Quisque pellentesque enim ex, in vehicula ex laoreet ac. Maecenas eget dolor lorem. Vivamus vel convallis tellus.',
              preco: 'R$ 150,00',
            },
            {
              id: 4,
              produto:
                'https://cdn.pixabay.com/photo/2017/09/17/15/42/model-2758787_960_720.jpg',
              nome: 'VESTIDO',
              descricao:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sem pellentesque, accumsan lacus vel, consectetur est. Vestibulum ante metus, finibus in pulvinar sed, semper et erat. Quisque pellentesque enim ex, in vehicula ex laoreet ac. Maecenas eget dolor lorem. Vivamus vel convallis tellus.',
              preco: 'R$ 130,00',
            },
          ];
        
          const masc = [
            {
              id: 1,
              produto:
                'https://cdn.pixabay.com/photo/2018/10/11/17/27/male-3740357_960_720.jpg',
              nome: 'BLUSA LISTRADA',
              descricao:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sem pellentesque, accumsan lacus vel, consectetur est. Vestibulum ante metus, finibus in pulvinar sed, semper et erat. Quisque pellentesque enim ex, in vehicula ex laoreet ac. Maecenas eget dolor lorem. Vivamus vel convallis tellus.',
              preco: 'R$ 90,00',
            },
            {
              id: 2,
              produto:
                'https://cdn.pixabay.com/photo/2018/10/11/17/26/male-3740352_960_720.jpg',
              nome: 'CALÇA JEANS',
              descricao:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sem pellentesque, accumsan lacus vel, consectetur est. Vestibulum ante metus, finibus in pulvinar sed, semper et erat. Quisque pellentesque enim ex, in vehicula ex laoreet ac. Maecenas eget dolor lorem. Vivamus vel convallis tellus.',
              preco: 'R$ 120,00',
            },
            {
              id: 3,
              produto:
                'https://cdn.pixabay.com/photo/2018/10/11/17/27/male-3740356_960_720.jpg',
              nome: 'BLUSA DE MALHA',
              descricao:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sem pellentesque, accumsan lacus vel, consectetur est. Vestibulum ante metus, finibus in pulvinar sed, semper et erat. Quisque pellentesque enim ex, in vehicula ex laoreet ac. Maecenas eget dolor lorem. Vivamus vel convallis tellus.',
              preco: 'R$ 60,00',
            },
            {
              id: 4,
              produto:
                'https://cdn.pixabay.com/photo/2018/10/10/14/24/shirt-3737407_960_720.jpg',
              nome: 'BLAZER CINZA',
              descricao:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sem pellentesque, accumsan lacus vel, consectetur est. Vestibulum ante metus, finibus in pulvinar sed, semper et erat. Quisque pellentesque enim ex, in vehicula ex laoreet ac. Maecenas eget dolor lorem. Vivamus vel convallis tellus.',
              preco: 'R$ 230,00',
            },
          ];
        
          return (
            <ScrollView>

                <View style={style.containerRoupas}>
                  <Text style={style.textoRoupas}>FEMININO</Text>
                  <View style={{flex: 1}}>
                    <FlatList
                      data={fem}
                      renderItem={({item}) => Produtos({item})}
                      key={item => item.id}
                      horizontal={true}
                    />
                  </View>
                </View>
        
                <View style={style.containerRoupas}>
                  <Text style={style.textoRoupas}>MASCULINO</Text>
                  <View style={{flex: 1}}>
                    <FlatList
                      data={masc}
                      renderItem={({item}) => Produtos({item})}
                      key={item => item.id}
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