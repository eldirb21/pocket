import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {heightDimension, scale, verticalScale} from '@constants';
import {Appbar, Container, Dropdowns, Icons, Texts} from '@atoms';
import {Dropdown} from 'react-native-element-dropdown';

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
  const [isFocus, setIsFocus] = useState(false);

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <Icons style={styles.icon} color="black" name="Safety" size={20} />
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
      <Container style={{margin: scale(20)}}>
        <Dropdowns
          data={data}
          renderItem={renderItem}
          labelField="label"
          valueField="value"
          onChange={() => {}}
        />
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
  container: {},
};
const customAvoidingViewProps = {
  enabled: false,
};

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
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
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
