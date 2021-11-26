import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';


const RankFloating = () => {
    return (
        <View style={[styles.rankingInfo, styles.shadow]}>
            <View style={styles.pointsInfo}>
                <Ionicons name="trophy" size={25} color={Colors.primary} />
                <Text style={styles.points}>250 Points</Text>
            </View>

            <View style={styles.ranking}>
                <Ionicons name="stats-chart" size={25} color={Colors.primary} />
                <Text style={styles.positions}>
                    My Rank <Text style={styles.currentPosition}>5</Text> / 40
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5
    },
    rankingInfo: {
        position: 'absolute',
        right: 0,
        top: 0,
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: Colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 5
    },
    pointsInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    points: {
        width: 50,
        fontSize: 15,
        marginLeft: 12
    },
    ranking: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    positions: {
        width: 65,
        fontSize: 15,
        marginLeft: 12
    },
    currentPosition: {
        fontSize: 16,
        fontWeight: '700'
    },
});


export default RankFloating;