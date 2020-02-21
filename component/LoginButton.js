import { StyleSheet, View, Button, Image } from 'react-native';
import React, { Component } from 'react';

export default class LoginButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ height: '100%', width: '100%' }}
          source={{ uri: '../image/naver_CI.png' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    padding: 10,
    backgroundColor: 'black',
  },
});
