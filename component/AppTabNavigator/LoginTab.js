import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { createStackNavigator } from '@react-navigation/stack';

import SignUpTab from './SignUpTab';

const Stack = createStackNavigator();

export default function LoginTab() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignInTab} />
      <Stack.Screen name="SignUp" component={SignUpTab} />
    </Stack.Navigator>
  );
}

class SignInTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onSignUpPress = () => {
    // this.setState({
    //   this.props.navigation.navigate("SignUp");
    // });
  };

  render() {
    return (
      <View style={style.container}>
        <View style={style.header}></View>

        <View style={style.title}>
          <Text style={style.LoginTitle}>Sign In</Text>
        </View>

        <View style={style.content}>
          <View style={style.loginView}>
            <View style={style.loginBoxView}>
              <TextInput
                style={style.LoginBox}
                underlineColorAndroid="transparent"
                placeholder="Email or Username"
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
            </View>
          </View>

          <View style={style.LoginButtonView}>
            <TouchableOpacity style={style.LoginButton}>
              <Text style={style.LoginButtonText}>Login</Text>
            </TouchableOpacity>
            <View style={style.LoginFuncView}>
              <TouchableOpacity
                style={style.LoginFuncButton}
                onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.LoginFuncButton}>
                <Text>Forget Password</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.SNSLoginView}>
            <Text>Social Login</Text>
            <View style={style.SNSLoginButtonView}>
              <TouchableOpacity>
                <FontAwesome
                  style={style.SNSLoginIcon}
                  name="google-plus-square"
                  size={50}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome
                  style={style.SNSLoginIcon}
                  name="facebook-square"
                  size={50}
                />
              </TouchableOpacity>
            </View>
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

  LoginFuncView: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },

  LoginFuncButton: {
    margin: 15,
    color: '#24252a',
  },

  //#endregion

  //#region SNS Login

  //#endregion
  SNSLoginView: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  SNSLoginButtonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  SNSLoginIcon: {
    margin: 15,
  },

  //#endregion

  footer: {
    width: '100%',
    height: '10%',
    backgroundColor: '#1f3a93',
  },
});
