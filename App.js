import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './source/Paginas/Home';
import Categorias from './source/Paginas/Categorias';
import Sobre from './source/Paginas/Sobre';
import Cartoes from './source/Paginas/Cartoes';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <View style={style.background}>
      <View style={style.containerHeader}>
        <View style={style.logoAcesso}>
          <TouchableOpacity style={style.acesso}>
            <Icon name="sign-in" size={20} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={style.acesso}>
            <Icon name="shopping-cart" size={20} color="#000000" />
          </TouchableOpacity>
        </View>
        <Text style={style.textoTitulo}>BAZZAAR</Text>
        <View style={style.logoPesquisa}>
          <TouchableOpacity style={style.pesquisa}>
            <Icon name="search" size={20} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Categorias') {
                iconName = focused ? 'th-list' : 'th-list';
              } else if (route.name === 'Sobre') {
                iconName = focused ? 'building-o' : 'building-o';
              } else if (route.name === 'Cartoes') {
                iconName = focused ? 'credit-card' : 'credit-card';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Categorias" component={Categorias} />
          <Tab.Screen name="Sobre" component={Sobre} />
          <Tab.Screen name="Cartoes" component={Cartoes} />
        </Tab.Navigator>
      </NavigationContainer>
      <View style={style.containerFooter}>
        <Text style={style.textoFooter}>Siga-nos:</Text>
        <View style={style.logoRedes}>
          <TouchableOpacity style={style.redes}>
            <Icon name="twitter" size={20} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={style.redes}>
            <Icon name="facebook-square" size={20} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={style.redes}>
            <Icon name="pinterest-square" size={20} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={style.redes}>
            <Icon name="snapchat-ghost" size={20} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    height: 300,
  },
  containerHeader: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textoTitulo: {
    fontFamily: 'Barlow',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    letterSpacing: 3,
  },
  containerFooter: {
    height: 50,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoFooter: {
    fontFamily: 'Barlow',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#000000',
  },
  logoRedes: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
  },
  redes: {
    margin: 2,
  },
  logoAcesso: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
  },
  acesso: {
    margin: 2,
  },
  logoPesquisa: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    margin: 5,
  },
  pesquisa: {
    margin: 2,
  },
});
