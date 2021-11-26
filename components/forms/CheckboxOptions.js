import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';


const CheckboxOptions = props => {
    return (
        <View style={styles.pickerBox}>
            { 
                props.list.map((type, index)=>{
                    return(
                        <TouchableOpacity 
                            style={styles.checkboxContainer}
                            key={index}
                            onPress={() => props.onCheckPress(type)}
                        >
                            {
                                props.stateList.find(item=> item === type)
                                    ? <Ionicons name="checkbox-outline" size={24} color="black" />
                                    : <Ionicons name="square-outline" size={24} color="black" />
                            }
                            <Text style={styles.checkboxLabel}>{type}</Text>
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
    checkboxContainer: {
        flexDirection: 'row',
        marginVertical: 3
    },
    checkboxLabel: {
        fontSize: 15,
        marginLeft: 10,
        marginTop: 2,
        color: Colors.bodyText
    }
});


export default CheckboxOptions;