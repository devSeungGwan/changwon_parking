import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-paper';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      checked: false,
    };
  }

  render() {
    const { checked } = this.state;
    return (
      <View style={style.container}>
        <View style={style.header}></View>

        <View style={style.title}>
          <Text style={style.LoginTitle}>Sign Up</Text>
        </View>

        <View style={style.content}>
          <View style={style.loginView}>
            <View style={style.loginBoxView}>
              <TextInput
                style={style.LoginBox}
                underlineColorAndroid="transparent"
                placeholder="Email"
                placeholderTextColor="#24252a"
                autoCapitalize="none"
                onChangeText={this.email}
              />

              <TextInput
                style={style.LoginBox}
                underlineColorAndroid="transparent"
                placeholder="Username"
                placeholderTextColor="#24252a"
                autoCapitalize="none"
                onChangeText={this.email}
              />

              <TextInput
                style={style.LoginBox}
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderTextColor="#24252a"
                autoCapitalize="none"
                onChangeText={this.password}
              />
              <TextInput
                style={style.LoginBox}
                underlineColorAndroid="transparent"
                placeholder="Repeat Password"
                placeholderTextColor="#24252a"
                autoCapitalize="none"
                onChangeText={this.password}
              />
            </View>
          </View>

          <View style={style.LoginButtonView}>
            <TouchableOpacity style={style.LoginButton}>
              <Text style={style.LoginButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <View Style={style.SignUpAgree}></View>
          </View>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  LoginTitle: {
    fontSize: 50,
  },

  //#region Content

  content: {
    width: '80%',
    flex: 2,
    padding: 10,
  },

  //#region 로그인 박스

  LoginView: {
    // width: '80%',
  },

  loginBoxView: {
    alignItems: 'center',
  },

  LoginBox: {
    borderColor: '#24252a',
    borderWidth: 1,
    borderRadius: 10,
    height: 33,
    width: '100%',
    fontSize: 15,
    margin: 10,
    paddingLeft: 15,
  },

  LoginButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  LoginButton: {
    backgroundColor: '#24252a',
    color: 'white',
    width: '100%',
    fontSize: 15,
    margin: 10,
    borderRadius: 10,
  },

  LoginButtonText: {
    margin: 10,
    color: '#ffffff',
    textAlign: 'center',
  },

  //#endregion

  SignUpAgree: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  SignUpCheckBox: {
    margin: 5,
    flex: 1,
    padding: 10,
  },

  footer: {
    width: '100%',
    height: '10%',
    backgroundColor: '#1f3a93',
  },
});
