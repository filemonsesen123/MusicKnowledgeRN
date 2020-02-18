import { createAppContainer } from 'react-navigation';

import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';

import React, {useState} from 'react';

import { StyleSheet, SafeAreaView, StatusBar, ScrollView, Dimensions, Image, TouchableHightlight } from 'react-native';

import { Text, Button } from 'native-base';

import Home from './pages/Home';

import Routes from './Routes';

import Profile from './pages/Profile';

import Quiz from './pages/Quiz';

import IndexExam from './pages/IndexExam';

import Logout from './components/Logout';

import AsyncStorage from '@react-native-community/async-storage';

      function GetData(){
         const [name, setName] = useState('');
         const [email, setEmail] = useState('');
         { getProfile() }
      return (
        <Text>{ name }{"\n"}{"\n"}{ email }</Text>
        );
      async function getProfile(){
      const test = await AsyncStorage.getItem('data');
      const parsed = JSON.parse(test);
      const datanama = parsed.name;
      const dataemail = parsed.email;
      setName(datanama);      
      setEmail(dataemail);      
      }
    }
      
const DrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1, backgroundColor: '#F8A23B'}}>
    <StatusBar backgroundColor="#F49423" barStyle="light-content"/> 
    <ScrollView>
    <Button style={{marginTop:15, marginLeft:15}} transparent onPress={() => props.navigation.closeDrawer()}>
      <Image source={require('./icons/back-icon.png')} />
    </Button>
    <Text style={style.data}>
    { GetData() }
    </Text>
    <Button style={{marginTop:15, marginLeft:15}} transparent onPress={() => props.navigation.navigate('Profile')}>
      <Text>Edit</Text>
    </Button>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const Drawer = createDrawerNavigator(
  {
  Home: Home,
  Quiz: Quiz,
  Exam: IndexExam,
  Logout: Logout,
  Routes: { screen: Routes,
    navigationOptions: {
          drawerLabel: () => null //hide header if not needed so whole screen slide  

    },
},
	  },
  {
    contentComponent: DrawerComponent,
  },
);
const style = StyleSheet.create({
  data:{
    marginLeft:15,
    marginTop:10,
  }
})
export default createAppContainer(Drawer);