import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

import {func} from '@utils';
import {ItemHomeTop, ItemTransaction} from '@molecules';
import {fonts, heightDimension, scale} from '@constants';
import {Container, Floating, Nodata, Texts} from '@atoms';
import TransactionForm from '@pages/transaction/transactionForm';
import {mapDispatchToProps, mapStateToProps} from '@stores/store.selector';

type Props = {
  [x: string]: any;
};
const Home = (props: Props) => {
  const refForm = useRef<any>(null);
  const {transactions, totals} = props.transaction;
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  const fetchData = () => {
    props.getTotal();
    props.getListTransaction({
      page: 1,
      pageSize: 10,
    });
  };

  return (
    <Container>
      <Container animated scrolled>
        <ItemHomeTop
          date="September"
          balance={func.balances(totals?.totalIncomes, totals?.totalExpenses)}
          income={totals?.totalIncomes}
          expences={totals?.totalExpenses}
        />

        {/* <PieChart data={data} donut />
        <LineChart data={data} /> */}
        <View style={styles.containerList}>
          <View style={styles.head}>
            <Texts style={styles.label}>Recent Transaction</Texts>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => props.navigation.navigate('Transaction')}
              style={styles.btnSeeAll}>
              <Texts>See All</Texts>
            </TouchableOpacity>
          </View>

          <View>
            {transactions?.items <= 0 ? (
              <Nodata
                height={heightDimension / 2}
                title={'No Data'}
                message={'No data transaction found'}
              />
            ) : (
              transactions?.items?.map((item: any, index: any) => {
                return (
                  <ItemTransaction
                    key={index}
                    onPress={() => props.navigation.navigate('')}
                    subject={item.subject}
                    desc={item.desc}
                    nominal={item.nominal}
                    date={item.date}
                    type={item.type}
                    category={item.category}
                  />
                );
              })
            )}
          </View>
        </View>
      </Container>

      <Floating onPress={() => refForm.current.open()} />

      <TransactionForm refForm={refForm} refresh={fetchData} />
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  containerList: {
    paddingHorizontal: scale(20),
    marginTop: scale(20),
    flex: 1,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontFamily: fonts.type.poppinsMedium,
    fontWeight: '700',
  },
  btnSeeAll: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    paddingVertical: scale(2),
    paddingHorizontal: scale(10),
    borderRadius: 10,
  },
});
