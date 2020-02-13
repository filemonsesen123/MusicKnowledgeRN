import React, {Component} from 'react';
import {

StyleSheet,

Text,

View,

TextInput,

TouchableOpacity,

FlatList,

ScrollView,

Image

} from 'react-native';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 
import {withNavigation} from 'react-navigation';

import { List, Content, Thumbnail, Body, Right, Left, Separator} from 'native-base';

import {ListItem } from 'react-native-elements'

import axios from 'axios';

import DropDownItem from 'react-native-drop-down-item';

class Nilai extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      terjawab: 0,
      benar: 0,
      nilai : 0,
      idsubmateri: 0,
      iduser:0,
    };
  }
  async componentDidMount() {
            const benars = this.props.navigation.state.params.jumlahbenar;
            const terjawabs = this.props.navigation.state.params.jumlahterjawab;
            const idsubmateris = this.props.navigation.state.params.idsubmateri;
            this.setState({idsubmateri:idsubmateris});
            this.setState({ benar: benars});
            this.setState({ terjawab: terjawabs});
            const hitung = benars/terjawabs*100;
            this.setState({ nilai: hitung});
  }

    nextQuestion= () => {
      this.props.navigation.navigate('Home');      
    }
    tryAgain= () => {
      this.props.navigation.navigate('IsiQuiz',{id_sub_materi:this.state.idsubmateri});      
    }

    render() {
       return (
        <View style={styles.container} >
                 <Text style={styles.text}>Test</Text>
                  <Text style={{
                    fontSize: 14,
                    marginTop: 10,
                    marginLeft: 20,
                  }}>{this.state.nilai}</Text>            
         <Text style={styles.text}>{this.state.benar}</Text>
         <Text style={styles.text}>{this.state.terjawab}</Text>
                  <TouchableOpacity onPress={this.nextQuestion}>
                    <Text>Next</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.tryAgain}>
                    <Text>Try Again</Text>
                  </TouchableOpacity>
         </View>
     );
  }
}
export default withNavigation(Nilai);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F49423",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#000",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between"
  }
});
