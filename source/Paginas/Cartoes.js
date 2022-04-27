import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Cartoes extends Component {
  render() {
    return (
      <ScrollView>
        <View style={style.containerSobre}>
          <Text style={style.tituloSobre}>Métodos de Pagamento</Text>
          <View style={style.pagamentos}>
            <Text style={style.textoSobre}>1. Pague com PIX</Text>
            <Icon name="money" size={40} color="#000000" />
          </View>
          <View style={style.pagamentos}>
            <Text style={style.textoSobre}>
              2. Pagamento parcelado (Até 6 vezes sem juros)
            </Text>
            <Icon name="cc-mastercard" size={40} color="#000000" />
          </View>
          <View style={style.pagamentos}>
            <Text style={style.textoSobre}>3. Boleto bancário</Text>
            <Icon name="barcode" size={40} color="#000000" />
          </View>
          <View style={style.pagamentos}>
            <Text style={style.textoSobre}>4. PayPal</Text>
            <Icon name="cc-paypal" size={40} color="#000000" />
          </View>
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
    margin: 5,
  },
  textoSobre: {
    fontFamily: 'Barlow',
    fontSize: 15,
    fontWeight: 'normal',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 5,
  },
  pagamentos: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 5
  }
});
