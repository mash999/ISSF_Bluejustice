import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from './MainScreen';
import RecordsList from '../components/records/RecordsList';


const MyRecords = props => {
    return (
        <MainScreen 
            navigator={props.navigation} 
            screenTitle="My Records"
            screenIcon="list"
        >
            <View style={styles.container}>
                <RecordsList screenName='myRecords' numberOfRecords='all'/>
            </View>
        </MainScreen>
    )
};


const styles = StyleSheet.create({
    container: {
        marginTop: 5
    },
});


export default MyRecords;