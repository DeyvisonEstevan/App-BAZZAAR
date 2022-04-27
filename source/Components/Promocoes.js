import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Promocoes({item}) {
  return (
    <View style={style.containerPromocoes}>
      <Image source={{uri: item.imagem}} style={style.imagePromocoes} />
      <Text style={style.textoPromocoes}>{item.nome}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  containerPromocoes: {
    flex: 1,
    width: 165,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagePromocoes: {
    width: 165,
    height: 165,
    borderRadius: 82.5,
  },
  textoPromocoes: {
    fontFamily: 'Barlow',
    fontSize: 15,
    fontWeight: 'normal',
    color: '#000000',
  },
});