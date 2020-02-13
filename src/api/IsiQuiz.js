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

class IsiQuiz extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      soal: [],
      answered: false,
      value: null,
      terjawab: 0,
      benar: 0,
      index: 0,
      id_user:0,
      id_sub_materi:0
    };
  }
  async componentDidMount() {
    const idsubmateri = this.props.navigation.state.params.id_sub_materi;
    const id_sub_materi = this.setState({idsubmateri});
    const judulmateri = this.props.navigation.state.params.judul_sub_materi;
    await axios.get(`http://3.82.209.169/api/soal/${idsubmateri}`)
      .then(res => {
        const soal = res.data;
        this.setState({ soal });
      })
  }

  handleEvents(){
    const { soal, value, benar } = this.state;
    const total = soal.length;
    var jumlah = total -1;
    for (var i=0; i < total; i++){
     if (value!=null) {
      if (value==this.state.soal[i].jawaban) {
        this.state.jawaban = "Salah";
        this.state.answered = true;
        this.state.benar = this.state.benar+1;
        this.state.terjawab = this.state.terjawab+1;          
      if (this.state.index<jumlah) {
        this.state.index++;
      }else{
      var benars = this.state.benar;
      var terjawabs = this.state.terjawab;
      var idsubmateris = this.state.id_sub_materi;
      this.props.navigation.navigate('Nilai',{jumlahbenar:benars,jumlahterjawab:terjawabs,idsubmateri:idsubmateris});
      }
     } else if (value!=this.state.soal[i].jawaban) {
        this.state.jawaban = "Salah";
        this.state.answered = true;
        this.state.benar = this.state.benar;
        this.state.terjawab = this.state.terjawab+1;          
      if (this.state.index<jumlah) {
        this.state.index++;
      }else{
      var benars = this.state.benar;
      var terjawabs = this.state.terjawab;
      var idsubmateris = this.state.id_sub_materi;
      this.props.navigation.navigate('Nilai',{jumlahbenar:benars,jumlahterjawab:terjawabs,idsubmateri:idsubmateris});
      }
    }        
    } 
    

     
      let isi = [];
      isi.push(
                <View>
                  <Text style={{
                    fontSize: 14,
                    marginTop: 10,
                    marginLeft: 20,
                  }}
                  key={this.state.soal[this.state.index].soal}
                  >{this.state.soal[this.state.index].soal}</Text>
                  
                  <TouchableOpacity key={this.state.soal[this.state.index].a} onPress={(value) => {this.setState({value:'a'})}}>
                    <Text>{this.state.soal[this.state.index].a}</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity key={this.state.soal[this.state.index].b} onPress={(value) => {this.setState({value:'b'})}}>
                    <Text>{this.state.soal[this.state.index].b}</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity key={this.state.soal[this.state.index].c} onPress={(value) => {this.setState({value:'c'})}}>
                    <Text>{this.state.soal[this.state.index].c}</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity key={this.state.soal[this.state.index].d} onPress={(value) => {this.setState({value:'d'})}}>
                    <Text>{this.state.soal[this.state.index].d}</Text>
                  </TouchableOpacity>
                </View>
        )
         return isi;
       }
    }
    nextQuestion() {
      this.setState({ index: + 1})
    }

    render() {
      const { params } = this.props.navigation.state;
      const benar = this.props.navigation.getParam("benar");
      const terjawab = this.props.navigation.getParam("terjawab");
       return (
        <View style={styles.container} >
          { this.handleEvents() }

         <Text style={styles.text}>{JSON.stringify(benar)}</Text>
           <Text style={styles.text}>{JSON.stringify(terjawab)}</Text>
         <Text style={styles.text}>{this.state.benar}</Text>
           <Text style={styles.text}>{this.state.terjawab}</Text>
         </View>
     );
  }
}
export default withNavigation(IsiQuiz);

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
