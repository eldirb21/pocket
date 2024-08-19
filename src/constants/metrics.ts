import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = (size: any) =>
  (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = (size: any) =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size: any, factor = 0.5) =>
  size + (scale(size) - size) * factor;
export const moderateVerticalScale = (size: any, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

export const heightDimension = height;
export const widthDimension = width;
