import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default class ProfileTab extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.header}></View>
        <View style={style.title}>
          <Text style={style.loginTitle}>로그인</Text>
        </View>
        <View style={style.content}>
          <Button color="#03a678" title="네" />
          <Button color="#f7ca18" title="카" />
          <Button color="#1f3a93" title="페" />
          <Button color="#1e824c" title="구" />
        </View>
        <View style={style.footer}></View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    fontFamily: 'NanumGothic',
  },
  header: {
    width: '100%',
    height: '9%',
  },
  title: {
    width: '100%',
    height: '18%',
    backgroundColor: '#e4f1fe',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    flex: 2,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  footer: {
    width: '100%',
    height: '10%',
    backgroundColor: '#1f3a93',
  },
  loginTitle: {
    fontSize: 50,
  },
  loginButton: {
    margin: 10,
    fontSize: 18,
  },
});
