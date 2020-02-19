import React from 'react';
import { StyleSheet, View } from 'react-native';
import Spacer from '../components/Spacer';
import { Text, Input, Button } from 'react-native-elements';


const SignupScreen = ({ navigation }) => {
    return (<View style={styles.container}>
        <Spacer>
            <Text h3>Sign Up for Tracker</Text>
        </Spacer>
        <Input label="Email" />
        <Spacer />
        <Input label="Password" />
        <Spacer>
            <Button title="Sign Up" />
        </Spacer>
    </View>)
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
        // header: null deprecated
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SignupScreen; 