import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {fonts, heightDimension, scale, verticalScale} from '@constants';
import {Appbar, Buttons, Container, Dropdowns, TextInputs, Texts} from '@atoms';
import DatePicker from 'react-native-date-picker';
import {func} from '@utils';
import moment from 'moment-timezone';

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
  const [openDate, setopenDate] = useState(false);
  const [Inputs, setInputs] = useState<any>({
    categories: '',
    amount: '',
    notes: '',
    type: '',
    createAt: new Date(),
    date: new Date(),
  });

  const handleSubmit = () => {
    console.log(Inputs);
  };

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
        container: {
          backgroundColor:
            (Inputs.type === 'Income' && '#00A86B') ||
            (Inputs.type === 'Expenses' && '#FD3C4A') ||
            '#7F3DFF',
        },
      }}
      customModalProps={customModalProps}
      customAvoidingViewProps={customAvoidingViewProps}>
      <Appbar
        onBack={() => refForm.current.close()}
        title="New Transaction"
        statusBarProps={{backgroundColor: '#c1c1c1'}}
      />
      <KeyboardAvoidingView style={{flex: 1}}>
        <Container style={styles.container} scrolled>
          <View style={styles.head}>
            <Texts style={styles.headText}>Transactions</Texts>
          </View>
          <Dropdowns
            containerStyle={styles.inputs}
            title={'Types'}
            data={types}
            labelField="label"
            valueField="value"
            onChange={val => setInputs({...Inputs, type: val.label})}
          />
          <Dropdowns
            containerStyle={styles.inputs}
            title={'Categories'}
            data={categories}
            labelField="label"
            valueField="value"
            onChange={val => setInputs({...Inputs, categories: val.label})}
          />

          <TextInputs
            type="button"
            containerStyle={styles.inputs}
            title="Date"
            placeholder="21-04-2024 08:08"
            editable={false}
            value={moment(Inputs.date).format('DD-MM-yyyy h:mm')}
            onPress={() => setopenDate(true)}
          />

          <TextInputs
            containerStyle={styles.inputs}
            title="Amount"
            placeholder="Amount"
            multiline
            value={Inputs.amount}
            onChangeText={val => setInputs({...Inputs, amount: val})}
          />

          <TextInputs
            containerStyle={styles.inputs}
            title="Notes"
            numberOfLines={2}
            placeholder="Notes"
            multiline
            value={Inputs.notes}
            onChangeText={val => setInputs({...Inputs, notes: val})}
          />

          <Buttons title="Save" onPress={handleSubmit} />

          <DatePicker
            modal={openDate}
            open={openDate}
            date={Inputs.date}
            onConfirm={date => {
              setopenDate(false);
              setInputs({...Inputs, date: date});
            }}
            onCancel={() => setopenDate(false)}
          />
        </Container>
      </KeyboardAvoidingView>
    </RBSheet>
  );
};

export default TransactionForm;

const customModalProps: any = {
  animationType: 'slide',
  statusBarTranslucent: false,
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
  head: {
    alignItems: 'center',
    marginBottom: scale(20),
  },
  headText: {
    fontFamily: fonts.type.poppinsSemiBold,
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
  inputs: {
    marginBottom: 20,
  },
});
