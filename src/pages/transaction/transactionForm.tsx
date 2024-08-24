import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {heightDimension} from '@constants';

type Props = {
  refForm?: any;
};
const TransactionForm = ({refForm, ...res}: Props) => {
  return (
    <RBSheet
      ref={refForm}
      useNativeDriver={false}
      height={heightDimension}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        draggableIcon: {
          backgroundColor: '#000',
        },
      }}
      customModalProps={{
        animationType: 'slide',
        statusBarTranslucent: true,
      }}
      customAvoidingViewProps={{
        enabled: false,
      }}></RBSheet>
  );
};

export default TransactionForm;

const styles = StyleSheet.create({});
