import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Container} from '@atoms';
import {IcIogoIllustration} from '@icons';

type Props = {
  [x: string]: any;
};

const Splash = (props: Props) => {
  useEffect(() => {
    validateSession();
  }, []);
  const validateSession = async () => {
    props.navigation.replace('Signin');
  };

  return (
    <Container style={styles.container}>
      <IcIogoIllustration />
    </Container>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
