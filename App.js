/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import LessonDetailScreen from './src/screens/LessonDetailScreen';

// inorge warning
YellowBox.ignoreWarnings(['Warning: ...']);
console.disableYellowBox = true;

const RootStack = createStackNavigator(
	{
		Home: HomeScreen,
		LessonDetail: LessonDetailScreen,
	},
	{
		initialRouteName: 'Home',
	}
);

export default class App extends Component {

	render() {
		return (
			<RootStack />
		);
	}
}
