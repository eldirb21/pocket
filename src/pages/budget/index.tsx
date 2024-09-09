import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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
  const date = new Date();
  const [selectMonth, setSelectMonth] = useState<any>(date.getUTCMonth() + 1);

  useEffect(() => {
    if (isFocused) {
      fetchData(selectMonth);
    }
  }, [isFocused, selectMonth]);

  const fetchData = (month: any) => {
    props.getListBudget({
      page: 1,
      pageSize: 10,
      month,
    });
  };

  const decreamentMounth = () => {
    if (selectMonth > 1) {
      setSelectMonth((prev: number) => {
        const newMonthId = prev === 1 ? 12 : prev - 1;
        return newMonthId;
      });
    }
  };
  const increamentMounth = () => {
    if (selectMonth < 12) {
      setSelectMonth((prev: number) => {
        const newMonthId = prev === 12 ? 1 : prev + 1;
        return newMonthId;
      });
    }
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
        // onPress={() => {}}
      />
    );
  };

  const month: any = datas.months.find(month => month.value === selectMonth);
  return (
    <Container>
      <Appbar title="Budget" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          paddingBottom: 10,
        }}>
        <Icons
          name="arrow-back-ios"
          color={'#000'}
          size={20}
          onPress={decreamentMounth}
        />
        <Texts>{month?.label}</Texts>
        <Icons
          name="arrow-forward-ios"
          color={'#000'}
          size={20}
          onPress={increamentMounth}
        />
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
          <Nodata
            loading={loading}
            title={'No Data'}
            message={'No data budget found'}
          />
        )}
      />
      <Floating onPress={() => refForm.current.open()} />

      <BudgetForm refForm={refForm} refresh={fetchData} />
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Budget);

const styles = StyleSheet.create({});
