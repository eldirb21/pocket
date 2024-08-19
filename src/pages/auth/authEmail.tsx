import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Buttons, Container, Texts} from '@atoms';
import {
  fonts,
  heightDimension,
  moderateScale,
  moderateVerticalScale,
  scale,
  widthDimension,
} from '@constants';
import {IcIogoIllustration} from '@icons';

type Props = {
  [x: string]: any;
};

const AuthEmail = (props: Props) => {
  return (
    <Container
      style={[
        styles.container,
        widthDimension > heightDimension && {
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: moderateScale(40),
          flex: 1,
        },
      ]}>
      <View style={styles.logo}>
        <IcIogoIllustration />
      </View>
      <View
        style={[
          widthDimension > heightDimension && {width: moderateScale(350)},
          {alignItems: 'center'},
        ]}>
        <Texts style={styles.title}>Signin with Email</Texts>
        <Buttons
          shadow
          type="full"
          title="Login"
          onPress={() => props.navigation.replace('NavTabs')}
        />
      </View>
    </Container>
  );
};

export default AuthEmail;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    width: moderateScale(350),
    paddingVertical: moderateVerticalScale(20),
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: scale(20),
    fontSize: fonts.size.font18,
    fontWeight: '900',
  },
});
