import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';

import React, {Component} from 'react';

import { StyleSheet, SafeAreaView, StatusBar, ScrollView, Dimensions, Image, TouchableHightlight } from 'react-native';

import { Text, Button } from 'native-base';

import Home from './pages/Home';

import Profile from './pages/Profile';

import SubMateri from './pages/PageSubMateri';

import IsiMateri from './pages/PageIsiMateri';

import IndexQuiz from './pages/Quiz';

import SubQuiz from './pages/PageSubQuiz';

import IsiQuiz from './pages/PageIsiQuiz';

import Nilai from './pages/PageNilai';

import Logout from './components/Logout';

const Routes = createStackNavigator(
  {
  Home: Home,
  Profile: Profile,
  SubMateri: SubMateri,
  IsiMateri: IsiMateri,
  Quiz: IndexQuiz,
  SubQuiz: SubQuiz,
  IsiQuiz: IsiQuiz,
  Nilai: Nilai,
	  },
{
      header: null,
    headerMode:'none',
    initialRouteName: 'Home',
  }
);
export default createAppContainer(Routes);