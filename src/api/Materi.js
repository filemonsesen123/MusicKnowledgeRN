import React, {Component} from 'react';
import {

StyleSheet,

Text,

Image,

ImageBackground,

View,

TextInput,

TouchableOpacity,

FlatList,

Button

} from 'react-native';

import {ListItem } from 'react-native-elements';

import { Card, Content, Badge, CardItem, Body, Right, Left} from 'native-base';

import axios from 'axios';

import {withNavigation} from 'react-navigation';

class Materi extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        materi: []
    };
  }
  UNSAFE_componentWillMount() {
    axios.get(`http://3.82.209.169/api/materi`)
      .then(res => {
        const materi = res.data;
        console.log(materi);
        this.setState({ materi });
      })
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
                <Card style={styles.cardContainer}>
                    <CardItem button onPress={()=>this.props.navigation.navigate('SubMateri',{id_materi:item.id_materi})}>
                        <Left><Text style={styles.textTitle}>{item.judul_materi}</Text></Left>
                        <Right><Image style={{top: 48}} source={{uri: item.gambar_materi}} /></Right>
                    </CardItem>
                </Card>
)
  render() {
    return (
        <View style={styles.container} >
            <FlatList
               keyExtractor={this.keyExtractor}
               data={this.state.materi}
               renderItem={this.renderItem}
             />
       </View>
      );
  }
}
 export default withNavigation(Materi);

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