import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Card, CardItem, Text, View } from 'native-base';

export default class WordItem extends Component {
    
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        let { lessonName, data } = this.props;
        let { word, image, sound } = data;
        let urlImage = `asset:/lessons/${lessonName}/${image}`;
        return (
            <Card style={styles.card_container}>
                <CardItem style={styles.card_image} cardBody>
                    <Image style={styles.image} source={{ uri: urlImage}} />
                </CardItem>
                <View style={styles.card_content}>
                    <Text style={styles.item_name}>{this.capitalizeFirstLetter(word)}</Text>
                </View>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
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
