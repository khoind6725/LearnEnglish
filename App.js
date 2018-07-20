/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/reducers/index';
import HomeScreen from './src/screens/HomeScreen';
import LessonDetailScreen from './src/screens/LessonDetailScreen';
import QuizLessonScreen from './src/screens/QuizLessonScreen';

// inorge warning
YellowBox.ignoreWarnings(['Warning: ...']);
console.disableYellowBox = true;

const RootStack = createStackNavigator(
	{
		Home: HomeScreen,
		LessonDetail: LessonDetailScreen,
		QuizLesson: QuizLessonScreen,
	},
	{
		initialRouteName: 'Home'
	}
);

const store = createStore(rootReducer);

export default class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<RootStack />
			</Provider>
		);
	}
}
