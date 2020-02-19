import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Spacer from '../components/Spacer';
import { Text, Input, Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {

    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(state);

    return (<View style={styles.container}>
        <Spacer>
            <Text h3>Sign Up for Tracker</Text>
        </Spacer>
        <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
        />
        <Spacer />
        <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
        />
        {state.errorMessage ?
            (<Text style={styles.errorMessage}>{state.errorMessage}</Text>)
            : null}
        <Spacer>
            <Button
                title="Sign Up"
                onPress={() => signup({ email, password })} />
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
        marginBottom: 200,
        marginHorizontal: 15
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        alignSelf: 'center',
        marginTop: 15
    }
});

export default SignupScreen; 