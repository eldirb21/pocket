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
  const progres: any = parseFloat(persen)?.toFixed(2);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.card, styles.shadow]}>
      <View style={styles.title}>
        <Icons name="circle" size={14} color={'red'} />
        <Texts style={{marginLeft: 5}}>{category}</Texts>
      </View>
      <Texts style={styles.remain}>Remaining Rp{remain}</Texts>

      <Progress.Bar
        height={moderateVerticalScale(8)}
        progress={parseFloat(progres || 0)}
        width={(widthDimension * 82) / 100}
        color={minus ? 'red' : 'blue'}
      />

      <Texts style={{marginTop: 4}}>
        Rp{func.numbToRupiah(budgetExhausted)} of Rp
        {func.numbToRupiah(nominal)}
      </Texts>
      {minus && <Texts style={{color: 'red'}}>You’ve exceed the limit!</Texts>}
    </TouchableOpacity>
  );
};

export default ItemBudget;

const styles = StyleSheet.create({
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
  card: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFF',
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
