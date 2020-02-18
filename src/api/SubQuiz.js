import React, {Component} from 'react';
import {

StyleSheet,

Text,

View,

TextInput,

TouchableOpacity,

FlatList,

Image,

ImageBackground

} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {withNavigation} from 'react-navigation';

import {ListItem } from 'react-native-elements'

import { Card, Content, Badge, CardItem, Body, Right, Left} from 'native-base';

import axios from 'axios';

class SubQuiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        submateri: [],
        id_user: 0,
    };
  }
    getData = async () => {
      const test = await AsyncStorage.getItem('data');
      const parsed = JSON.parse(test);
      const id = parsed.id;
      this.setState({id_user:id});
      }
  UNSAFE_componentWillMount() {
      this.getData();
      axios.get(`http://3.82.209.169/api/submateri`,{params: {id_materi:3}})
      .then(res => {
        const submateri = res.data;
        console.log(submateri);
        this.setState({ submateri });
      })
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
                <Card style={styles.cardContainer}>
                    <CardItem button onPress={()=>this.props.navigation.navigate('IsiQuiz',{id_sub_materi:item.id_sub_materi,id_user:this.state.id_user})}>
                        <Left><Text style={styles.textTitle}>{item.judul_sub_materi}</Text></Left>
                        <Right><Image source={{uri: item.gambar_sub_materi}} style={{top: 48}}/></Right>
                    </CardItem>
                </Card>
)
  render() {
    return (
        <View style={styles.container} >
            <FlatList
               keyExtractor={this.keyExtractor}
               data={this.state.submateri}
               renderItem={this.renderItem}
             />
       </View>
    );
  }
}
 export default withNavigation(SubQuiz);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
       flex: 1,
  },
   cardContainer: {
        borderRadius: 8,
        height: 186,
        marginBottom: 15,
        marginTop: 15,
    },
    textTitle: {
        top: 25,
        left: 25,
    }
});