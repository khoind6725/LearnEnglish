import React, { Component } from 'react';
import { View } from 'react-native';
import RNFS from 'react-native-fs';
import { Content, Button, Text } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import LessonList from './../components/LessonList';

export default class HomeScreen extends Component {
    
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            lessonList: []
        }
    }

    render() {
        let { isLoading, lessonList } = this.state;
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
            <Content >
                <LessonList
                    lessonList={lessonList}
                    goToLessonDetailScreen={() => this.props.navigation.navigate('LessonDetail')}
                />
            </Content>
        );
    }

    componentDidMount() {
        // Get lessons List
        RNFS.readFileAssets('index.json')
            .then(data => {
                // Get all lesson Name
                this.setState({
                    lessonList: JSON.parse(data),
                    isLoading: !this.state.isLoading
                })
            })
    }
}
