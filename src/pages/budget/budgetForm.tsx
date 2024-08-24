import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {heightDimension, scale, verticalScale} from '@constants';
import {Appbar, Buttons, Container, Dropdowns, Icons, TextInputs} from '@atoms';

type Props = {
  refForm?: any;
};

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const BudgetForm = ({refForm, ...res}: Props) => {
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
        title="New Budget"
        statusBarProps={{backgroundColor: '#c1c1c1'}}
      />
      <Container style={styles.container}>
        <Dropdowns
          title={'Categories'}
          data={data}
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

export default BudgetForm;
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
