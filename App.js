import React, {Component} from 'react';
import {Button} from 'react-native';
import firebase from 'react-native-firebase';

class App extends Component {
  loginButtonPressed = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword('test@test.com', '111111')
      .then(() => {
        alert('success');
      })
      .catch(error => {
        alert(`Error:\n ${error.message}`);
      });
  };

  render() {
    return <Button title={'Login'} onPress={this.loginButtonPressed} />;
  }
}

export default App;
