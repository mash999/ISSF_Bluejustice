import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import Colors from '../constants/Colors';
import MainScreen from './MainScreen';
import { fetchByIdUrl } from '../constants/Api'
import { getSeverityColor } from '../helpers/helper';


const Details = props => {
    const [content, setContent] = useState();
    const { recordId } = props.navigation.state.params;
    
    
    useEffect(async () => {
        await fetch(fetchByIdUrl(recordId))
        .then(response => response.json())
        .then(response => { setContent(response.record); })
        .catch(error => console.log("Error: ", error))
    }, []);


    const getListBlocks = (blockTitle, blockContent, background='Transparent') => {
        return (
            <View style={[styles.block, {backgroundColor: background}]}>
                <Text style={styles.blockTitle}>{blockTitle}</Text>
                <View style={styles.chips}>
                    { 
                        blockContent.split(',')
                        .map((value,index)=>
                            <Text style={styles.chip} key={index}>{value}</Text>
                        )
                    }
                </View>
            </View>
        )
    };


    const getIconsAndLabels = (iconName, label, color=Colors.primary) => {
        return(
            <View style={styles.boxInfo}>
                <FontAwesome name={iconName} size={20} color={color} style={styles.boxIcon}/>
                <Text style={styles.boxText}>{label}</Text>
            </View>
        );
    };
    
    
    return (
        <MainScreen navigator={props.navigation}>
            { content ? 
            <View style={styles.container}>
                <Text style={styles.recordTitle}>{content.title}</Text>
                <View style={styles.contributorInfo}>
                    <FontAwesome5 name="medal" size={17} color={Colors.gold} style={styles.medal}/>
                    <View style={styles.contributorImageContainer}>
                        <Image 
                            source={require('../assets/img/users/ruhul.png')}
                            style={styles.contributorImage}
                        />
                    </View>

                    <View style={styles.contributorDescriptions}>
                        <View style={styles.contributorNameContainer}>
                            <Text style={styles.reportedBy}>Reported by:</Text>
                            <Text style={styles.contributorName}>Ruhul Mashbu</Text>
                        </View>

                        <View style={styles.dateContainer}>
                            <FontAwesome5 name="calendar-alt" size={19} color={Colors.bodyText} style={styles.dateIcon} />
                            <Text style={styles.date}>2019-12-22</Text>
                        </View>    
                    </View>
                </View>

                
                <Image 
                    source={require('../assets/img/image2.jpg')}
                    style={styles.recordImage}
                />


                <View style={styles.radioInfoContainer}>
                    <View style={styles.leftBox}>
                        { getIconsAndLabels('map-marker', content.country) }
                        { getIconsAndLabels('crosshairs', content.magnitude) }
                    </View>
                    
                    <View style={styles.rightBox}>
                        { getIconsAndLabels('random', content.status) }
                        { getIconsAndLabels('circle', content.severity, getSeverityColor(content.severity)) }
                    </View>
                </View>


                <View style={styles.locationBlock}>
                    <Text style={styles.locationTitle}>Location</Text>
                    <Text style={styles.locationText}>{content.location}</Text>
                </View>


                <View style={styles.blocksContainer}>
                    { getListBlocks('Bluejustice Type', content.bluejustice_type, Colors.sectionColor) }
                    { getListBlocks('Ecosystem Type', content.ecosystem_type) }
                    { getListBlocks('Impact Type', content.impact_type, Colors.sectionColor) }
                    { getListBlocks('Categories', content.categories) }
                </View>

                    
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <View style={styles.description}>
                        <Text style={styles.descriptionText}>{content.description}</Text>
                    </View>
                </View>

                
                <View style={styles.votedUp}>
                    <Text>
                        <FontAwesome name="thumbs-o-up" size={24} color={Colors.primary} />   You and 60 others voted up this record
                    </Text>
                </View>
            </View>
            : null }
        </MainScreen>
    )
};


const styles = StyleSheet.create({
    container: {
        marginTop: -30
    },
    recordTitle: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 22,
        color: Colors.title
    },
    contributorInfo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: Colors.borderColor,
        paddingTop: 10,
        marginTop: 10
    },
    contributorImageContainer: {  
        width: 35,
        height: 35,
        marginLeft: 7,
        marginRight: 10,
        overflow: 'hidden'
    },
    medal: {
        position: 'absolute',
        top: 7,
        left: 0,
        zIndex: 3
    },
    contributorImage: {
        width: '100%',
        height: '100%',
        borderRadius: 18,
        borderWidth: 2,
        borderColor: Colors.primary,
        resizeMode: 'cover'
    },
    contributorDescriptions: {
        flex: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contributorNameContainer: {
        marginTop: -2
    },
    reportedBy: {
        color: Colors.faded
    }, 
    contributorName: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.primary
    },
    dateContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    date: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.bodyText
    },
    dateIcon: {
        marginRight: 5
    },
    recordImage: {
        width: '100%',
        height: 250,
        borderRadius: 5,
        resizeMode: 'contain'
    },
    radioInfoContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: Colors.sectionColor,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderRadius: 5,
        marginBottom: 10
    },
    leftBox: {
        width: '50%'
    },
    rightBox: {
        width: '50%'
    },
    boxInfo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 5
    },
    boxIcon: {
        width: '17%',
        marginRight: '3%'
    },
    boxText: {
        width: '80%'
    },
    locationBlock: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: Colors.sectionColor,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 15
    },
    locationTitle: {
        width: '20%',
        fontSize: 14,
        color: Colors.title,
        fontWeight: '700'
    },
    locationText: {
        width: '80%',
        textAlign: 'right',
        fontSize: 14
    },
    blocksContainer: {
        borderTopWidth: 1,
        borderTopColor: Colors.borderColor
    },
    block: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderTopWidth: 0,
        borderTopColor: 'transparent',
        paddingVertical: 8,
        paddingHorizontal: 10
    },
    blockTitle: {
        flex: 1.5,
        fontSize: 13,
        color: Colors.primary,
        fontWeight: 'bold'
    },
    chips: {
        flex: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 8
    },
    chip: {
        fontSize: 12,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 2,
        marginHorizontal: 2
    },
    descriptionContainer: {
        marginVertical: 20
    },
    descriptionTitle: {
        fontSize: 17,
        fontWeight: '700',
        color: Colors.primary
    },
    description: {
        backgroundColor: Colors.sectionColor,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 10
    },
    descriptionText: {
        fontSize: 14,
        lineHeight: 21,
        color: Colors.bodyText,
        marginVertical: 10
    },
    votedUp: {
        marginBottom: 15
    }
});


export default Details;