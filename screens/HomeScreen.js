import React, { Component } from 'react';
import { Button, StyleSheet, Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeTab from '../component/AppTabNavigator/HomeTab';
import SearchTab from '../component/AppTabNavigator/SearchTab';
import LoginTab from '../component/AppTabNavigator/LoginTab';

import { MaterialCommunityIcons } from 'react-native-vector-icons';

// const AppTabNavigator = createMaterialTopTabNavigator();

const AppTabNavigator = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <AppTabNavigator.Navigator
      tabBarOptions={{
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: 'bottom',
        iconStyle: { height: 100 },
        activeTintColor: '#000',
        inactiveTinColor: '#d1cece',
        upperCaseLabel: true,
        showLabel: true,
        showIcon: true,
      }}>
      <AppTabNavigator.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <AppTabNavigator.Screen
        name="SearchTab"
        component={SearchTab}
        options={{
          tabBarLabel: '주차장 검색',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="car" color={color} size={size} />
          ),
        }}
      />
      <AppTabNavigator.Screen
        name="ProfileTab"
        component={LoginTab}
        options={{
          tabBarLabel: '로그인',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="login-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </AppTabNavigator.Navigator>
  );
}
