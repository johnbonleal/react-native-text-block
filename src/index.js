import React, { PureComponent } from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import styles from './index.styles';

import FieldComponent from './Field';
import { toCamelCase } from './Util/helper';

export default class TextBlock extends PureComponent {
    render() {
        const { items, style, value, ...props } = this.props;
        const renderedItems = React.Children.map(items, (item, index) => {
            return (
                <FieldComponent key={index} item={item} index={index} length={items.length} value={value} name={toCamelCase(item)} {...props} />
            );
        })
        return (
            <View style={[styles.container, style]}>
                {renderedItems}
            </View>
        );
    }
}

TextBlock.propTypes = {
    items: PropTypes.array,
    style: PropTypes.object,
    value: PropTypes.object,
    style: (ViewPropTypes || View.propTypes).style
};

TextBlock.defaultProps = {
    items: [],
    value: {}
};