import React, { PureComponent } from 'react';
import { View, Text, Animated } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Label extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { isFocused, item, value, name } = this.props;
        return (
            <View
                style={[
                    styles.labelContainerStyle,
                    (isFocused || value[name]) && { top: -12 }
                ]}
                pointerEvents={"none"}
            >
                <Text
                    style={[
                        styles.labelStyle,
                        (isFocused || value[name]) && { fontSize: 12, fontWeight: 'normal' }
                    ]}
                >
                    {item}
                </Text>
            </View>
        );
    }
}

Label.propTypes = {
    isFocused: PropTypes.bool,
    item: PropTypes.string
};

Label.defaultProps = {
    isFocused: false,
    item: ''
};

