import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import MainScreen from './MainScreen';
import Podium from '../components/ranking/Podium';
import MyRank from '../components/ranking/MyRank';
import RankingChips from '../components/ranking/RankingChips';
import RankingByPoints from '../components/ranking/RankingByPoints';


const getPodiumData = () => {
    const podiumData = [
        { image: require('../assets/img/users/ruhul.png'), points: 1225, medalColor: Colors.silver },
        { image: require('../assets/img/users/ruhul.png'), points: 2052, medalColor: Colors.gold },
        { image: require('../assets/img/users/ruhul.png'), points: 925, medalColor: Colors.bronze }
    ];
    return podiumData;
};


const Ranking = props => {
    return (
        <MainScreen 
            navigator={props.navigation} 
            screenTitle="Leadership board and Ranking"
            screenIcon="trophy"
        >
            <View style={styles.podium}>
                <Podium data={getPodiumData()} />
            </View>

            <View style={styles.myRank}>
                <MyRank />
            </View>
        
            <View>
                <View style={styles.rankingChips}>
                    <RankingChips />
                </View>

                <Text style={styles.rankingTitle}>Top contributors</Text>
                <RankingByPoints />
            </View>
        </MainScreen>
    )
};


const styles = StyleSheet.create({
    screenTitleContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    screenTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.title,
        marginTop: -4,
        marginLeft: 10
    },
    podium: {
        marginTop: 60
    },
    myRank: {
        marginTop: 50
    },
    rankingChips: {
        marginBottom: 10,
    },
    rankingTitle: {
        fontSize: 19,
        fontWeight: '700',
        color: Colors.title,
        marginBottom: 8
    }
});


export default Ranking;