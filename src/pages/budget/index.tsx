import {FlatList, StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import {Appbar, Container, Floating, Icons, Texts} from '@atoms';
import {scale} from '@constants';
import {ItemBudget} from '@molecules';
import {datas, func} from '@utils';
import BudgetForm from './budgetForm';

type Props = {
  [x: string]: any;
};

const Budget = (props: Props) => {
  const refForm = useRef<any>(null);

  const renderItem = ({item, index}: any) => {
    const results = func.budget(item.budgetExhausted, item.nominal);
    return (
      <ItemBudget
        key={index}
        budgetExhausted={item.budgetExhausted}
        category={item.category}
        minus={results.minus}
        nominal={item.nominal}
        persen={results.persen}
        remain={results.remain}
        onPress={() => {}}
      />
    );
  };

  return (
    <Container>
      <Appbar title="Budget" onSearch={() => {}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
        }}>
        <Icons name="arrow-back-ios" color={'#000'} size={20} />
        <Texts>May</Texts>
        <Icons name="arrow-forward-ios" color={'#000'} size={20} />
      </View>

      <FlatList
        data={datas.budget}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={{
          padding: scale(15),
          paddingTop: 10,
        }}
      />
      <Floating onPress={() => refForm.current.open()} />

      <BudgetForm refForm={refForm} />
    </Container>
  );
};

export default Budget;

const styles = StyleSheet.create({});
