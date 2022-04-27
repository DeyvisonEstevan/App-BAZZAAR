import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

const Detalhes = props => {
  const [getModal, setModal] = useState(false);

  const atualizarModal = () => {
    setModal(!getModal);
  };

  return (
    <View>
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center', margin: 3}}
        onPress={atualizarModal}>
        <Icon name="plus" size={20} color="#000000" />
      </TouchableOpacity>

      <Modal isVisible={getModal}>
        <View style={style.containerModal}>
          <Text style={style.tituloModal}>{props.nome2}</Text>
          <Image style={style.imgModal} source={{uri: props.produto2}} />
          <Text style={style.precoModal}>{props.preco2}</Text>
          <ScrollView style={{flex: 1, height: 10, padding: 10}}>
            <Text style={style.descricaoModal}>{props.descricao2}</Text>
          </ScrollView>
          <Text></Text>

          <TouchableOpacity title="Voltar" onPress={atualizarModal}>
            <Icon name="chevron-down" size={20} color="#000000" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

// Criação do componente principal
export default function Produtos({item}) {
  return (
    <View style={style.containerProduto}>
      <View>
        <Image source={{uri: item.produto}} style={style.img} />
      </View>
      <View style={style.tagProdutoFem}>
        <View>
          <Text style={style.textoNome}>{item.nome}</Text>
        </View>
        <View>
          <Text style={style.textoPreco}>{item.preco}</Text>
        </View>
        <View>
          <Detalhes
            nome2={item.nome}
            preco2={item.preco}
            descricao2={item.descricao}
            produto2={item.produto}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  containerProduto: {
    flex: 1,
    width: 165,
    margin: 5,
  },
  img: {
    flex: 1,
    width: 165,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tagProdutoFem: {
    backgroundColor: '#FFC2CD',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textoNome: {
    fontFamily: 'Barlow',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 3,
  },
  textoPreco: {
    fontFamily: 'Barlow',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#000000',
    marginTop: 3,
  },

  containerModal: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  tituloModal: {
    fontFamily: 'Barlow',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    margin: 3,
  },
  imgModal: {
    width: 200,
    height: 300,
  },
  precoModal: {
    fontFamily: 'Barlow',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    margin: 3,
  },
  descricaoModal: {
    fontFamily: 'Barlow',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#000000',
    textAlign: 'justify'
  },
});
