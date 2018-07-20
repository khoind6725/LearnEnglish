import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card_container: {
        borderRadius: 20,
        flex: 1,
        backgroundColor: '#e1f5fe',
    },
    card_image: {
        flex: 3,
        backgroundColor: '#e1f5fe',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    card_content: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
    },
    item_name: {
        fontSize: 35
    },
    icon: {
        color: "black",
        fontSize: 30,
        lineHeight: 30
    }
})