import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
    let points = [];
    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            points.push({
                latitude: -34.603681 + i * 0.0005,
                longitude: -58.379222 + i * 0.001
            });
        } else {
            points.push({
                latitude: -34.603681 - i * 0.0002,
                longitude: -58.379222 + i * 0.001
            })
        }
    }
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: -34.603681,
                longitude: -58.379222,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <Polyline coordinates={points} />
        </MapView>)
};

const styles = StyleSheet.create({
    map: {
        height: 300,
        margin: 10
    }
});

export default Map;