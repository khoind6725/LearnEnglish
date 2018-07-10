import React, { Component } from 'react';
import { Dimensions, StyleSheet, Image } from 'react-native';
import { Col, Text, View, Icon } from 'native-base';

export default class LessonItem extends Component {
    render() {
        let { name, thumbnail, theme } = this.props;
        return (
            <Col
                style={styles.col}
                onPress={() => this.props.goToLessonDetailScreen()}
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

const styles = StyleSheet.create({
    col: {
        backgroundColor: '#90caf9',
        borderRadius: 8,
        width: (Dimensions.get('window').width - 15) / 2,
        height: (Dimensions.get('window').width - 15) / 2,
    },
    thumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        width: '100%',
        height: '75%',
    },
    description: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    text: {
        marginLeft: 8,
        fontStyle: 'italic',
        fontSize: 14
    },
    image: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        width: '100%',
        height: '100%'
    },
    icon: {
        position: 'absolute',
        top: 35,
        left: 50,
        fontSize: 50,
        color: "green",
        lineHeight: 50
    }
});
