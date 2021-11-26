import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';


const MyRank = () => {
    return (
        <View style={styles.rankingInfo}>
            <View>
                <Text style={styles.statusTitle}>My Status</Text>
            </View>

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
    rankingInfo: {
        width: '98%',
        height: 50,
        backgroundColor: Colors.sectionColor,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: '1%',
        paddingHorizontal: 10,
        borderRadius: 5
    },
    statusTitle: {
        width: 80,
        fontSize: 17,
        fontWeight: '700',
        textAlign: 'center',
        color: Colors.title
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


export default MyRank;