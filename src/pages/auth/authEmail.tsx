import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Buttons, Container, Spinner, TextInputs} from '@atoms';
import {
  fonts,
  heightDimension,
  moderateScale,
  moderateVerticalScale,
  scale,
  toasts,
  verticalScale,
  widthDimension,
} from '@constants';
import {IcIogoIllustration} from '@icons';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '@stores/store.selector';

type Props = {
  [x: string]: any;
};

const AuthEmail = (props: Props) => {
  const {logon, error, loading} = props.logon;
  const [Inputs, setInputs] = useState<any>({
    email: 'eldirb95@gmail.com',
    password: '87654321',
  });

  useEffect(() => {
    if (!loading && logon?.status === 200) {
      toasts.success('Login successfully.');
      setTimeout(() => {
        props.navigation.replace('NavTabs');
      }, 800);
    }
    if (!loading && logon !== null && logon?.status !== 200) {
      toasts.error(error, 'Login Failed.');
    }
  }, [loading, logon?.status]);

  const handleChange = (key: string, value: any) => {
    const newInput: any = {...Inputs};
    newInput[key] = value;
    setInputs(newInput);
  };

  const isEmty = () => {
    const input = Object.keys(Inputs).some(key => Inputs[key] === '');
    return input;
  };

  const handlerLogin = () => {
    props.doLogon(Inputs);
  };
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
      <Spinner visible={loading} />
      <View style={styles.logo}>
        <IcIogoIllustration />
      </View>
      <KeyboardAvoidingView style={[{width: '100%'}]}>
        <TextInputs
          placeholder={'Email'}
          value={Inputs.email}
          onChangeText={val => handleChange('email', val)}
          containerStyle={styles.input}
        />
        <TextInputs
          placeholder={'Password'}
          value={Inputs.password}
          onChangeText={val => handleChange('password', val)}
          containerStyle={styles.input}
        />

        <Buttons
          style={{marginTop: verticalScale(20)}}
          disabled={isEmty()}
          loading={loading}
          shadow
          type="full"
          title="Login"
          onPress={handlerLogin}
        />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthEmail);

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
  input: {
    marginBottom: scale(10),
  },
});
