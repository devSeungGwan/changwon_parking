import React, { Component } from 'react';

import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class SearchTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevPos: null,
      curPos: { latitude: 37.420814, longitude: -122.081949 },
      curAng: 45,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      search: '',
    };
    this.changePosition = this.changePosition.bind(this);
    this.getRotation = this.getRotation.bind(this);
    this.updateMap = this.updateMap.bind(this);
  }

  changePosition(latOffset, lonOffset) {
    const latitude = this.state.curPos.latitude + latOffset;
    const longitude = this.state.curPos.longitude + lonOffset;
    this.setState({
      prevPos: this.state.curPos,
      curPos: { latitude, longitude },
    });
    this.updateMap();
  }

  getRotation(prevPos, curPos) {
    if (!prevPos) {
      return 0;
    }
    const xDiff = curPos.latitude - prevPos.latitude;
    const yDiff = curPos.longitude - prevPos.longitude;
    return (Math.atan2(yDiff, xDiff) * 180.0) / Math.PI;
  }

  updateMap() {
    const { curPos, prevPos, curAng } = this.state;
    const curRot = this.getRotation(prevPos, curPos);
    this.map.animateCamera({ heading: curRot, center: curPos, pitch: curAng });
  }

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <View style={styles.flex}>
        <SearchBar
          placeholder="주차장 주소를 입력하세요."
          onChangeText={this.updateSearch}
          value={search}
          platform="ios"
        />
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.flex}
          minZoomLevel={15}
          initialRegion={{
            ...this.state.curPos,
            latitudeDelta: this.state.latitudeDelta,
            longitudeDelta: this.state.longitudeDelta,
          }}>
          {/* <MapView.Marker
            coordinate={this.state.curPos}
            anchor={{ x: 0.5, y: 0.5 }}
          /> */}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    width: '100%',
  },
  SearchBar: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgba(100,100,100,0.2)',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 50,
    width: 50,
  },
  up: {
    alignSelf: 'flex-start',
  },
  down: {
    alignSelf: 'flex-end',
  },
  left: {
    alignSelf: 'flex-start',
  },
  right: {
    alignSelf: 'flex-end',
  },
});
