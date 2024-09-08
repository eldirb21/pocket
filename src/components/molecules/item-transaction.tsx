import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icons, Texts} from '@atoms';
import {colors, fonts, scale} from '@constants';
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
          backgroundColor: func.types(type)?.shadow,
          padding: scale(6),
          borderRadius: 10,
          marginRight: scale(10),
        }}>
        {func.types(type)?.icon}
      </View>
      <View style={{flex: 1}}>
        <Texts style={styles.subject}>{subject}</Texts>
        <Texts style={{textTransform: 'capitalize'}}>{desc}</Texts>
      </View>
      <View style={styles.right}>
        <Texts
          style={{
            color: func.types(type)?.color,
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
    marginVertical: scale(0),
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
    paddingVertical: scale(15),
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
