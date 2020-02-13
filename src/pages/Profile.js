import React, {Component} from 'react';

import {

StyleSheet,

Text,

View,

TextInput,

TouchableOpacity,

Image 
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { Container, Button } from 'native-base';

export default class Profile extends Component{
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        email: '',
        password: '',
        id: '',
    };
  }
UNSAFE_componentWillMount() {
      this.getData();
  }
    getData = async () => {
      const test = await AsyncStorage.getItem('data');
      const parsed = JSON.parse(test);
      const name = String(parsed.name);
      const email = String(parsed.email);
      const id = parsed.id;
      this.setState({name: name,email:email,id:id});
      }
  
    render() {
    return (
      <Container>
      <View style={{backgroundColor: '#F49423', height: 200}}>
        <View style={{top: 30, left: 30}}>
          <Button transparent onPress={() => this.props.navigation.openDrawer()}>
            <Image source={require('../icons/menu.png')} />
          </Button>
          <Text style={styles.hiName}>Hi {this.state.name}!</Text>
          <Text style={styles.hiName}>Hi {this.state.email}!</Text>
          <Text style={styles.hiName}>Hi {this.state.id}!</Text>
        </View>
      </View>

      </Container>

    );
  }
}

const styles = StyleSheet.create({

container : {

flexGrow: 1,

justifyContent:'center',

alignItems: 'center'

},



inputBox: {

width:300,

backgroundColor:'#F7F7F7',

borderRadius: 4,

paddingHorizontal:16,

fontSize:15,

lineHeight:19,

color:'#000000',

marginVertical: 10

},

button: {

width:200,

backgroundColor:'#f8a33b',

borderRadius: 4,

marginVertical: 10,

paddingVertical: 13,

},

buttonText: {

fontSize: 14,

lineHeight: 19,

color:'#ffffff',

textAlign:'center'

}



});
