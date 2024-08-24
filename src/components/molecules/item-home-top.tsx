import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Icons, Texts} from '@atoms';
import {colors, fonts, scale} from '@constants';
import {func} from '@utils';
import {IcExpenses, IcIncome} from '@icons';

type Props = {
  date?: any;
  balance?: any;
  income?: any;
  expences?: any;
};

const ItemHomeTop = ({date, balance, expences, income}: Props) => {
  return (
    <View>
      <View style={styles.header}>
        <Icons
          type="Ionicons"
          name="chevron-down"
          size={fonts.size.font18}
          color={colors.black}
        />
        <Texts
          style={{
            fontFamily: fonts.type.poppinsSemiBold,
            fontSize: fonts.size.font14,
            marginLeft: scale(5),
          }}>
          {date}
        </Texts>
      </View>
      <View style={styles.container}>
        <View style={styles.balanceContainer}>
          <Texts>Balance</Texts>
          <Texts style={styles.balance}>
            Rp{func.numbToRupiah(balance, true)}
          </Texts>
        </View>

        <View style={styles.containerContent}>
          <View style={styles.income}>
            <View style={styles.icon}>
              <IcIncome />
            </View>
            <View>
              <Texts style={styles.label}>Income</Texts>
              <Texts style={styles.value}>
                Rp{func.numbToRupiah(income, true)}
              </Texts>
            </View>
          </View>
          <View style={styles.expences}>
            <View style={styles.icon}>
              <IcExpenses />
            </View>
            <View>
              <Texts style={styles.label}>Income</Texts>
              <Texts style={styles.value}>
                Rp{func.numbToRupiah(expences, true)}
              </Texts>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemHomeTop;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    height: scale(40),
    justifyContent: 'center',
    flexDirection: 'row',
  },
  container: {
    alignItems: 'center',
  },
  balanceContainer: {
    marginBottom: scale(20),
    alignItems: 'center',
  },
  balance: {
    fontWeight: '700',
    fontSize: fonts.size.font20,
  },
  containerContent: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  income: {
    backgroundColor: '#00A86B',
    padding: scale(10),
    borderRadius: 20,
    flex: 0.48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  expences: {
    backgroundColor: '#FD3C4A',
    padding: scale(10),
    borderRadius: 20,
    flex: 0.48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginRight: scale(8),
    padding: scale(5),
  },
  label: {
    color: '#FFF',
  },
  value: {
    color: '#FFF',
    fontFamily: fonts.type.poppinsSemiBold,
  },
});
