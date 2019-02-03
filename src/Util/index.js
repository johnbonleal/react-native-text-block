import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Dimensions

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH  = width;
const FIELD_HEIGHT = 56;

// Colors

const COLOR_WHITE      = '#FFFFFF';
const COLOR_BLACK      = '#000000';
const COLOR_DARK_GRAY  = '#4A4A4A';
const COLOR_LIGHT_GRAY = '#9B9B9B';
const COLOR_SUCCESS    = '#4BBBAE';
const COLOR_ERROR      = '';

export {
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    FIELD_HEIGHT,
    COLOR_WHITE,
    COLOR_BLACK,
    COLOR_DARK_GRAY,
    COLOR_LIGHT_GRAY,
    COLOR_SUCCESS,
    COLOR_ERROR
};