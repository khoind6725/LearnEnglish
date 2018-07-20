import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import QuizItem from '../components/QuizItem';

export default class QuizLessonScreen extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        let { lessonName, content } = this.props.navigation.state.params
        this.state = {
            lessonName,
            content
        }
    }

    genQuizItem = () => {

    }

    render() {
        console.log(this.state)
        return (
            <Swiper>
                <QuizItem />
            </Swiper>
        );
    }
}
