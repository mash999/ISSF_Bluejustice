import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import Colors from '../../constants/Colors';
import Button from '../Button';
import Input from '../../components/forms/Input';


const getRecords = (screenName, numberOfRecords) => {
    const content = [
        {
            title: 'SSF in the Saint Martin\'s Island',
            country: 'Bangladesh',
            severity: 'Moderate',
            contributorName: 'Md. Ruyel Miah',
            contributorImage: require('../../assets/img/users/ruhul.png'),
            watchCount: 50,
            color: Colors.warning
        },
        {
            title: 'Municipal Fishers in the Taklong National Marine Reserve Area',
            country: 'Philippines',
            severity: 'Severe',
            contributorName: 'Alice Joan G. Ferrer Alice Joan G. Ferrer Alice Joan G. Ferrer',
            contributorImage: require('../../assets/img/users/ruhul.png'),
            watchCount: 35,
            color: Colors.danger
        },
        {
            title: 'Old Providence and Santa Catalina Islands SSF Community',
            country: 'Colombia',
            severity: 'Low',
            contributorName: 'Ana Isabel Marquez Perez',
            contributorImage: require('../../assets/img/users/ruhul.png'),
            watchCount: 56,
            color: Colors.success
        },
        {
            title: 'Old Providence and Santa Catalina Islands SSF Community',
            country: 'Colombia',
            severity: 'Low',
            contributorName: 'Ana Isabel Marquez Perez',
            contributorImage: require('../../assets/img/users/ruhul.png'),
            watchCount: 56,
            color: Colors.success
        },
        {
            title: 'Old Providence and Santa Catalina Islands SSF Community',
            country: 'Colombia',
            severity: 'Low',
            contributorName: 'Ana Isabel Marquez Perez',
            contributorImage: require('../../assets/img/users/ruhul.png'),
            watchCount: 56,
            color: Colors.success
        },
        {
            title: 'Old Providence and Santa Catalina Islands SSF Community',
            country: 'Colombia',
            severity: 'Low',
            contributorName: 'Ana Isabel Marquez Perez',
            contributorImage: require('../../assets/img/users/ruhul.png'),
            watchCount: 56,
            color: Colors.success
        },
        {
            title: 'Old Providence and Santa Catalina Islands SSF Community',
            country: 'Colombia',
            severity: 'Low',
            contributorName: 'Ana Isabel Marquez Perez',
            contributorImage: require('../../assets/img/users/ruhul.png'),
            watchCount: 56,
            color: Colors.success
        }
    ];

    if(numberOfRecords === 'all'){
        return content;
    }
    return content.slice(0, numberOfRecords);
}


const RecordsList = props => {
    const records = getRecords(props.screenName, props.numberOfRecords);
    return (
        <View>
            <View style={styles.search}>
                <Input 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    blurOnSubmit 
                    placeholder="Search records ..."
                    onChangeText={() => {}}
                    style={styles.input} 
                    value=""
                />
                <Button onPress={() => {}}>
                    <FontAwesome name="search" size={16} color='#fff' />
                </Button>
            </View>


            <View style={styles.sectionContainer}>
                { 
                    records.map((alert,index)=>
                        <TouchableOpacity 
                            activeOpacity={0.7}
                            style={styles.section} 
                            key={index}
                            onPress={() => {}}
                        >
                            <View style={styles.description}>
                                <Text style={styles.title}>{alert.title}</Text>
                                
                                <View style={styles.chipsContainer}>
                                    <View style={styles.chip}>
                                        <FontAwesome name="map-marker" size={20} color={Colors.primary} />
                                        <Text style={styles.chipText}>{alert.country}</Text>
                                    </View>
                                    
                                    <View style={styles.chip}>
                                        <FontAwesome name="circle" size={20} color={alert.color} />
                                        <Text style={styles.chipText}>{alert.severity}</Text>
                                    </View>
                                    
                                    <View style={styles.chip}>
                                        <FontAwesome name="thumbs-up" size={20} color={Colors.primary} />
                                        <Text style={[styles.chipText, styles.watchCount]}>{alert.watchCount}</Text>
                                    </View>
                                </View>
                            </View>
                            
                                
                            <View style={styles.contributor}>
                                <View style={styles.imageContainer}>
                                    <Image 
                                        source={alert.contributorImage} 
                                        style={styles.image} 
                                    />
                                </View>
                                <Text style={styles.contributorName}>{alert.contributorName}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sectionContainer: {
        marginTop: 5
    },
    input: {
        width: '85%',
        fontSize: 16,
        paddingBottom: 10
    },
    section: {
        backgroundColor: Colors.sectionColor,
        borderColor: Colors.borderColor,
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 3
    },
    title: {
        fontSize: 15,
        lineHeight: 20,
        color: Colors.title,
        marginBottom: 5
    },
    chipsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    chip: {
        flexDirection: 'row'
    },
    chipText: {
        fontSize: 13,
        fontStyle: 'italic',
        marginTop: 1,
        marginRight: 10,
        marginLeft: 5
    },
    watchCount: {
        marginRight: 0
    },
    contributor: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6
    },
    imageContainer: {
        width: '8%',
        height: 25,
        marginRight: '3%',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 13
    },
    contributorName: {
        width: '89%',
        fontSize: 13,
        fontWeight: '700',
        color: Colors.bodyText,
        marginTop: 2
    }
});


export default RecordsList;