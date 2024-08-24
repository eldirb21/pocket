import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import Icons from './icons';
import { colors } from '@constants';

type Props = {
  size?: any;
  title?: any;
  onPress?: () => void;
  style?: any;
};

const Floating = ({onPress, size = 45, style, title}: Props) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={{...styles.btn, ...styles.shadow, height: size, width: size}}>
        <Icons name="add" color={'#FFF'} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(Floating);

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.tint,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
