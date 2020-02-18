import React from 'react';
import { View } from 'react-native';
import { MapView } from 'react-native-maps';

export default function GoogleMap() {
  return (
    <View>
      <MapView
        style={{ flex: 1 }}
        provider={'AIzaSyB-bLfmufqobchzYAVWMJVapK6kSp9-dn0'}
      />
    </View>
  );
}
