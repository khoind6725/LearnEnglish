import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    col: {
        backgroundColor: '#90caf9',
        borderRadius: 8,
        width: (Dimensions.get('window').width - 15) / 2,
        height: (Dimensions.get('window').width - 15) / 2,
    },
    thumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        width: '100%',
        height: '75%',
    },
    description: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    text: {
        marginLeft: 8,
        fontStyle: 'italic',
        fontSize: 14
    },
    image: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        width: '100%',
        height: '100%'
    },
    icon: {
        position: 'absolute',
        top: 35,
        left: 50,
        fontSize: 50,
        color: "green",
        lineHeight: 50
    }
});