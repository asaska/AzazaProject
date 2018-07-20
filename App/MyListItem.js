import React from "react";
import {Text, TouchableOpacity, View} from 'react-native';

export default class MyListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  _onPress = () => {
    this.setState({selected: !this.state.selected});
  };

  render() {
    let item = this.props.data;
    const textColor = this.state.selected ? (
      <View>
        <Text>{item.userId}</Text>
        <Text>{item.body}</Text>
      </View>
    ) : <View/>;

    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text>{'user ' + item.id}</Text>
          {textColor}
        </View>
      </TouchableOpacity>
    );
  }
}