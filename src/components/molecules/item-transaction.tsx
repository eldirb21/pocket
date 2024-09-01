import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icons, Texts} from '@atoms';
import {fonts, scale} from '@constants';
import moment from 'moment-timezone';
import {func} from '@utils';

type Props = {
  onPress?: () => void;
  subject?: any;
  desc?: any;
  nominal?: any;
  date?: any;
  type?: any;
  category?: any;
};

const ItemTransaction = ({
  onPress,
  date,
  desc,
  nominal,
  subject,
  type,
  category,
}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.item}>
      <View
        style={{
          backgroundColor: func.category(category)?.shadow,
          padding: scale(10),
          borderRadius: 10,
          marginRight: scale(10),
        }}>
        <Icons name="shop" size={fonts.size.font18} />
      </View>
      <View style={{flex: 1}}>
        <Texts style={styles.subject}>{subject}</Texts>
        <Texts style={{textTransform: 'capitalize'}}>{desc}</Texts>
      </View>
      <View style={styles.right}>
        <Texts
          style={{
            color: func.category(category)?.color,
            ...styles.nominal,
          }}>
          Rp.{func.numbToRupiah(nominal)}
        </Texts>
        <Texts>{moment(date).format('hh:mma')}</Texts>
      </View>
    </TouchableOpacity>
  );
};

export default ItemTransaction;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(10),
  },
  nominal: {
    fontFamily: fonts.type.poppinsMedium,
    marginBottom: 0,
  },
  right: {alignItems: 'flex-end'},
  subject: {
    fontFamily: fonts.type.poppinsMedium,
    textTransform: 'capitalize',
    marginBottom: 0,
  },
});
