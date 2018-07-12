import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import Swiper from 'react-native-swiper';

const cards = [
    {
        text: 'Card One',
        name: 'One',
        image: 'asset:/lessons/bathroom/images/bathtub.jpg'
    },
    {
        text: 'Card Two',
        name: 'Two',
        image: 'asset:/lessons/containers/images/thumbnail.png'
    },
];

export default class LessonDetailScreen extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            content : []
        }
    }

    componentDidMount() {
        
    }

    render() {
        let renderItem = cards.map(item => {
            return (
                <Card style={{ flex: 1 }}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{ uri: item.image }} />
                            <Body>
                                <Text>{item.text}</Text>
                                <Text note>NativeBase</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image style={{ height: 200, flex: 1 }} source={{ uri: item.image }} />
                    </CardItem>
                    <CardItem>
                        <Icon name="heart" style={{ color: '#ED4A6A' }} />
                        <Text>{item.name}</Text>
                    </CardItem>
                </Card>
            )
        })
        return (
            <Swiper showsPagination={false}>
                {renderItem}
            </Swiper>
        );
    }
}
