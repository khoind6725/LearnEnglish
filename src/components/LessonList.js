import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Row, Grid } from 'native-base';
import Divider from './Divider';
import LessonItem from './LessonItem';

export default class LessonList extends Component {
    render() {
        let { lessonList } = this.props;
        let genLessonItem = lessonList.map((lesson, index) => {
            if (index % 2 == 0) {
                return (
                    <Row 
                        key={index}
                        style={(index + 2 >= lessonList.length) ? { marginBottom: 0 } : { marginBottom: 5 }}
                    >
                        <LessonItem
                            name={lesson.name}
                            thumbnail={lesson.thumbnail}
                            theme={lesson.theme}
                        />
                        <Divider />
                        <LessonItem
                            name={lessonList[index + 1] && lessonList[index + 1].name}
                            thumbnail={lessonList[index + 1] && lessonList[index + 1].thumbnail}
                            theme={lessonList[index + 1].theme}
                        />
                    </Row>
                )
            }
            return null;
        })

        return (
            <Grid style={styles.container}>
                {genLessonItem}
            </Grid>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    }
});
