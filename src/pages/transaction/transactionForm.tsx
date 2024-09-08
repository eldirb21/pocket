import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fonts, heightDimension, scale, toasts, verticalScale} from '@constants';
import {
  Appbar,
  Buttons,
  Container,
  Dropdowns,
  RBSheet,
  TextInputs,
  Texts,
} from '@atoms';
import DatePicker from 'react-native-date-picker';
import moment from 'moment-timezone';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '@stores/store.selector';
import {datas, func} from '@utils';

type Props = {
  [x: string]: any;
  refForm?: any;
  refresh: () => void;
};

const TransactionForm = ({refForm, refresh, ...props}: Props) => {
  const {loading, error, actionTransaction} = props.transaction;

  const [openDate, setopenDate] = useState(false);
  const [openPaymentDate, setopenPaymentDate] = useState(false);
  const [Inputs, setInputs] = useState<any>(datas.PayloadTransaction);

  useEffect(() => {
    const total_with_fee =
      parseFloat(Inputs.nominal || 0) + parseFloat(Inputs.fee_bank || 0);
    setInputs({...Inputs, total_with_fee});
  }, [Inputs.nominal, Inputs.fee_bank]);

  useEffect(() => {
    if (error) {
      toasts.error(error);
      props.resetTransactionAction();
    }
    if (actionTransaction?.status === 201) {
      toasts.success(actionTransaction?.result);
      setTimeout(() => {
        props.resetTransactionAction();
        refForm.current.close();
        setInputs(datas.PayloadTransaction);
        refresh();
      }, 300);
    }
  }, [error, actionTransaction]);

  const handleSubmit = () => {
    props.addTransaction(Inputs);
  };

  return (
    <RBSheet
      ref={refForm}
      height={heightDimension}
      closeOnPressMask={true}
      closeOnPressBack={true}
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
      <View style={{height: verticalScale(100)}} />

      <Container style={styles.container} scrolled>
        <Container style={{paddingBottom: verticalScale(160)}}>
          <View>
            <View style={styles.head}>
              <Texts style={styles.headText}>Transactions</Texts>
            </View>

            <TextInputs
              containerStyle={styles.inputs}
              title="Subject"
              numberOfLines={2}
              placeholder="Subject"
              multiline
              value={Inputs.subject}
              onChangeText={val => setInputs({...Inputs, subject: val})}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Dropdowns
                containerStyle={[styles.inputs, {flex: 1, marginRight: 5}]}
                title={'Types'}
                data={datas.types}
                labelField="label"
                valueField="value"
                placeholder={Inputs.type || 'select type'}
                onChange={val => setInputs({...Inputs, type: val.label})}
              />
              <Dropdowns
                containerStyle={[styles.inputs, {flex: 1, marginLeft: 5}]}
                title={'Categories'}
                data={datas.categories}
                labelField="label"
                valueField="value"
                placeholder={Inputs.category || 'Select category'}
                onChange={val => setInputs({...Inputs, category: val.label})}
              />
            </View>

            <TextInputs
              type="button"
              containerStyle={styles.inputs}
              title="Date"
              placeholder="21-04-2024 08:08"
              editable={false}
              value={moment(Inputs.date).format('DD-MM-yyyy h:mm')}
              onPress={() => setopenDate(true)}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Dropdowns
                containerStyle={[styles.inputs, {flex: 1, marginRight: 5}]}
                title={'Payment Method'}
                data={datas.paymentMethod}
                labelField="label"
                valueField="value"
                value={Inputs.payment_method}
                onChange={val =>
                  setInputs({...Inputs, payment_method: val.label})
                }
              />
              <TextInputs
                type="button"
                containerStyle={[styles.inputs, {flex: 1, marginLeft: 5}]}
                title="Payment date"
                placeholder="21-04-2024 08:08"
                editable={false}
                value={moment(Inputs.payment_date).format('DD-MM-yyyy h:mm')}
                onPress={() => setopenPaymentDate(true)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TextInputs
                containerStyle={[styles.inputs, {flex: 1, marginRight: 5}]}
                title="Nominal"
                placeholder="Rp."
                multiline
                value={Inputs.nominal}
                onChangeText={val => setInputs({...Inputs, nominal: val})}
              />
              <TextInputs
                containerStyle={[styles.inputs, {flex: 1, marginLeft: 5}]}
                title="Fee transaction"
                placeholder="Rp."
                multiline
                value={Inputs.fee_bank}
                onChangeText={val => setInputs({...Inputs, fee_bank: val})}
              />
            </View>

            <TextInputs
              containerStyle={styles.inputs}
              title="Nominal with Fee"
              placeholder="Rp."
              editable={false}
              multiline
              value={func.numbToRupiah(Inputs.total_with_fee)}
            />

            <TextInputs
              containerStyle={styles.inputs}
              title="Description"
              numberOfLines={2}
              placeholder="Description"
              multiline
              value={Inputs.desc}
              onChangeText={val => setInputs({...Inputs, desc: val})}
            />

            <Buttons loading={loading} title="Save" onPress={handleSubmit} />

            {(openDate || openPaymentDate) && (
              <DatePicker
                modal={openDate || openPaymentDate}
                open={openDate || openPaymentDate}
                date={Inputs.date}
                onConfirm={date => {
                  if (openPaymentDate) {
                    setInputs({...Inputs, payment_date: date});
                  } else {
                    setInputs({...Inputs, date: date});
                  }
                  setopenDate(false);
                  setopenPaymentDate(false);
                }}
                onCancel={() => {
                  setopenDate(false);
                  setopenPaymentDate(false);
                }}
              />
            )}
          </View>
        </Container>
      </Container>
    </RBSheet>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);

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
