import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MyListItem from './App/MyListItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fListData: [],
    }
  }

  testApi() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({fListData: json}));
  }

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      data={item}
    />
  );

  render() {
    this.testApi();
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.fListData}
          renderItem={this._renderItem}
        />
      </View>
    );
  }

  /*render() {
    this.testApi();
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.fListData}
          renderItem={({item}) =>
            (
              <View>
            <Text>{'user '+item.userId}</Text>
            <Text>{item.id}</Text>
            <Text>{item.body}</Text>
              </View>
            )
          }
        />
      </View>
    );
  }*/
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
});
