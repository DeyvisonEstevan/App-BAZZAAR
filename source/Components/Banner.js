import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function Banner({item}) {
  
  return (
    <View style={style.containerBanner}>
      <Image style={style.imagem} source={{ uri: item.imagem }} />
    </View>
  );
}

const style = StyleSheet.create({
  containerBanner: {
    flex: 1,
  },
  imagem: {
    flex: 1,
    width: 340,
    height: 100,
    margin: 10,
  },
});
