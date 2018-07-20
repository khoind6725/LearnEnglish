import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Text, View } from 'native-base';
import { styles } from './../styles/wordItem';

export default class WordItem extends Component {

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        let { lessonName, data } = this.props;
        let { word, image } = data;
        let urlImage = `asset:/lessons/${lessonName}/${image}`;
        return (
            <Card style={styles.card_container}>
                <CardItem style={styles.card_image} cardBody>
                    <Image style={styles.image} source={{ uri: urlImage }} />
                </CardItem>
                <View style={styles.card_content}>
                    <Text style={styles.item_name}>{this.capitalizeFirstLetter(word)}</Text>
                </View>
            </Card>
        );
    }
}
