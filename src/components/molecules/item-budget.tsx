import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icons, Texts} from '@atoms';
import {func} from '@utils';
import {moderateVerticalScale, widthDimension} from '@constants';
import * as Progress from 'react-native-progress';

type Props = {
  onPress?: () => void;
  category?: any;
  remain?: any;
  persen?: any;
  minus?: any;
  budgetExhausted?: any;
  nominal?: any;
};

const ItemBudget = ({
  budgetExhausted,
  category,
  minus,
  nominal,
  onPress,
  persen,
  remain,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.card}>
      <View style={styles.title}>
        <Icons name="circle" size={14} color={'red'} />
        <Texts style={{marginLeft: 5}}>{category}</Texts>
      </View>
      <Texts style={styles.remain}>Remaining Rp{remain}</Texts>

      <Progress.Bar
        height={moderateVerticalScale(8)}
        progress={persen}
        width={(widthDimension * 90) / 100}
        color={minus ? 'red' : 'blue'}
      />

      <Texts>
        Rp{func.numbToRupiah(budgetExhausted)} of Rp
        {func.numbToRupiah(nominal)}
      </Texts>
      {minus && <Texts style={{color: 'red'}}>You’ve exceed the limit!</Texts>}
    </TouchableOpacity>
  );
};

export default ItemBudget;

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remain: {
    fontWeight: '900',
    marginVertical: 4,
  },
});
