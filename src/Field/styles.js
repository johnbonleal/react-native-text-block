import { StyleSheet } from 'react-native';
import { FIELD_HEIGHT, COLOR_DARK_GRAY } from '../Util';

export default StyleSheet.create({
    top: {
        borderTopWidth: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    bottom: {
        borderTopWidth: 0,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    },
    container: {
        height: FIELD_HEIGHT,
        flexDirection: 'row',
        borderColor: '#D8D8D8',
        borderTopWidth: 0,
        borderWidth: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        color: COLOR_DARK_GRAY,
        fontWeight: 'bold',
        fontSize: 15
    }
});