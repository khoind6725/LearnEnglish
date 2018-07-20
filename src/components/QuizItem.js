import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Card, Row, Col, View, Icon } from 'native-base';
import Divider from './Divider';

export default class QuizItem extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            words : [
                'asset:/lessons/air_travel/images/airport.jpg',
                'asset:/lessons/air_travel/images/aisle.jpg',
                'asset:/lessons/air_travel/images/customs.jpg',
                'asset:/lessons/air_travel/images/escalator.jpg'
            ],
            answer : 2
        }
    }
    

    render() {
        return (
            <Card style={styles.card_container}>
                <Row>
                    <Col>
                        <Image style={styles.image} source={{ uri: 'asset:/lessons/air_travel/images/airport.jpg' }} />
                    </Col>
                    <Divider />
                    <Col>
                        <Image style={styles.image} source={{ uri: 'asset:/lessons/air_travel/images/aisle.jpg' }} />
                    </Col>
                </Row>
                <Divider
                    type='vertical'
                />
                <Row>
                    <Col>
                        <Image style={styles.image} source={{ uri: 'asset:/lessons/air_travel/images/customs.jpg' }} />
                    </Col>
                    <Divider />
                    <Col>
                        <Image style={styles.image} source={{ uri: 'asset:/lessons/air_travel/images/escalator.jpg' }} />
                    </Col>
                </Row>
                <View style={styles.card_content}>
                    <Icon
                        ios='ios-volume-up-outline'
                        android='md-volume-up'
                        style={styles.icon}
                    />
                </View>
            </Card>
        );
    }
}

export const styles = StyleSheet.create({
    card_container: {
        borderRadius: 20,
        flex: 1,
        backgroundColor: '#e1f5fe',
    },
    card_content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
    },
    icon: {
        color: "black",
        fontSize: 40,
        lineHeight: 40
    }
})