import React from 'react';
import { Text, StyleSheet } from 'react-native';


const TrackDetailScreen = ({navigation}) => {
    const _id = navigation.getParam('_id');
    return <Text style={{ fontSize: 48 }}>TrackDetailScreen</Text>
}

const styles = StyleSheet.create({
});

export default TrackDetailScreen;