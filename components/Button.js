import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';


const Button = props => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={{...styles.button, ...props.buttonStyle}}>
                <Text style={{...styles.btnText, ...props.textStyle}}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginVertical: 10,
        borderRadius: 5
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    }
});


export default Button;