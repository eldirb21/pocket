import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {fonts, heightDimension, scale, verticalScale} from '@constants';
import {
  Appbar,
  Buttons,
  Container,
  Dropdowns,
  Icons,
  TextInputs,
  Texts,
} from '@atoms';

type Props = {
  refForm?: any;
};

const types = [
  {label: 'Income', value: '1'},
  {label: 'Expenses', value: '2'},
];
const categories = [
  {label: 'Penghasilan', value: '1'},
  {label: 'Belanja', value: '2'},
  {label: 'Ongkos', value: '3'},
  {label: 'Transfer', value: '4'},
  {label: 'Education', value: '5'},
];

const TransactionForm = ({refForm, ...res}: Props) => {
  const [value, setValue] = useState(null);

  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <Icons color="black" name="Safety" size={20} />
        )}
      </View>
    );
  };
  return (
    <RBSheet
      ref={refForm}
      useNativeDriver={false}
      height={heightDimension}
      customStyles={customStyles}
      customModalProps={customModalProps}
      customAvoidingViewProps={customAvoidingViewProps}>
      <Appbar
        onBack={() => refForm.current.close()}
        title="New Transaction"
        statusBarProps={{backgroundColor: '#c1c1c1'}}
      />
      <Container style={styles.container}>
        <View
          style={{
            alignItems: 'center',
            marginBottom: scale(20),
          }}>
          <Texts style={{fontFamily: fonts.type.poppinsSemiBold}}>
            Transactions
          </Texts>
        </View>
        <Dropdowns
          title={'Types'}
          data={types}
          renderItem={renderItem}
          labelField="label"
          valueField="value"
          onChange={() => {}}
        />
        <Dropdowns
          title={'Categories'}
          data={categories}
          renderItem={renderItem}
          labelField="label"
          valueField="value"
          onChange={() => {}}
        />

        <TextInputs title="Notes" placeholder="Notes" multiline />

        <Buttons title="Save" />
      </Container>
    </RBSheet>
  );
};

export default TransactionForm;

const customModalProps: any = {
  animationType: 'slide',
  statusBarTranslucent: false,
};
const customStyles = {
  wrapper: {
    backgroundColor: 'transparent',
  },
  draggableIcon: {
    backgroundColor: '#000',
  },
  container: {
    backgroundColor: '#7F3DFF',
  },
};
const customAvoidingViewProps = {
  enabled: false,
};

const styles = StyleSheet.create({
  container: {
    padding: scale(20),
    marginTop: verticalScale(100),
    backgroundColor: '#FFF',
    borderTopLeftRadius: scale(25),
    borderTopRightRadius: scale(25),
  },

  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
});
