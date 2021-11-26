import React from 'react';
import { Dimensions, Image, View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';


const windowWidth = Dimensions.get('window').width;
const content = [
    {
        title: 'SSF in the Saint Martin\'s Island',
        image: 'https://bluejustice.org/wp-content/uploads/2021/07/International-Blue-Justice-Tracking-Center.jpg',
        description: 'Foreign Fishing: Fishing by foreign fishers is a frequent occurrence in the Bangladesh waters, especially around the Saint Martin’s island, as it is close to Myanmar. Foreign fishers enter Bangladesh waters with modern equipped fishing gear and harvest the fish.',
        contributor: 'Md. Ruyel Miah'
    },
    {
        title: 'Municipal Fishers in the Taklong National Marine Reserve Area',
        image: 'https://bluejustice.org/wp-content/uploads/2021/10/One-Ocean-Expedition_1.jpg',
        description: 'In 1990, when the TINMR was established the residents of adjacent barangays were not consulted. For years, there was none to weak enforcement of regulations in the TINMR, despite the Department of Environment and Natural Resources (DENR) being in control and administrator of TINMR.',
        contributor: 'Alice Joan G. Ferrer'
    },
    {
        title: 'Old Providence and Santa Catalina Islands SSF Community',
        image: 'https://bluejustice.org/wp-content/uploads/2021/07/Caribbean-support-to-the-Copenhagen-Declaration-and-the-Blue-Justice-Initiative.jpg', 
        description: 'As a consequence, the large part of the industrial fisheries who remained in the Archipelago moved to Quitasueño, to areas that had been exclusive to SSF, leaving them a little profit.',
        contributor: 'Ana Isabel Marquez Perez'
    }
];


const lengthCheck = (str, maxWords) => {
    const wordsArr = str.split(' ');
    if (wordsArr.length > maxWords){
        let str = '';
        for(let index in wordsArr){
            if(index <= maxWords){
                str += wordsArr[index] + ' '
            }
        }
        return str + '...';
    }
    return str;
}


const RecentlyRead = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Continue Reading</Text>
            <ScrollView style={styles.sectionContainer} horizontal={true}>
                {content.map((alert,index)=>
                    <View style={styles.section} key={index}>
                        <View style={styles.imgContainer}>
                            <Image 
                                source={{uri: alert.image}} 
                                style={styles.image} 
                            />
                        </View>

                        <View style={styles.descriptionContent}>
                            <Text style={styles.title}>{lengthCheck(alert.title, 8)}</Text>
                            <Text style={styles.description}>{lengthCheck(alert.description, 15)}</Text>
                        </View>

                        <View style={styles.contributorInfo}>
                            <Text style={styles.contributor}>By {alert.contributor}</Text>
                        </View>
                    </View>
                )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 19,
        fontWeight: '700',
        color: Colors.title,
        marginBottom: 10
    },
    sectionContainer: {
        flexDirection: 'row'
    },
    section: {
        justifyContent: 'space-between',
        width: windowWidth - 100,
        height: 300,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        backgroundColor: '#fff',
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10
    },
    imgContainer: {
        maxWidth: '100%',
        flex: 3,
        resizeMode: 'cover'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 3
    },
    descriptionContent: {
        flex: 2,
        marginTop: 10
    },
    title: {
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 19,
        color: Colors.title,
        marginBottom: 5
    },
    description: {
        fontSize: 14,
        color: Colors.bodyText
    },
    contributorInfo: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    contributor: {
        fontWeight: '700',  
        paddingVertical: 3
    }
});


export default RecentlyRead;