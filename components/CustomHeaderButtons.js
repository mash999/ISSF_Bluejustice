import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons'; 
import { Ionicons } from '@expo/vector-icons';


const CustomHeaderButtons = props => {
    return (
        <HeaderButton 
            {...props} 
            IconComponent={Ionicons} 
            iconSize={23} 
            color='#fff'
            onPress={() => {}}
        />
    );  
};


export default CustomHeaderButtons;