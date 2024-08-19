import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Container, Texts} from '@atoms';
import {fonts, moderateScale, scale} from '@constants';

const Home = () => {
  return (
    <Container>
      <View
        style={{
          // flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'center',
        }}>
        <View>
          <Texts>Balance</Texts>
          <Texts
            style={{
              fontWeight: '700',
              fontSize: fonts.size.font20,
            }}>
            9400
          </Texts>
        </View>

        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              backgroundColor: '#00A86B',
              padding: scale(10),
              borderRadius: 20,
              width: moderateScale(110),
            }}>
            <Texts>Income</Texts>
            <Texts>5000</Texts>
          </View>
          <View
            style={{
              backgroundColor: '#FD3C4A',
              padding: scale(10),
              borderRadius: 20,
              width: moderateScale(110),
            }}>
            <Texts>Income</Texts>
            <Texts>5000</Texts>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
