import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import Texts from './texts';
import {colors, fonts, verticalScale} from '@constants';
import Icons from './icons';

interface TextInputsProps extends TextInputProps {
  containerStyle?: ViewStyle;
  title?: string;
  error?: string;
  secureText?: boolean;
  custom?: any;
  textStyle?: any;
  keyboardType?: any;
}

const TextInputs: React.FC<TextInputsProps> = ({
  title,
  error,
  secureText,
  custom,
  textStyle,
  containerStyle,
  keyboardType = 'text',
  ...res
}) => {
  const [showText, setshowText] = useState(true);
  return (
    <View style={containerStyle}>
      {title && <Texts style={textStyle}>{title}</Texts>}
      <View style={styles.container}>
        <TextInput
          secureTextEntry={secureText ? showText : false}
          style={[styles.input, {color: error ? colors.error : colors.black}]}
          keyboardType={keyboardType}
          {...res}
        />
        {secureText && (
          <TouchableOpacity
            onPress={() => setshowText(!showText)}
            activeOpacity={0.9}
            style={styles.icon}>
            <Icons
              type="Ionicons"
              name={showText ? 'eye-outline' : 'eye-off-outline'}
              size={fonts.size.font16}
              color={colors.textGrey}
            />
          </TouchableOpacity>
        )}
        {custom}
      </View>
      {error && <Texts style={styles.error}>{error}</Texts>}
    </View>
  );
};

export default TextInputs;

const styles = StyleSheet.create({
  container: {
    height: verticalScale(40),
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  input: {
    fontFamily: fonts.type.poppinsRegular,
    fontSize: fonts.size.font14,
    borderRadius: 6,
    textDecorationLine: 'none',
    textDecorationColor: 'transparent',
    padding: 0,
    paddingVertical: 4,
    flex: 1,
  },
  error: {color: colors.error},
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
});
