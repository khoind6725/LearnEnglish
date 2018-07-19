import React, { Component } from 'react';
import { Alert } from 'react-native';
import { View } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import Swiper from 'react-native-swiper';
import RNFS from 'react-native-fs';
import Sound from 'react-native-sound';
import WordItem from './../components/WordItem';

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

    genItemOfLesson = (itemList) => {
        let result = null;
        if (itemList.length > 0) {
            let lessonName = this.props.navigation.getParam('lessonName');
            result = itemList.map((item, index) => {
                return (
                    <WordItem
                        lessonName={lessonName}
                        data={item}
                        key={index}
                    />
                )
            })
        }
        return result;
    }

    playSound = (index = 0) => {
        let { lessonName, content } = this.state;
        let { words } = content;
        let urlSound = `asset:/lessons/${lessonName}/${words[index].sound}`;
        console.log(urlSound)
        let sound = new Sound(urlSound, Sound.MAIN_BUNDLE, (error) => {
            if (!error) sound.play(); // have to put the call to play() in the onload callback
        });
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
        this.playSound();
        return (
            <Swiper
                paginationStyle={{ bottom: 10 }}
                showsButtons={true}
                loop={false}
                onIndexChanged={index => {
                    this.playSound(index);
                    // if (index == content.words.length - 1) {
                    //     setTimeout(() => {
                    //         Alert.alert(
                    //             'Kết thúc bài học',
                    //             'Bạn có muốn kết thúc bài học để làm bài kiểm tra',
                    //             [
                    //                 { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    //                 { text: 'OK', onPress: () => console.log('OK Pressed') },
                    //             ]
                    //         )
                    //     }, 7000)
                    // }
                }}
            >
                {this.genItemOfLesson(content.words)}
                
            </Swiper>
        );
    }
}
