import React, { Component } from 'react';

import {

StyleSheet,

Text,

View,

TextInput,

TouchableOpacity

} from 'react-native';

import {withNavigation} from 'react-navigation';

import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';

import RNRestart from 'react-native-restart';

class Form extends React.Component {


  constructor(props) {
    super(props);
    this.state={
    email: '',
    password: '',
  }
  this.login = this.login.bind(this);
}

login(event) {
    const user = this.state;
    axios.post(`http://3.82.209.169/api/login`,  user )
      .then(res => {
              if (res.data.data) {
        let obj ={
          name: res.data.data.name,
          email: res.data.data.email,
          id: res.data.data.id,
          password: this.state.password,
          IsLogin : true
        }
        AsyncStorage.setItem('data',JSON.stringify(obj));          
        RNRestart.Restart();
        } else {alert("Login Failed!");}
})    }

render(){

return(

<View style={styles.container}>

<TextInput style={styles.inputBox}


placeholder="Email"

keyboardType="email-address"

onChangeText={(email) => this.setState({email})}
/>

<TextInput style={styles.inputBox}

placeholder="Password"

secureTextEntry={true}

onChangeText={(password) => this.setState({password})}
/>

<TouchableOpacity style={styles.button} onPress={this.login}>

<Text style={styles.buttonText}>{this.props.type}</Text>

</TouchableOpacity>

</View>

)

}
}
 export default withNavigation(Form);



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

marginVertical: 10,

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
