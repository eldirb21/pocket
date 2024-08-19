import React, {useEffect, useState} from 'react';
import {StyleSheet, TextProps, Animated, Easing} from 'react-native';
import {fonts} from '@constants';

interface TextsProps extends TextProps {
  animated?: boolean; // New prop for animation
}

const Texts: React.FC<TextsProps> = ({animated = false, ...props}) => {
  const [translateYAnim] = useState(new Animated.Value(30)); // Initialize translateY animation value

  useEffect(() => {
    if (animated) {
      // Start the animation when component mounts
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 800,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  }, [animated, translateYAnim]);

  const defStyle = [styles.textDefault];
  const incStyle = Array.isArray(props.style) ? props.style : [props.style];

  // Apply animated style if animated prop is true
  const textStyles = animated
    ? {transform: [{translateY: translateYAnim}]}
    : {};

  return (
    <Animated.Text {...props} style={[...defStyle, ...incStyle, textStyles]} />
  );
};

const styles = StyleSheet.create({
  textDefault: {
    fontSize: fonts.size.font14,
    fontFamily: fonts.type.poppinsRegular,
    color: '#000',
  },
});

export default Texts;
