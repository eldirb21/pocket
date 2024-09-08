import {FlatList, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Appbar, Container, Nodata} from '@atoms';
import {scale} from '@constants';
import {ItemTransaction} from '@molecules';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '@stores/store.selector';
import {useIsFocused} from '@react-navigation/native';

type Props = {
  [x: string]: any;
};

const Transaction = (props: Props) => {
  const isFocused = useIsFocused();
  const {transactions, loading} = props.transaction;
  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  const fetchData = () => {
    props.getListTransaction({
      page: 1,
      pageSize: 10,
      // search: 'Beli beras',
    });
  };

  const renderItem = ({item, index}: any) => {
    return (
      <ItemTransaction
        key={index}
        onPress={() => props.navigation.navigate('')}
        subject={item.subject}
        desc={item.desc}
        nominal={item.total_with_fee}
        date={item.date}
        type={item.type}
        category={item.category}
      />
    );
  };
  const onSearch = (val: any) => {};
  return (
    <Container>
      <Appbar title="Transaction" />

      <FlatList
        data={transactions?.items}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={() => (
          <Nodata
            loading={loading}
            title={'No Data'}
            message={'No data transaction found'}
          />
        )}
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
  list: {
    padding: scale(15),
  },
});
