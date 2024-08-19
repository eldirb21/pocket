import {Animated} from 'react-native';

const useAnimation = {
  tab: (scaleAnim: Animated.Value | Animated.ValueXY, toValue: any) => {
    Animated.spring(scaleAnim, {
      toValue: toValue,
      useNativeDriver: true,
    }).start();
  },
};

export default useAnimation;
