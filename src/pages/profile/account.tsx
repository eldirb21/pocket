import {StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import {Appbar, Buttons, Container, Icons, RBSheet, Texts} from '@atoms';
import {colors, fonts, heightDimension, scale} from '@constants';

type Props = {
  [x: string]: any;
};

const Account = (props: Props) => {
  const refRBSheet = useRef();

  return (
    <Container>
      <Appbar
        title="Account"
        centered
        onBack={() => props.navigation.goBack()}
      />

      <View>
        {[1, 2, 3, 4].map((x, i) => {
          return (
            <View
              key={i}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 20,
                borderBottomWidth: 1,
                borderColor: colors.borderColor,
              }}>
              <View
                style={{
                  borderRadius: 10,
                  padding: 10,
                  backgroundColor: 'grey',
                }}>
                <Icons name="home" size={fonts.size.font20} />
              </View>
              <View
                style={{
                  flex: 1,
                  marginLeft: scale(10),
                }}>
                <Texts>OVO</Texts>
              </View>
              <Texts>Rp1000000</Texts>
            </View>
          );
        })}
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
        }}>
        <Buttons
          title="Add new wallet"
          onPress={() => refRBSheet.current.open()}
          leftIcon={
            <Icons name="add" color={'#FFF'} size={fonts.size.font16} />
          }
        />
      </View>

      <RBSheet
        ref={refRBSheet}
        height={heightDimension}
        useNativeDriver={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        <View>
          <Texts>Hallo</Texts>
        </View>
      </RBSheet>
    </Container>
  );
};

export default Account;

const styles = StyleSheet.create({});
