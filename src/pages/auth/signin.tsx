import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Buttons, Container, Texts} from '@atoms';
import {IcIogoIllustration} from '@icons';
import {
  fonts,
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
  widthDimension,
  heightDimension,
} from '@constants';

type Props = {
  [x: string]: any;
};

const Signin = (props: Props) => {
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
        <Texts style={styles.title}>Sign In</Texts>

        <Buttons
          bordered
          type="full"
          title="Email"
          onPress={() => props.navigation.navigate('AuthEmail')}
        />
        <Buttons type="full" title="Phone" />
      </View>
    </Container>
  );
};

export default Signin;

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
  devider: {
    width: '30%',
    height: 1,
    backgroundColor: '#000',
  },
  or: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  orText: {
    marginHorizontal: scale(20),
  },
  sosmed: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
