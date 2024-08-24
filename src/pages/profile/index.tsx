import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Appbar, Container, Icons, Texts} from '@atoms';
import {Avatar} from '@rneui/themed';
import {colors, fonts, scale} from '@constants';

type Props = {
  [x: string]: any;
};

const Profile = (props: Props) => {
  return (
    <Container>
      <Appbar title="Profile" centered onEdit={() => {}} />

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
            alignItems: 'center',
          }}>
          <Texts
            style={{
              fontWeight: '700',
              marginBottom: 5,
            }}>
            Tom Cruise
          </Texts>
          <Texts
            style={{
              color: colors.textGrey,
            }}>
            082342424223343
          </Texts>
        </View>
      </View>

      <View
        style={{
          backgroundColor: colors.gray,
          flex: 1,
          padding: scale(20),
          paddingTop: 0,
        }}>
        {[
          {
            icon: 'wallet-outline',
            label: 'Account',
          },
          {
            type: 'AntDesign',
            icon: 'upload',
            label: 'Export Data',
          },
          {
            icon: 'language',
            label: 'Language',
          },
          {
            icon: 'moon-outline',
            label: 'Mode',
          },
          {type: 'AntDesign', icon: 'logout', label: 'Logout'},
        ].map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate(item.label)}
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: scale(10),
                borderBottomWidth: 1,
                borderColor: colors.borderColor,
              }}>
              <View
                style={{
                  backgroundColor: 'grey',
                  padding: scale(10),
                  borderRadius: 10,
                  marginRight: scale(10),
                }}>
                <Icons
                  type={item?.type || 'Ionicons'}
                  name={item.icon}
                  size={fonts.size.font20}
                />
              </View>
              <Texts>{item.label}</Texts>
            </TouchableOpacity>
          );
        })}
      </View>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({});
