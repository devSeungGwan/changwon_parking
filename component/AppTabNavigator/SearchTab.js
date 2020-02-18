import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { render } from 'react-dom';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const GoogleKey = 'AIzaSyB-bLfmufqobchzYAVWMJVapK6kSp9-dn0';

export default class SearchTab extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <View>
        <View>
          <SearchBar
            style={{ flex: 1 }}
            placeholder="주차장 주소를 입력하세요."
            onChangeText={this.updateSearch}
            value={search}
            platform="ios"
          />
        </View>
        <View>
          <MapView provider={PROVIDER_GOOGLE} />
        </View>
      </View>
    );
  }
}
