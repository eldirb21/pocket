import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Appbar, Container, Icons, Texts} from '@atoms';
import {Avatar} from '@rneui/themed';
import {colors, fonts, moderateScale, scale} from '@constants';

type Props = {};

const Profile = (props: Props) => {
  return (
    <Container>
      <Appbar title="Profile" onCamera={() => {}} onMenu={() => {}} />

      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          marginVertical: scale(20),
        }}>
        <Avatar
          size={'large'}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
          }}
          containerStyle={{
            borderWidth: 4,
            borderColor: colors.tint,
          }}
          rounded
        />

        <View
          style={{
            marginTop: scale(10),
          }}>
          <Texts
            style={{
              fontWeight: '700',
            }}>
            Tom Cruise
          </Texts>
          <Texts
            style={{
              color: colors.textGrey,
            }}>
            @tomcruise
          </Texts>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '55%',
              marginTop: scale(15),
            }}>
            <View
              style={{
                padding: 4,
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: colors.borderColor,
                borderRadius: 8,
                width: scale(80),
              }}>
              <Icons
                type="AntDesign"
                name="message1"
                size={fonts.size.font14}
              />
              <Texts style={{color: '#000', marginLeft: scale(4)}}>
                Message
              </Texts>
            </View>
            <View
              style={{
                backgroundColor: colors.tint,
                borderRadius: 8,
                padding: 4,
                paddingHorizontal: 10,
                width: scale(80),
                alignItems: 'center',
              }}>
              <Texts style={{color: '#FFF'}}>Follow</Texts>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '80%',
          alignSelf: 'center',
        }}>
        {[
          {
            totalFollow: 1300,
            label: 'Post',
          },
          {
            totalFollow: 1300,
            label: 'Followers',
          },
          {
            totalFollow: 1300,
            label: 'Following',
          },
        ].map((x, i) => {
          return (
            <View
              style={{
                borderRadius: scale(8),
                width: moderateScale(90),
                borderWidth: 1,
                borderColor: colors.borderColor,
                padding: 10,
                alignItems: 'center',
              }}
              key={i}>
              <Texts
                style={{
                  fontSize: fonts.size.font14,
                  textAlign: 'center',
                  fontWeight: '600',
                }}>
                6.3k
              </Texts>
              <Texts style={{color: colors.textTertiary}}>{x.label}</Texts>
            </View>
          );
        })}
      </View>

      <View
        style={{
          width: 0,
          height: 0,
          backgroundColor: 'transparent',
          borderStyle: 'solid',
          borderLeftWidth: 15,
          borderRightWidth: 15,
          borderBottomWidth: 10,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: colors.gray,
          zIndex: -9999,
          alignSelf: 'center',
          marginTop: scale(6),
        }}
      />
      <Container
        style={{
          backgroundColor: colors.gray,
          flex: 1,
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Texts>No Post</Texts>
        </View>
      </Container>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({});
