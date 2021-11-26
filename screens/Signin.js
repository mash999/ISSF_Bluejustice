import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainScreen from './MainScreen';


const Signin = props => {
    return (
        <MainScreen navigator={props.navigation}>
            <View>
                <Text>Hello from Signin</Text>
            </View>
        </MainScreen>
    )
};


const styles = StyleSheet.create({
});


export default Signin;