import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';


const RadioOptions = props => {
    return (
        <View style={styles.pickerBox}>
            { 
                props.list.map((item, index)=>{
                    return(
                        <TouchableOpacity 
                            style={styles.radioBoxContainer}
                            key={index}
                            onPress={() => props.onSelect(item)}
                        >
                            {
                                props.currentState === item
                                    ? <Ionicons name="radio-button-on" size={24} color="black" />
                                    : <Ionicons name="radio-button-off" size={24} color="black" />
                            }
                            <Text style={styles.radioOptionLabel}>{item}</Text>
                        </TouchableOpacity>
                    );
                })         
            }
        </View>
    );
}


const styles = StyleSheet.create({
    pickerBox: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: 10,
        marginBottom: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    radioBoxContainer: {
        flexDirection: 'row',
        marginVertical: 3
    },
    radioOptionLabel: {
        fontSize: 15,
        marginLeft: 10,
        marginTop: 2,
        color: Colors.bodyText
    }
});


export default RadioOptions;