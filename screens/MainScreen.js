import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import RankFloating from '../components/ranking/RankFloating';


const footerHeight = 50;


const navigate = (navigator, screenName) => {
    switch(screenName){
        case 'home': return navigator.navigate('home');
        case 'allRecords': return navigator.navigate('allRecords');
        case 'myRecords': return navigator.navigate('myRecords');
        case 'ranking': return navigator.navigate('ranking');
        case 'registerAlert': return navigator.navigate('registerAlert');
        case 'favorite': return navigator.navigate('favorite');
        case 'account': return navigator.navigate('account');
        case 'signin': return navigator.navigate('signin');
        case 'notifications': return navigator.navigate('notifications');
    }
};


const MainScreen = props => {
    let hasNewNotifications = true;
    const navigator = props.navigator;
    const activeRoute = navigator.state.routeName;

    return (
        <View style={styles.screen}>
            <View style={styles.navHeader}>
                <View>
                    <Ionicons 
                        name={activeRoute === 'notifications' ? 'notifications' : 'notifications-outline'}
                        size={26} 
                        style={styles.navIcon} 
                        onPress={()=>navigate(navigator, 'notifications')} 
                    />
                    
                    { hasNewNotifications ? <Text style={styles.notificationsNum}>56</Text> : null }
                </View>
                
                <Ionicons 
                    name={activeRoute === 'favorite' ? 'heart' : 'heart-outline'}
                    size={25} 
                    style={styles.navIcon} 
                    onPress={()=>navigate(navigator, 'favorite')} 
                />
                
                <Ionicons 
                    name={activeRoute === 'account' ? 'person-circle' : 'person-circle-outline'}
                    size={25} 
                    style={styles.navIcon} 
                    onPress={()=>navigate(navigator, 'account')} 
                />
                
                
                {/* <TouchableOpacity 
                    style={styles.signinButton} 
                    onPress={()=>navigate(navigator, 'signin')}
                    activeOpacity={0.8}
                >
                    <Text style={styles.signin}>Sign in</Text>
                </TouchableOpacity> */}
            </View>

            
            { props.shouldRankFloat ? <RankFloating /> : null }
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.screenTitleContainer}>
                        <Ionicons name={props.screenIcon} size={20} color={Colors.primary}/> 
                        <Text style={styles.screenTitle}>{props.screenTitle}</Text>
                    </View>
                    {props.children}
                </View>
            </ScrollView>

            
            <View style={[styles.footer, styles.shadow]}>
                <View style={styles.menuItem}>
                    <Ionicons 
                        name="home" 
                        size={20} 
                        color={activeRoute === 'home' ? Colors.primary : Colors.bodyText} 
                        onPress={()=>navigate(navigator, 'home')}
                    />
                    
                    <Text style={[styles.menuText, {color: activeRoute === 'home' ? Colors.primary : Colors.bodyText}]}>Home</Text>
                </View>

                <View style={styles.menuItem}>
                    <Ionicons 
                        name="logo-buffer" 
                        size={20} 
                        color={activeRoute === 'allRecords' ? Colors.primary : Colors.bodyText} 
                        onPress={()=>navigate(navigator, 'allRecords')}
                    />
                    
                    <Text style={[styles.menuText, {color: activeRoute === 'allRecords' ? Colors.primary : Colors.bodyText}]}>All Records</Text>
                </View>

                <View style={[
                    styles.menuItem, 
                    styles.middleIcon,
                    { backgroundColor: activeRoute === 'registerAlert' 
                        ? Colors.primary 
                        : Colors.sectionColor
                    }
                ]}>
                    <Ionicons 
                        name="add-circle" 
                        size={30} 
                        color={activeRoute === 'registerAlert' ? Colors.sectionColor : Colors.bodyText} 
                        onPress={()=>navigate(navigator, 'registerAlert')}
                    />
                    
                    {/* <Text style={[styles.menuText, {color: activeRoute === 'registerAlert' ? Colors.primary : Colors.bodyText}]}>Create</Text> */}
                </View>

                <View style={styles.menuItem}>
                    <Ionicons 
                        name="list" 
                        size={20} 
                        color={activeRoute === 'myRecords' ? Colors.primary : Colors.bodyText} 
                        onPress={()=>navigate(navigator, 'myRecords')}
                    />
                    
                    <Text style={[styles.menuText, {color: activeRoute === 'myRecords' ? Colors.primary : Colors.bodyText}]}>My Records</Text>
                </View>

                <View style={styles.menuItem}>
                    <Ionicons 
                        name="trophy" 
                        size={20} 
                        color={activeRoute === 'ranking' ? Colors.primary : Colors.bodyText} 
                        onPress={()=>navigate(navigator, 'ranking')}
                    />

                    <Text style={[styles.menuText, {color: activeRoute === 'ranking' ? Colors.primary : Colors.bodyText}]}>Ranking</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingBottom: footerHeight
    },
    navHeader: {
        position: 'absolute',
        right: '5%',
        top: -43,
        zIndex: 5,
        flexDirection: 'row'
    },
    navIcon: {
        color: '#fff',
        marginHorizontal: 10
    },
    notificationsNum: {
        position: 'absolute',
        top: -2,
        right: -2,
        fontSize: 9,
        fontWeight: '700',
        backgroundColor: Colors.sectionColor,
        color: Colors.primary,
        borderRadius: 100,
        padding: 3
    },
    signinButton: {
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginTop: -5,
        borderWidth: 2,
        borderColor: Colors.title
    },
    signin: {
        color: Colors.primary,
        fontSize: 17,
        paddingBottom: 1,
        fontWeight: '700'
    },
    body: {
        paddingVertical: 12,
        paddingHorizontal: '5%'
    },
    screenTitleContainer: {
        flexDirection: 'row',
        marginVertical: 5
    },
    screenTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.title,
        marginTop: -3,
        marginLeft: 10
    },
    footer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: footerHeight,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    shadow: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#e3e3e3'
    },
    menuItem: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 12,
        color: Colors.bodyText
    },
    middleIcon: {
        flex: 1,
        height: 50,
        top: -15,
        elevation: 10,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderRadius: 50,
        paddingHorizontal: 5
    }
});


export default MainScreen;