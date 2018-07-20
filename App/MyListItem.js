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
      <View style={{flex: 1, justifyContent: 'center', marginBottom: 3}}>
        <Text style={{color: 'red'}}
        >{'Пользователь №: ' + item.userId}</Text>
        <Text>{'Сообщение: \n' + item.body}</Text>
      </View>
    ) : <View/>;

    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text>{'Сообщение №: ' + item.id}</Text>
          {textColor}
        </View>
      </TouchableOpacity>
    );
  }
}