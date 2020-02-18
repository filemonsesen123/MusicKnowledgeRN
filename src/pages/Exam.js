import React, {Component} from 'react';
import IsiExam from '../api/IsiExam';
import {

StyleSheet,

Text,

View,

TextInput,

TouchableOpacity,

ScrollView,

Image 

} from 'react-native';

import { Container, Button } from 'native-base';

import {withNavigation} from 'react-navigation';

import AsyncStorage from '@react-native-community/async-storage';

class Exam extends React.Component {

    render() {
    return (
      <Container>

      <IsiExam />

      </Container>
    );
  }
}
const styles = StyleSheet.create({
  hiName: {
    color: '#FFF',
    marginTop: 30,
  },
  hiDesc: {
    color: '#FFF',
  }
})
 export default withNavigation(Exam);
