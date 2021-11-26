import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from '../constants/Colors';

import Account from '../screens/Account';
import AllRecords from '../screens/AllRecords';
import Details from '../screens/Details';
import Favorite from '../screens/Favorite';
import Home from '../screens/Home';
import MyRecords from '../screens/MyRecords';
import Notifications from '../screens/Notifications';
import Ranking from '../screens/Ranking';
import RegisterAlert from '../screens/RegisterAlert';
import Signin from '../screens/Signin';


const AppNavigator = createStackNavigator(
    { 
        home: Home,
        allRecords: AllRecords,
        registerAlert: RegisterAlert,
        myRecords: MyRecords,
        ranking: Ranking,
        notifications: Notifications,
        favorite: Favorite,
        account: Account,
        signin: Signin,
        details: Details
    },
    { 
        defaultNavigationOptions: {
            headerTitle: 'ISSF Bluejustice',
            headerTitleStyle: {
                fontSize: 18,
                marginLeft: -15
            },
            headerStyle: {
                backgroundColor: Colors.primary
            },
            headerTintColor: '#fff',
            headerLeft: () => 
                <Image 
                    source={require('../assets/img/icon-bluejustice-white.png')} 
                    style={{ width: 25, height: 25, marginLeft: 15 }} 
                />
        }
    },
);


export default createAppContainer(AppNavigator);