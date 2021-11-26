import React, { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import Colors from '../../constants/Colors';
import { fetchRecordsByLimit } from '../../constants/Api'


const getSeverityColor = (severity) => {
    switch(severity.toLowerCase()) {
        case 'low': return Colors.success;
        case 'moderate': return Colors.warning;
        case 'high': return Colors.danger;
    }
}


const images = [
    'https://bluejustice.org/wp-content/uploads/2021/07/International-Blue-Justice-Tracking-Center.jpg',
    'https://bluejustice.org/wp-content/uploads/2021/10/One-Ocean-Expedition_1.jpg',
    'https://bluejustice.org/wp-content/uploads/2021/07/Caribbean-support-to-the-Copenhagen-Declaration-and-the-Blue-Justice-Initiative.jpg'
];


const RecentAlerts = props => {
    const [content, setContent] = useState();
    useEffect(async () => {
        await fetch(fetchRecordsByLimit(3))
        .then(response => response.json())
        .then(response => { setContent(response.records); })
        .catch(error => console.log("Error: ", error))
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Recent Alerts</Text>
            { 
                content ? 
                    content.map((alert,index)=>
                        <TouchableOpacity 
                            style={styles.section} 
                            key={index}
                            activeOpacity={0.8}
                            onPress={() => props.navigator.navigate('details', {
                                recordId: alert.record_id
                            })}
                        >
                            <Image 
                                source={{uri: images[index]}} 
                                style={styles.image} 
                            />
                            <View style={styles.description}>
                                <Text style={styles.title}>{alert.title}</Text>
                                <View style={styles.chipsContainer}>
                                    <View style={styles.chip}>
                                        <FontAwesome name="map-marker" size={20} color={Colors.primary} />
                                        <Text style={styles.country}>{alert.country}</Text>
                                    </View>
                                    
                                    <View style={styles.chip}>
                                        <FontAwesome name="circle" size={20} color={getSeverityColor(alert.severity)} />
                                        <Text style={styles.severity}>{alert.severity}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        flexDirection: 'row',
        marginVertical: 5,
        borderColor: Colors.borderColor,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: Colors.sectionColor
    },
    header: {
        color: Colors.title,
        fontSize: 19,
        fontWeight: '700',
        marginBottom: 5
    },
    image: {
        width: '25%'
    },
    description: {
        width: '75%',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    title: {
        fontSize: 14,
        lineHeight: 19,
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
    country: {
        fontSize: 13,
        fontStyle: 'italic',
        marginRight: 10,
        marginLeft: 5
    },
    severity: {
        fontSize: 13,
        fontStyle: 'italic',
        marginLeft: 5
    }
});


export default RecentAlerts;