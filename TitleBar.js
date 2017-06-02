import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';

var { width, height } = Dimensions.get('window');
var global = require('./global.js');

export default class TitleBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.titleBarContainer}>
        <CustomModal ref="modal"/>
        <View style={styles.titleBarTextContainer}>
          <Text style={styles.title}>微信</Text>
        </View>
        <View style={styles.titleBarButtonContainer}>
          <TouchableOpacity activeOpacity={0.5} onPress={this.handleSearchClick}>
            <Image
              source={require('./images/ic_search.png')}
              style={styles.titleBarImg}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Image
              source={require('./images/ic_add.png')}
              style={styles.titleBarImg}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  handleSearchClick = () => {
    this.refs.modal.openModal();
  }

}

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    }
  }
  render() {
    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}}>
        <View style={modalStyle.container}>
          <View style={modalStyle.content}>
            <Text>Hello World! This is a Modal!</Text>
            <Button
              style={{marginTop: 20}}
              title={"Close"}
              onPress={() => {this.setState({modalVisible: false})}} />
          </View>
        </View>
      </Modal>
    );
  }
  closeModel = () => {
    this.setState({modalVisible: false});
  }
  openModal() {
    this.setState({modalVisible: true});
  }
}

const modalStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    width: width - 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#FFFFFF',
    height: 100,
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  }
});

const styles = StyleSheet.create({
  titleBarContainer: {
    flexDirection: 'row',
    width: width,
    height: 50,
    backgroundColor: global.titleBackgroundColor
  },
  titleBarTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleBarButtonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleBarImg: {
    width: 25,
    height: 25,
    marginLeft: 15,
    marginRight: 15,
  }
});
