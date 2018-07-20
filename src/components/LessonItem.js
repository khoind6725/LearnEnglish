import React, { Component } from 'react';
import { Image } from 'react-native';
import { Col, Text, View, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';
import { styles } from '../styles/lessonItem';

class LessonItem extends Component {
    render() {
        let { name, thumbnail, theme, navigation } = this.props;
        return (
            <Col
                style={styles.col}
                onPress={() => {
                    navigation.navigate('LessonDetail', { lessonName: name })
                }}
            >
                <View style={styles.thumbnail}>
                    <Image
                        source={{ uri: `asset:/lessons/${name}/${thumbnail}` }}
                        style={styles.image}
                    />
                    <Icon
                        ios='ios-checkmark-circle-outline'
                        android='md-done-all'
                        style={styles.icon}
                    />
                </View>
                <View style={styles.description}>
                    <Text style={styles.text}>
                        {theme}
                    </Text>
                </View>
            </Col>
        );
    }
}

export default withNavigation(LessonItem);