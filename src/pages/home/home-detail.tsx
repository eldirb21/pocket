import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {Appbar, Container, Icons, Texts} from '@atoms';

import {colors} from '@constants';
import {useFocusEffect} from '@react-navigation/native';

type Props = {[x: string]: any};

const HomeDetail = (props: Props) => {
  const item = props.route.params;

  const flatListRef = useRef<FlatList>(null);

  const chats = [{a: ''}, {a: ''}, {a: ''}, {a: ''}, {a: ''}, {a: ''}];

  //paling atas
  useFocusEffect(
    React.useCallback(() => {
      flatListRef.current?.scrollToOffset({animated: true, offset: 0});
    }, []),
  );

  //paling bawah
  useFocusEffect(
    React.useCallback(() => {
      flatListRef.current?.scrollToEnd();
    }, []),
  );

  const renderItem = ({item, index}: any) => {
    return index % 2 === 0 ? (
      <View
        key={index}
        style={{
          paddingTop: 20,
          paddingHorizontal: 20,
          maxWidth: '80%',
        }}>
        <View
          style={{
            backgroundColor: colors.chatFrombg,
            padding: 20,
            borderRadius: 20,
            borderBottomLeftRadius: 0,
            marginBottom: 8,
          }}>
          <Texts>Hi! Thanks for reaching out. What can I get for you?</Texts>
        </View>
        <Texts>02:58 PM</Texts>
      </View>
    ) : (
      <View
        key={index}
        style={{
          paddingTop: 20,
          paddingHorizontal: 20,
          maxWidth: '80%',
          alignSelf: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            backgroundColor: colors.chatTobg,
            padding: 20,
            borderRadius: 20,
            borderBottomRightRadius: 0,
            marginBottom: 8,
          }}>
          <Texts>
            I'm thinking about getting a large pepperoni pizza and some garlic
            bread.
          </Texts>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icons
            type="Ionicons"
            name={true ? 'checkmark-done' : 'checkmark'}
            size={16}
            color={'green'}
          />
          <Texts style={{marginLeft: 5}}>02:58 PM</Texts>
        </View>
      </View>
    );
  };

  return (
    <Container
      style={{
        backgroundColor: colors.chatBackground,
        flex: 1,
      }}>
      <Appbar
        onBack={() => props.navigation.goBack()}
        avatar={
          'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg'
        }
        title={item?.name}
        centered
        onMenu={() => {}}
      />

      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={chats}
        renderItem={renderItem}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd()}
      />

      <View
        style={{
          backgroundColor: colors.backgroundColor,
          padding: 15,
          paddingVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            borderRadius: 20,
            backgroundColor: colors.disableColor,
            paddingRight: 10,
          }}>
          <TextInput
            placeholder="Message..."
            placeholderTextColor={colors.tabIconDefault}
            // multiline
            style={{
              textAlignVertical: 'center',
              flex: 1,
              padding: 0,
              margin: 0,
              minHeight: 40,
              borderRadius: 20,
              paddingLeft: 15,
              textDecorationLine: 'none',
              textDecorationStyle: 'dotted',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 40,
              alignSelf: 'flex-end',
            }}>
            <TouchableOpacity
              style={{
                borderRadius: 50,
                height: 30,
                width: 30,
                marginLeft: 6,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icons name="camera-enhance" size={30} color={'green'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderColor: 'green',
                borderRadius: 50,
                borderWidth: 1,
                height: 30,
                width: 30,
                marginLeft: 6,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icons name="add" size={20} color={'green'} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            marginLeft: 10,
            padding: 8,
            borderRadius: 50,
          }}>
          <Icons name="send" size={20} color={colors.textDefault} />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default HomeDetail;

const styles = StyleSheet.create({});
