import {StyleSheet, View} from 'react-native';
import React from 'react';
import Texts from './texts';
import {colors, heightDimension} from '@constants';

type Props = {
  title: any;
  message: any;
  height?: any;
  loading?: boolean;
};

const Nodata = ({
  title,
  message,
  loading,
  height = heightDimension / 2,
}: Props) => {
  if (loading) return null;
  return (
    <View style={{...styles.container, height}}>
      <Texts style={styles.title}>{title}</Texts>
      <Texts style={styles.message}>{message}</Texts>
    </View>
  );
};

export default Nodata;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700',
    color: colors.textGrey,
  },
  message: {
    textAlign: 'center',
    fontWeight: '500',
    color: colors.textGrey,
  },
});
