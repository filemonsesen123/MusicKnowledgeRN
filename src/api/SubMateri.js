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

import {withNavigation} from 'react-navigation';

import {ListItem } from 'react-native-elements'

import { Card, Content, Badge, CardItem, Body, Right, Left} from 'native-base';

import axios from 'axios';

class SubMateri extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        submateri: []
    };
  }
  UNSAFE_componentWillMount() {
    const idmateri = this.props.navigation.state.params.id_materi;
    const judulmateri = this.props.navigation.state.params.judul_sub_materi;
    axios.get(`http://3.82.209.169/api/submateri`,{params: {id_materi:idmateri,judul_sub_materi:judulmateri}})
      .then(res => {
        const submateri = res.data;
        console.log(submateri);
        this.setState({ submateri });
      })
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
                <Card style={styles.cardContainer}>
                    <CardItem button onPress={()=>this.props.navigation.navigate('IsiMateri',{id_sub_materi:item.id_sub_materi})}>
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
 export default withNavigation(SubMateri);

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