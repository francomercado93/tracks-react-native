import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {

    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (<View style={styles.container}>
        <NavigationEvents onWillBlur={clearErrorMessage} />
        <AuthForm
            headerText="Sign Up for Tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={signup}
        />
        {/* onSubmit={({ email, password }) => onSubmit(email, password)} /> */}
        <NavLink
            routeName="Signin"
            text="Already have an account? Sign in instead"
        />
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
    }

});

export default SignupScreen; 