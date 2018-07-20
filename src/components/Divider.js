import React, { Component } from 'react';
import { View } from 'react-native';

export default class Divider extends Component {
    render() {
        let type = this.props.type || 'horizontal';
        let unit = this.props.unit || 5;

        if (type === 'horizontal') {
            return (
                <View style={{ width: unit }}>
                </View>
            );
        }
        return (
            <View style={{ height: unit }}>
            </View>
        );
    }
}
