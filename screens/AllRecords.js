import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from './MainScreen';
import RecordsList from '../components/records/RecordsList';


const AllRecords = props => {
    return (
        <MainScreen 
            navigator={props.navigation} 
            screenTitle="All Records"
            screenIcon="logo-buffer"
        >
            <View style={styles.container}>
                <RecordsList screenName='allRecords' numberOfRecords='all'/>
            </View>
        </MainScreen>
    )
};


const styles = StyleSheet.create({
    container: {
        marginTop: 5
    },
});


export default AllRecords;