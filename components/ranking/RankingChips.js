import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Colors from '../../constants/Colors';


const content = [
    { iconName: 'police-badge', iconSize: 23, pointsRequired: 800, text: 'Behind the next level' },
    { iconName: 'medal', iconSize: 25, pointsRequired: 1250, text: 'Behind top contributor' },
    { iconName: 'run-fast', iconSize: 26, pointsRequired: 210, text: 'Behind the next person' },
    { iconName: 'check-all', iconSize: 30, pointsRequired: 250, text: 'Earn with next record' }
];
const RankingChips = props => {
    return (
        <View style={styles.userPoints}>
            {content.map((item, index) => 
                <View style={styles.chip} key={index}>
                    <MaterialCommunityIcons name={item.iconName} size={item.iconSize} color={Colors.primary} style={styles.chipIcon} />
                    <View style={styles.chipInfo}>
                        <Text style={styles.chipPoint}>
                            {item.pointsRequired} <Text style={styles.small}>points</Text>
                        </Text>
                        <Text style={styles.chipText}>{item.text}</Text>
                    </View>
                </View>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    userPoints: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingVertical: 5
    },
    chip: {
        width: '49%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '2%',
        paddingVertical: 5,
        marginVertical: 5,
        backgroundColor: Colors.sectionColor,
        borderColor: Colors.borderColor,
        borderWidth: 1,
        borderRadius: 5
    },
    chipIcon: {
        width: '15%'
    },
    chipInfo: {
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    chipPoint: {
        width: '43%',
        marginRight: '2%',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'right'
    },
    small: {
        fontSize: 12
    },
    chipText: {
        width: '56%',
        fontSize: 12,
        textAlign: 'center'
    }
});


export default RankingChips;