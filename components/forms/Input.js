import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Colors from '../../constants/Colors';


const Input = props => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.style}} />
    );
}


const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: Colors.borderColor,
        borderBottomWidth: 1,
        marginVertical: 10
    }
});


export default Input;