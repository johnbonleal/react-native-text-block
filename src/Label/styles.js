import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_LIGHT_GRAY } from '../Util';

export default StyleSheet.create({
    labelContainerStyle: {
        backgroundColor: COLOR_WHITE,
        position: 'absolute',
        left: 16,
        top: 56 / 4,
        paddingHorizontal: 5,
        zIndex: 99
    },
    labelStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: COLOR_LIGHT_GRAY
    }
});