import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Icons, Texts} from '@atoms';
import {colors, fonts, scale} from '@constants';
import {datas, func} from '@utils';
import {IcExpenses, IcIncome} from '@icons';

type Props = {
  date?: any;
  balance?: any;
  income?: any;
  expences?: any;
  onChange?: (item: any) => void;
};

const ItemHomeTop = ({date, balance, expences, income, onChange}: Props) => {
  const [dropdown, setdropdown] = useState(false);
  const handleDropdown = () => setdropdown(!dropdown);
  return (
    <View>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleDropdown}
          style={styles.header}>
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
        </TouchableOpacity>
        {dropdown && (
          <View style={[styles.dropdown, styles.shadow]}>
            <ScrollView>
              {datas.months.map((x, i) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    key={i}
                    onPress={() => {
                      onChange?.(x);
                      handleDropdown();
                    }}
                    style={styles.dropdownItem}>
                    <Texts>{x.label}</Texts>
                    <Icons
                      name="arrow-forward-ios"
                      size={16}
                      color={colors.textGrey}
                    />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        )}
      </View>
      <View style={styles.container}>
        <View style={styles.balanceContainer}>
          <Texts>Balance</Texts>
          <Texts
            style={[
              styles.balance,
              {
                color:
                  parseInt(func.numbToRupiah(balance)) < 0 ? 'red' : '#000',
              },
            ]}>
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
              <Texts style={styles.label}>Expenses</Texts>
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
    textTransform: 'lowercase',
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
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  dropdown: {
    backgroundColor: '#FFF',
    position: 'absolute',
    left: 20,
    top: 45,
    right: 20,
    zIndex: 999,
    borderRadius: 10,
    height: 150,
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
