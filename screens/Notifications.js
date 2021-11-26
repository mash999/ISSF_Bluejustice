import React, { useState } from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MainScreen from './MainScreen';
import Button from '../components/Button';
import Colors from '../constants/Colors';


const getNotifications = () => {
    const notifications = [
        {
            contributorName: 'Md. Ruyel Miah',
            contributorImage: require('../assets/img/users/ruhul.png'),
            severity: 'Moderate',
            country: 'Bangladesh',
            date: '2021-11-19',
            read: false
        },
        {
            contributorName: 'Alice Joan G. Ferrer Alice Joan G. Ferrer Alice Joan G. Ferrer',
            contributorImage: require('../assets/img/users/ruhul.png'),
            severity: 'Severe',
            country: 'Japan',
            date: '2021-11-19',
            read: false
        },
        {
            contributorName: 'Ana Isabel Marquez Perez',
            contributorImage: require('../assets/img/users/ruhul.png'),
            severity: 'Low',
            country: 'Bangladesh',
            date: '2021-11-19',
            read: false
        },
        {
            contributorName: 'Ana Isabel Marquez Perez',
            contributorImage: require('../assets/img/users/ruhul.png'),
            severity: 'Low',
            country: 'Mexico',
            date: '2021-11-19',
            read: true
        },
        {
            contributorName: 'Ana Isabel Marquez Perez',
            contributorImage: require('../assets/img/users/ruhul.png'),
            severity: 'Low',
            country: 'Mexico',
            date: '2021-11-19',
            read: true
        },
        {
            contributorName: 'Ana Isabel Marquez Perez',
            contributorImage: require('../assets/img/users/ruhul.png'),
            severity: 'Low',
            country: 'Spain',
            date: '2021-11-19',
            read: true
        },
        {
            contributorName: 'Ana Isabel Marquez Perez',
            contributorImage: require('../assets/img/users/ruhul.png'),
            severity: 'Low',
            country: 'Spain',
            date: '2021-11-19',
            read: false
        }
    ];
    return notifications;
};


const Notifications = props => {
    const notifications = getNotifications();
    const [markAsReadPressed, setMarkAsReadPressed] = useState(false);

    
    return (
        <MainScreen 
            navigator={props.navigation} 
            screenTitle="Notifications"
            screenIcon="notifications"
        >
            <View style={styles.container}>
                <TouchableOpacity 
                    activeOpacity={0.8}
                    style={styles.markAsRead} 
                    onPress={() => setMarkAsReadPressed(true)}
                >
                    <Text style={styles.markAsReadText} >Mark All as Read </Text>
                </TouchableOpacity>

                { notifications.map((notification,index)=>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={[
                            styles.notificationBox,
                            !notification.read && !markAsReadPressed ? styles.newNotification : null
                        ]} 
                        key={index}
                        onPress={() => {}}
                    >
                        <View style={styles.imageContainer}>
                            <Image 
                                source={notification.contributorImage} 
                                style={styles.image} 
                            />
                        </View>

                        <View style={styles.notificationInfo}>
                            <Text style={styles.notificationText}>
                                <Text style={styles.textBold}>{notification.contributorName}</Text> just registered an alert of <Text style={styles.textBold}>{notification.severity}</Text> severity in <Text style={styles.textBold}>{notification.country}</Text> 
                            </Text>
                        </View>

                        <Text style={styles.date}>{notification.date}</Text>
                    </TouchableOpacity>
                )}
            </View>

            <Button onPress={() => {}} textStyle={styles.btnText}>Previous Notifications</Button>
        </MainScreen>
    )
};


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginTop: 10
    },
    markAsRead: {
        position: 'absolute',
        right: 0,
        top: -35,
        zIndex: 9
    },
    markAsReadText: {
        color: Colors.primary,
        fontWeight: '700',
        fontSize: 15,
    },
    notificationBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderColor: Colors.borderColor,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: Colors.sectionColor,
        marginVertical: 2,
        padding: 10
    },
    newNotification: {
        backgroundColor: Colors.newNotification,
        borderColor: Colors.newNotificationBorder
    },
    imageContainer: {
        width: '9%',
        height: 30,
        marginTop: 3,
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
    notificationInfo: {
        width: '88%'
    },
    notificationText: {
        fontSize: 14,
        lineHeight: 18,
        color: Colors.bodyText
    },
    textBold: {
        fontWeight: '700'
    },
    date: {
        color: Colors.faded,
        fontSize: 12,
        fontWeight: '700',
        paddingLeft: '12%',
        marginTop: 5
    },
    btnText: {
        fontSize: 14
    }
});


export default Notifications;