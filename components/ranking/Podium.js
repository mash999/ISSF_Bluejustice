import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../constants/Colors';


const getPodiumHeight = index => {
    switch(index){
        case 0: return 90;
        case 1: return 110;
        case 2: return 70;
    }
};


const getSerial = index => {
    switch(index){
        case 0: return 2;
        case 1: return 1;
        case 2: return 3;
    }
};


const Podium = props => {
    return (
        <View style={styles.podium}>
            { props.data.map((barContent, index)=> 
                <View style={[
                        styles.bar, 
                        index === 1 ? styles.middlePodium : null,
                        {height: getPodiumHeight(index)}
                    ]}
                    key={index}
                >
                    <View style={styles.barImageContainer}>
                        <Image source={barContent.image} style={styles.barImage} />
                    </View>

                    <Text style={styles.serial}>{getSerial(index)}</Text>
                    <Text style={styles.points}>{barContent.points}</Text>
                    <FontAwesome5 name="medal" size={20} color={barContent.medalColor} />
                </View>
            )}
        </View>
    );
};


const styles = StyleSheet.create({
    podium:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
        borderBottomWidth: 10,
        borderBottomColor: Colors.podiumBar
    },
    bar: {
        position: 'relative',
        width: '33.333%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.podium,
        borderTopWidth: 5,
        borderTopColor: Colors.podiumBar,
        
        shadowColor: '#000',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 10
    },
    middlePodium: {
        backgroundColor: Colors.middlePodium
    },
    barImageContainer:{
        position: 'absolute',
        top: -50,
        width: 40,
        height: 40,
        overflow: 'hidden'
    },
    barImage:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20
    },
    serial: {
        fontSize: 12,
        fontWeight: '700',
        borderRadius: 25,
        color: Colors.primary,
        textAlign: 'center',
        paddingVertical: 3,
        paddingHorizontal: 8,
        backgroundColor: '#fff',
        marginBottom: 8
    },
    points: {
        width: '200%',
        fontSize: 13,
        fontWeight: '700',
        position: 'absolute',
        bottom: -35,
        textAlign: 'center'
    }
});


export default Podium;