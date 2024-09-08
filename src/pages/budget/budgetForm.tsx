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
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '@stores/store.selector';
import {datas} from '@utils';

type Props = {
  [x: string]: any;
  refForm?: any;
  refresh: () => void;
};

const BudgetForm = ({refForm, refresh, ...props}: Props) => {
  const {loading, error, actionBudget} = props.budget;
  const [Inputs, setInputs] = useState<any>(datas.PayloadBudget);

  useEffect(() => {
    if (error) {
      toasts.error(error);
      props.resetBudgetAction();
    }
    if (actionBudget?.status === 201) {
      toasts.success(actionBudget?.result);
      setTimeout(() => {
        props.resetBudgetAction();
        refForm.current.close();
        setInputs(datas.PayloadBudget);
        refresh();
      }, 300);
    }
  }, [error, actionBudget]);

  const handleSubmit = () => {
    props.addBudget(Inputs);
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
      <View style={{height: verticalScale(100)}} />
      <Container style={styles.container}>
        <Container scrolled style={{paddingBottom: verticalScale(225)}}>
          <View>
            <View style={styles.head}>
              <Texts style={styles.headText}>Budget</Texts>
            </View>
            <Dropdowns
              containerStyle={styles.inputs}
              title={'Categories'}
              data={datas.categories}
              labelField="label"
              valueField="value"
              onChange={val => setInputs({...Inputs, category: val.label})}
              placeholder={Inputs.category||'Select category'}
            />

            <TextInputs
              containerStyle={styles.inputs}
              title="Budget Nominal"
              placeholder="Rp"
              multiline
              value={Inputs.nominal}
              onChangeText={val => setInputs({...Inputs, nominal: val})}
            />

            <TextInputs
              containerStyle={styles.inputs}
              title="Description"
              placeholder="Description"
              multiline
              value={Inputs.desc}
              onChangeText={val => setInputs({...Inputs, desc: val})}
            />

            <Buttons title="Save" onPress={handleSubmit} loading={loading} />
          </View>
        </Container>
      </Container>
    </RBSheet>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BudgetForm);

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
