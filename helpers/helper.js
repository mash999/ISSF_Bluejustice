import Colors from '../constants/Colors';


export const getSeverityColor = severity => {
    switch(severity.toLowerCase()){
        case 'low': return Colors.success;
        case 'moderate': return Colors.warning;
        case 'severe': return Colors.danger;
    }
}


export const getMedalColor = medal => {
    switch(medal.toLowerCase()){
        case 'gold': return Colors.gold;
        case 'silver': return Colors.silver;
        case 'bronze': return Colors.bronze;
    }
}