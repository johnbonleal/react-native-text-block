import React, { PureComponent } from 'react';
import { View, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import { COLOR_SUCCESS, COLOR_DARK_GRAY, COLOR_WHITE } from '../Util';
import styles from './styles';

import Label from '../Label';

export default class FieldComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: null
        }
    }
    render() {
        const { currentIndex } = this.state;
        const {
            index,
            item,
            onChangeText,
            value,
            length,
            name
        } = this.props;
        return (
            <View style={{backgroundColor: COLOR_WHITE}}>
                <Label isFocused={currentIndex===index} {...this.props} />
                <View
                    style={[
                        styles.container,
                        index === 0 && styles.top,
                        index === length - 1 && styles.bottom,
                        currentIndex === index - 1 && { borderTopWidth: 0, borderBottomWidth: 0 },
                        currentIndex === index + 1 && { borderBottomWidth: 0 },
                        currentIndex === index && { borderColor: COLOR_SUCCESS, borderTopWidth: 1, borderBottomWidth: 1 }
                    ]}
                >
                    <TextInput
                        style={{ width: '100%', fontWeight: 'bold', color: COLOR_DARK_GRAY }}
                        onChangeText={onChangeText ? (text) => onChangeText(text, name) : null}
                        value={value ? value[name] : ""}
                        onFocus={() => this.setState({ currentIndex: index })}
                        onBlur={() => this.setState({ currentIndex: null })}
                    />
                    {value && !value[name] && <Text style={{ color: 'red', textAlignVertical: 'center' }}>*</Text>}
                </View>
            </View>
        )
    }
}

FieldComponent.propTypes = {
    index: PropTypes.number,
    item: PropTypes.string,
    onChangeText: PropTypes.func,
    value: PropTypes.object,
    length: PropTypes.number
};

FieldComponent.defaultProps = {
    index: 0,
    item: '',
    onChangeText: () => {},
    value: {},
    length: 0
};