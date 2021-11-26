import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from './MainScreen';
import RecordsList from '../components/records/RecordsList';


const Favorite = props => {
    return (
        <MainScreen 
            navigator={props.navigation} 
            screenTitle="Your Favorites"
            screenIcon="heart"
        >
            <View style={styles.container}>
                <RecordsList screenName='favorite' numberOfRecords='all'/>
            </View>
        </MainScreen>
    )
};


const styles = StyleSheet.create({
    container: {
        marginTop: 5
    },
});


export default Favorite;