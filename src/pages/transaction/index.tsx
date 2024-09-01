import {FlatList, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Appbar, Container} from '@atoms';
import {scale} from '@constants';
import {ItemTransaction} from '@molecules';
import {datas} from '@utils';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '@stores/store.selector';

type Props = {
  [x: string]: any;
};

const Transaction = (props: Props) => {
  useEffect(() => {
    props.getListTransaction({
      page: 1,
      pageSize: 10, 
    });
  }, []);

  console.log('====================================');
  console.log('');
  console.log('====================================');
  const renderItem = ({item, index}: any) => {
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
  };
  return (
    <Container>
      <Appbar title="Transaction" onSearch={() => {}} />

      <FlatList
        data={datas.transaction}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={{
          padding: scale(15),
        }}
      />
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
});
