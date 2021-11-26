import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import MainScreen from './MainScreen';
import { getMedalColor } from '../helpers/helper';
import Colors from '../constants/Colors';
import Button from '../components/Button';


const getUserInfo = () => {
    const user = {
        name: 'Ruhul Mashbu',
        image: require('../assets/img/users/ruhul.png'),
        points: '2350',
        medal: 'gold',
        totalContributions: '56',
        email: 'mashbu111@gmail.com',
        phone: '7092195725',
        country: 'Canada',
        address: '203 Freshwater Road'
    };
    return user;
};


const Account = props => {
    const user = getUserInfo();
    return (
        <MainScreen navigator={props.navigation} >
            <View>
                <View style={styles.userInfoTop}>
                    <View style={styles.imageContainer}>
                        <Image 
                            source={user.image} 
                            style={styles.image} 
                        />
                    </View>

                    <View style={styles.primaryInfo}>
                        <FontAwesome5 name="medal" size={25} color={getMedalColor(user.medal)} style={styles.medal} />
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={[styles.points, styles.textBold]}>{user.points} points</Text>
                        <Text style={[styles.totalContributions, styles.textBold]}>Total Contributions: {user.totalContributions}</Text>
                    </View>
                </View>

                <View>
                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, styles.textBold]}>E-mail</Text>
                        <Text style={styles.sectionContent}>{user.email}</Text>
                    </View>
                    
                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, styles.textBold]}>Phone</Text>
                        <Text style={styles.sectionContent}>{user.phone}</Text>
                    </View>
                    
                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, styles.textBold]}>Country of Residence</Text>
                        <Text style={styles.sectionContent}>{user.country}</Text>
                    </View>
                    
                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, styles.textBold]}>Address</Text>
                        <Text style={styles.sectionContent}>{user.address}</Text>
                    </View>
                </View>
            </View>

            <Button onPress={() => {}} textStyle={{fontSize: 14}}>Logout</Button>
        </MainScreen>
    )
};


const styles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
        width: 200,
        height: 200,
        alignItems: 'center',
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: Colors.primary,
        borderRadius: 100,
        marginTop: -30
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    medal: {
        position: 'absolute',
        right: -30,
        top: 15,
        borderRadius: 50
    },
    userInfoTop: {
        alignItems: 'center'
    },
    primaryInfo: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 25
    },
    name: {
        fontSize: 23,
        fontWeight: '700',
        color: Colors.primary
    },
    points: {
        fontSize: 17,
        marginBottom: 3,
        color: Colors.bodyText
    },
    totalContributions: {
        fontSize: 15,
        fontStyle: 'italic',
        color: Colors.bodyText
    },
    textBold: {
        fontWeight: '700'
    },
    section: {
        flexDirection: 'row',
        marginVertical: 5,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.borderColor
    },
    sectionTitle: {
        width: '40%',
        marginRight: '5%',
        fontSize: 16,
    },
    sectionContent: {
        width: '55%',
        fontSize: 16
    }
});


export default Account;