import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

import Button from '../components/Button'
import MainScreen from './MainScreen';
import RecentAlerts from '../components/recents/RecentAlerts';
import RecentlyRead from '../components/recents/RecentlyRead';
import RankingChips from '../components/ranking/RankingChips';
import RankingByPoints from '../components/ranking/RankingByPoints';


const Home = props => {
    return (
        <MainScreen 
            navigator={props.navigation} 
            screenTitle="Home"
            screenIcon="home"
            shouldRankFloat={true}
        >
            <View style={styles.alertSection}>
                <RecentAlerts navigator={props.navigation} />
            </View>
            
            <View style={styles.alertSection}>
                <RecentlyRead />
            </View>

            <View>
                <Text style={styles.rankingTitle}>Top contributors</Text>
                <RankingChips />
                <RankingByPoints rows={5} />
                <Button onPress={() => props.navigation.navigate('ranking')}> View Leadership Board </Button>
            </View>
        </MainScreen>
    )
};


const styles = StyleSheet.create({
    rankingTitle: {
        fontSize: 19,
        fontWeight: '700',
        color: Colors.title,
        marginTop: 20,
        marginBottom: 5
    },
    alertSection: {
        marginTop: 15
    }
});


export default Home;