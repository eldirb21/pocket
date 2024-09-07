import React, {memo} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {colors, fonts, moderateScale, verticalScale} from '@constants';
import Texts from './texts';

type Props = {
  onPress?: () => void;
  title?: string;
  disabled?: boolean;
  style?: object;
  rightIcon?: any;
  textStyle?: object;
  loading?: boolean;
  shadow?: boolean;
  leftIcon?: any;
  type?: 'full' | 'middle';
  bordered?: boolean;
};

const Buttons = (props: Props) => {
  const {
    onPress,
    title,
    disabled,
    style,
    rightIcon,
    textStyle,
    loading,
    shadow,
    leftIcon,
    type,
    bordered,
  } = props;
  const borderStyle = {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#0084FF',
  };
  const borderText = {
    color: '#0084FF',
  };

  let styled: any = {...styles.btn, ...style};
  let styledText: any = {...styles.title, ...textStyle};

  if (type === 'full') {
    styled['width'] = moderateScale(350);
    if (bordered) {
      styledText = {
        ...styledText,
        ...borderText,
      };
      styled = {
        ...styled,
        ...borderStyle,
      };
    }
  } else if (type === 'middle') {
    styled['width'] = moderateScale(350 / 2 - 20);
    if (bordered) {
      styledText = {
        ...styledText,
        ...borderText,
      };
      styled = {
        ...styled,
        ...borderStyle,
      };
    }
  }

  console.log('loading', loading);
  
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        shadow && styles.shadow,
        (disabled || loading) && styles.disable,
        styled,
      ]}>
      <View style={styles.centered}>
        {leftIcon}
        {loading ? (
          <ActivityIndicator
            color={styledText.color}
            size={fonts.size.font18}
          />
        ) : (
          <Texts style={styledText}>{title}</Texts>
        )}
      </View>
      {rightIcon && (
        <View style={styles.rightIcon}>
          {/* <Icons
            name="keyboard-arrow-right"
            size={fonts.size.font16}
            color={
              iconColor
                ? iconColor
                : !disabled || loading
                ? colors.white
                : colors.colorGrey
            }
          /> */}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default memo(Buttons);

const styles = StyleSheet.create({
  btn: {
    borderRadius: verticalScale(50),
    marginVertical: verticalScale(4),
    height: verticalScale(32),
    backgroundColor: '#0084FF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  centered: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.type.poppinsSemiBold,
    color: '#FFF',
    marginBottom: -2,
  },
  rightIcon: {position: 'absolute', right: 20},
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  disable: {
    opacity: 0.5,
  },
});
