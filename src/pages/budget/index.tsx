import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {
  Appbar,
  Container,
  Floating,
  Icons,
  Nodata,
  Spinner,
  Texts,
} from '@atoms';
import {scale} from '@constants';
import {ItemBudget} from '@molecules';
import {datas, func} from '@utils';
import BudgetForm from './budgetForm';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '@stores/store.selector';
import {useIsFocused} from '@react-navigation/native';

type Props = {
  [x: string]: any;
};

const Budget = (props: Props) => {
  const refForm = useRef<any>(null);
  const isFocused = useIsFocused();
  const {budget, loading} = props.budget;

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);
  const fetchData = () => {
    props.getListBudget({
      page: 1,
      pageSize: 10,
    });
  };

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
      <Spinner visible={loading} />
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
        data={budget?.items}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={{
          padding: scale(15),
          paddingTop: 10,
        }}
        ListEmptyComponent={() => (
          <Nodata title={'No Data'} message={'No data budget found'} />
        )}
      />
      <Floating onPress={() => refForm.current.open()} />

      <BudgetForm refForm={refForm} refresh={fetchData} />
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Budget);

const styles = StyleSheet.create({});
