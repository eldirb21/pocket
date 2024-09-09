import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {Appbar, Container, Icons, Spinner, Texts} from '@atoms';
import {Avatar} from '@rneui/themed';
import {colors, fonts, scale, toasts} from '@constants';
import {datas} from '@utils';
import {connect, useDispatch} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '@stores/store.selector';
import {useIsFocused} from '@react-navigation/native';

type Props = {
  [x: string]: any;
};

const Profile = (props: Props) => {
  const {logon, logoutStatus, loading: logoutLoading} = props.logon;
  const {profile, loading, error} = props.profile;
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);
  const fetchData = () => props.getProfile();

  useEffect(() => {
    if (logoutStatus) {
      toasts.success('Logout Successfully');
      dispatch({type: 'RESET_REDUCER'});
      setTimeout(() => {
        props.navigation.replace('AuthEmail');
      }, 300);
    }
  }, [logoutStatus]);

  const handlerMenu = (item: any) => {
    if (item.label === 'Logout') {
      props.doLogout();
    } else {
      props.navigation.navigate(item.label);
    }
  };

  return (
    <Container>
      <Spinner visible={logoutLoading} />
      <Appbar
        title="Profile"
        centered
        onEdit={() => props.navigation.navigate('ProfileEdit')}
      />

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
              textTransform: 'capitalize',
            }}>
            {profile?.name}
          </Texts>
          <Texts
            style={{
              color: colors.textGrey,
            }}>
            {profile?.phone}
          </Texts>
        </View>
      </View>

      <View style={styles.menu}>
        {datas.menuProfile.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => handlerMenu(item)}
              style={styles.menuItem}
              key={index}>
              <View
                style={{
                  backgroundColor: item.background,
                  ...styles.iconContainer,
                }}>
                <Icons
                  type={item?.type || 'Ionicons'}
                  name={item.icon}
                  size={fonts.size.font20}
                  color={item.color}
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  menu: {
    backgroundColor: colors.gray,
    flex: 1,
    padding: scale(20),
    paddingTop: 0,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(10),
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
  },
  iconContainer: {
    padding: scale(10),
    borderRadius: 10,
    marginRight: scale(10),
  },
});
