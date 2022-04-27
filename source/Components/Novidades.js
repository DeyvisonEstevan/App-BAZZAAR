import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Novidades({item}) {
  return (
    <View style={style.containerNovidades}>
      <Image source={{uri: item.imagem}} style={style.imageNovidades} />
      <Text style={style.textoNovidades}>{item.nome}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  containerNovidades: {
    flex: 1,
    width: 165,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageNovidades: {
    width: 165,
    height: 165,
    borderRadius: 82.5,
  },
  textoNovidades: {
    fontFamily: 'Barlow',
    fontSize: 15,
    fontWeight: 'normal',
    color: '#000000',
  },
});
