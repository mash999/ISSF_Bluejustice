import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InsertRecord from '../api/InsertRecord';
import { recordFields } from '../constants/AlertFields';
import Colors from '../constants/Colors';
import MainScreen from './MainScreen';
import CheckboxOptions from '../components/forms/CheckboxOptions';
import RadioOptions from '../components/forms/RadioOptions';
import Input from '../components/forms/Input';
import Button from '../components/Button';


const RegisterAlert = props => {
    const { 
        categories,
        ssfImpactTypes, 
        magnitude, 
        ssfEcosystem, 
        ssfType, 
        severity, 
        status, 
    } = recordFields;
    const contributorId = 1;
    const [title, setTitle] =  useState('');
    const [bluejusticeTypes, setBluejusticeTypes] =  useState([]);
    const [ecoTypes, setEcoTypes] =  useState([]);
    const [impactTypes, setImpactTypes] =  useState([]);
    const [selectedSeverity, setSelectedSeverity] =  useState('');
    const [selectedMagnitude, setSelectedMagnitude] =  useState('');
    const [selectedStatus, setSelectedStatus] =  useState('');
    const [country, setCountry] =  useState('');
    const [location, setLocation] =  useState('');
    const [selectedCategories, setSelectedCategories] =  useState([]);
    const [description, setDescription] =  useState('');
    
    
    const onCheckboxPress = (selectedOption, fieldName) => {
        let action = 'include';
        const copy = getStateCopy(fieldName);
        if(copy.indexOf(selectedOption) > -1){
            action = 'exclude';
        }
        setStateCopy(fieldName, copy, action, selectedOption);
    };


    const getStateCopy = stateType => {
        switch(stateType){
            case 'bluejustice': return bluejusticeTypes; 
            case 'ecosystem': return ecoTypes;
            case 'impact': return impactTypes;
            case 'category': return selectedCategories;
        }
    }


    const setStateCopy = (stateType, copy, action, selectedOption) => {
        switch(stateType){
            case 'bluejustice': {
                if(action === 'include') return setBluejusticeTypes(currentTypes => [selectedOption, ...currentTypes]);
                else return setBluejusticeTypes(copy.filter(item => item !== selectedOption));
            }
            case 'ecosystem': {
                if(action === 'include') return setEcoTypes(currentTypes => [selectedOption, ...currentTypes]);
                else return setEcoTypes(copy.filter(item => item !== selectedOption));
            }
            case 'impact': {
                if(action === 'include') return setImpactTypes(currentImpacts => [selectedOption, ...currentImpacts]);
                else return setImpactTypes(copy.filter(item => item !== selectedOption));
            }
            case 'category': {
                if(action === 'include') return setSelectedCategories(currentCategories => [selectedOption, ...currentCategories]);
                else return setSelectedCategories(copy.filter(item => item !== selectedOption));
            }
        }
    }

    
    return(
        <MainScreen 
            navigator={props.navigation} 
            screenTitle="Register a New Alert"
            screenIcon="create"
        >
            <View style={styles.container}>
                <View style={[styles.inputSection, styles.shadow]}>
                    <Text style={styles.label}>Title of the Alert: </Text>
                    <View style={styles.pickerBox}>
                        <Input 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            blurOnSubmit 
                            placeholder="Title of your alert ..."
                            onChangeText={(value) => {setTitle(value)}}
                            style={styles.input} 
                            value={title}
                        />
                    </View>
                </View>

                
                <View style={[styles.inputSection, styles.shadow]}>
                    <Text style={styles.label}>Bluejustice Type: </Text>
                    <Text style={styles.applyAll}>(Select all that apply)</Text>
                    <CheckboxOptions 
                        list = {ssfType}
                        stateList = {bluejusticeTypes}
                        onCheckPress = {type => onCheckboxPress(type, 'bluejustice')}
                    />
                </View>

                    
                <View style={[styles.inputSection, styles.shadow]}>
                    <Text style={styles.label}>Type of Ecosystem: </Text>
                    <Text style={styles.applyAll}>(Select all that apply)</Text>
                    <CheckboxOptions 
                        list = {ssfEcosystem}
                        stateList = {ecoTypes}
                        onCheckPress = {ecosystem => onCheckboxPress(ecosystem, 'ecosystem')}
                    />
                </View>

                
                <View style={[styles.inputSection, styles.shadow]}>
                    <Text style={styles.label}>Type of Impact: </Text>
                    <Text style={styles.applyAll}>(Select all that apply)</Text>
                    <CheckboxOptions 
                        list = {ssfImpactTypes}
                        stateList = {impactTypes}
                        onCheckPress = {impact => onCheckboxPress(impact, 'impact')}
                    />
                </View>

                
                <View style={[styles.inputSection, styles.shadow]}>
                    <Text style={styles.label}>Severity: </Text>
                    <Text style={styles.applyAll}>(Select all that apply)</Text>
                    <RadioOptions 
                        list = {severity}
                        currentState = {selectedSeverity}
                        onSelect = {severity => setSelectedSeverity(severity)}
                    />
                </View>

                
                <View style={[styles.inputSection, styles.shadow]}>
                    <Text style={styles.label}>Scale/Magnitude: </Text>
                    <RadioOptions 
                        list = {magnitude}
                        currentState = {selectedMagnitude}
                        onSelect = {magnitude => setSelectedMagnitude(magnitude)}
                    />
                </View>

                
                <View style={[styles.inputSection, styles.shadow]}>
                    <Text style={styles.label}>Country: </Text>
                    <View style={styles.pickerBox}>
                        <Input 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            blurOnSubmit 
                            placeholder="Country ..."
                            onChangeText={(value) => {setCountry(value)}}
                            style={styles.input} 
                            value={country}
                        />
                    </View>
                </View>

                
                <View style={[styles.inputSection, styles.shadow]}>
                    <Text style={styles.label}>Location: </Text>
                    <View style={styles.pickerBox}>
                        <Input 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            blurOnSubmit 
                            placeholder="Where this incident is taking place ..."
                            onChangeText={(value) => {setLocation(value)}}
                            style={styles.input} 
                            value={location}
                        />
                    </View>
                </View>

                    
                <View style={[styles.inputSection, styles.shadow]}>
                    <Text style={styles.label}>Status: </Text>
                    <RadioOptions 
                        list = {status}
                        currentState = {selectedStatus}
                        onSelect = {status => setSelectedStatus(status)}
                    />
                </View>

                
                <View style={[styles.inputSection, styles.shadow]}>
                    <Text style={styles.label}>Categories: </Text>
                    <Text style={styles.applyAll}>(Select all that apply)</Text>
                    <CheckboxOptions 
                        list = {categories}
                        stateList = {selectedCategories}
                        onCheckPress = {(category) => onCheckboxPress(category, 'category')}
                    />
                </View>

                
                <View style={[styles.inputSection, styles.shadow]}>
                    <Text style={styles.label}>Provide a Description: </Text>
                    <View style={styles.pickerBox}>
                        <Input 
                            autoCapitalize='none' 
                            multiline={true}
                            autoCorrect={false} 
                            blurOnSubmit 
                            placeholder="Provide a description for your record. More detail would provide you more points ..."
                            onChangeText={(value) => {setDescription(value)}}
                            style={styles.textArea} 
                            value={description}
                        />
                    </View>
                </View>
                
                <Button onPress={() => 
                    InsertRecord({
                        contributorId,
                        title,
                        bluejusticeTypes,
                        ecoTypes,
                        impactTypes,
                        selectedSeverity,
                        selectedMagnitude,
                        country,
                        location,
                        selectedStatus,
                        selectedCategories,
                        description
                    })
                }>Submit</Button>
            </View>
        </MainScreen>
    );
};


const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderWidth: 1,
        borderColor: Colors.borderColor
    },
    container: {
        marginTop: 5
    },
    inputSection: {
        width: '100%',
        borderRadius: 5,
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 8
    },
    label: {
        fontSize: 17,
        fontWeight: '700',
        color: Colors.title
    },
    applyAll: {
        fontSize: 14,
        color: Colors.faded,
        marginTop: 5
    },
    input: {
        fontSize: 15
    },
    textArea: {
        height: 100,
        fontSize: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.borderColor
    }
});


export default RegisterAlert;