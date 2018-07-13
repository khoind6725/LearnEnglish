import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Card, CardItem, Text, View } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import Swiper from 'react-native-swiper';
import RNFS from 'react-native-fs';

export default class LessonDetailScreen extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            lessonName: '',
            content: []
        }
    }

    componentDidMount() {
        let lessonName = this.props.navigation.getParam('lessonName');
        if (lessonName) {
            // Get content of lesson
            RNFS.readFileAssets(`lessons/${lessonName}/lesson.json`)
                .then(data => {
                    // Get all lesson Name
                    this.setState({
                        isLoading: false,
                        lessonName: lessonName,
                        content: JSON.parse(data)
                    })
                })
        }
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    genItemOfLesson = (itemList) => {
        let result = null;
        if (itemList.length > 0) {
            let lessonName = this.props.navigation.getParam('lessonName');
            result = itemList.map((item, index) => {
                return (
                    <Card style={styles.card_container} key={index}>
                        <CardItem style={styles.card_image} cardBody>
                            <Image style={styles.image} source={{ uri: `asset:/lessons/${lessonName}/${item.image}` }} />
                        </CardItem>
                        <View style={styles.card_content}>
                            <Text style={styles.item_name}>{this.capitalizeFirstLetter(item.word)}</Text>
                        </View>
                    </Card>
                )
            })
        }
        return result;
    }

    render() {
        let { isLoading, content } = this.state;
        if (isLoading) {
            return (
                <View style={{ flex: 1 }}>
                    <Spinner
                        visible={isLoading}
                        textContent={"Loading..."}
                        textStyle={{ color: '#FFF' }}
                        animation="fade"
                    />
                </View>
            );
        }
        return (
            <Swiper
                paginationStyle={{ bottom: 10 }}
                showsButtons={true}
            >
                {this.genItemOfLesson(content.words)}
            </Swiper>
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
    }
})