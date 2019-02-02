import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './index.styles';

class TextBlock extends Component {
    render() {
        const { data, style, value, onChangeValue } = this.props;
        return (
            <View style={[styles.container, style]}>
                <Text>Creating a sample library</Text>
            </View>
        );
    }
}

export default TextBlock;