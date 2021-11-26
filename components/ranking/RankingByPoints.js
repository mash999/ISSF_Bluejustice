import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const getRankingData = rows => {
    const topContributors = [
        { image: '../../assets/img/users/ruhul.png', name: 'Md Ruyel Miah', points: '1350', medal: Colors.gold, totalContribution: 35 },
        { image: '../../assets/img/users/ruhul.png', name: 'Alice Joan G. Ferrer', points: '1323', medal: Colors.gold, totalContribution: 30 },
        { image: '../../assets/img/users/ruhul.png', name: 'Ana Isabel Marquez Perez Perez Perez Perez', points: '1300', medal: Colors.gold, totalContribution: 25 },
        { image: '../../assets/img/users/ruhul.png', name: 'Juan-Luis Alegret', points: '1254', medal: Colors.silver, totalContribution: 22 },
        { image: '../../assets/img/users/ruhul.png', name: 'Acosta Alejandro', points: '1100', medal: Colors.bronze, totalContribution: 10 },
        
        { image: '../../assets/img/users/ruhul.png', name: 'Md Ruyel Miah', points: '1350', medal: Colors.gold, totalContribution: 35 },
        { image: '../../assets/img/users/ruhul.png', name: 'Alice Joan G. Ferrer', points: '1323', medal: Colors.gold, totalContribution: 30 },
        { image: '../../assets/img/users/ruhul.png', name: 'Ana Isabel Marquez Perez Perez Perez Perez', points: '1300', medal: Colors.gold, totalContribution: 25 },
        { image: '../../assets/img/users/ruhul.png', name: 'Juan-Luis Alegret', points: '1254', medal: Colors.silver, totalContribution: 22 },
        { image: '../../assets/img/users/ruhul.png', name: 'Acosta Alejandro', points: '1100', medal: Colors.bronze, totalContribution: 10 },
        
        { image: '../../assets/img/users/ruhul.png', name: 'Md Ruyel Miah', points: '1350', medal: Colors.gold, totalContribution: 35 },
        { image: '../../assets/img/users/ruhul.png', name: 'Alice Joan G. Ferrer', points: '1323', medal: Colors.gold, totalContribution: 30 },
        { image: '../../assets/img/users/ruhul.png', name: 'Ana Isabel Marquez Perez Perez Perez Perez', points: '1300', medal: Colors.gold, totalContribution: 25 },
        { image: '../../assets/img/users/ruhul.png', name: 'Juan-Luis Alegret', points: '1254', medal: Colors.silver, totalContribution: 22 },
        { image: '../../assets/img/users/ruhul.png', name: 'Acosta Alejandro', points: '1100', medal: Colors.bronze, totalContribution: 10 }
    ];  
    if(rows === 'all') {
        return topContributors;
    }
    return topContributors.slice(0, rows);
};


const RankingByPoints = props => {
    const filteredContributor = getRankingData(props.rows || 'all');
    return (
        <View style={styles.container}>
            {
                filteredContributor.map((contributor, index)=>
                    <View style={styles.contributor} key={index}>
                        <View style={styles.imageContainer}>
                            <Image 
                                source={require('../../assets/img/users/ruhul.png')} 
                                style={styles.image}
                            />
                        </View>

                        <View style={styles.contributorInfo}>
                            <Text style={styles.name}>{contributor.name}</Text>
                            <Text style={styles.points}>Points: {contributor.points}</Text>
                            <Text style={styles.totalContribution}>Total Contribution: {contributor.totalContribution}</Text>
                        </View>

                        <View style={styles.icon}>
                            <FontAwesome5 name="medal" size={30} color={contributor.medal} />
                            <Text style={styles.serial}>#{index + 1}</Text>
                        </View>
                    </View>
                )
            }
        </View>
    );
};


const styles = StyleSheet.create({
    contributor: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: Colors.sectionColor,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderRadius: 5,
        padding: 10,
        marginVertical: 3
    },
    imageContainer: {
        width: '20%',
        maxWidth: 50,
        height: 50,
        borderRadius: 25,
        marginRight: '5%',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    contributorInfo: {
        width: '60%',
        marginRight: '5%'
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.title
    },
    points: {
        fontSize: 15,
        fontWeight: '700',
        marginTop: 2
    },
    totalContribution: {
        color: Colors.bodyText,
        fontStyle: 'italic',
        fontSize: 14,
        marginTop: 5
    }, 
    icon: {
        width: '10%'
    },
    serial: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 5
    }
});


export default RankingByPoints;