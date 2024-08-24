import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import {Container, Floating, Texts} from '@atoms';
import {fonts, scale} from '@constants';
import {datas} from '@utils';
import {ItemHomeTop, ItemTransaction} from '@molecules';
import TransactionForm from '@pages/transaction/transactionForm';

type Props = {
  [x: string]: any;
};
const Home = (props: Props) => {
  const refForm = useRef<any>(null);

  return (
    <Container>
      <Container animated scrolled>
        <ItemHomeTop
          date="September"
          balance={9000000000000}
          income={20000000}
          expences={500000}
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
            {datas.transaction.map((item, index) => {
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
            })}
          </View>
        </View>
      </Container>

      <Floating onPress={() => refForm.current.open()} />

      <TransactionForm refForm={refForm} />
    </Container>
  );
};

export default Home;

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
