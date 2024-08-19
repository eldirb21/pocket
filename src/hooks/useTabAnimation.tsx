import {Animated} from 'react-native';

export const useTabAnimation = (
  scaleAnim: Animated.Value | Animated.ValueXY,
  toValue: any,
) => {
  Animated.spring(scaleAnim, {
    toValue: toValue,
    useNativeDriver: true,
  }).start();
};
