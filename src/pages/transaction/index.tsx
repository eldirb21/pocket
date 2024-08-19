import {
  FlatList,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Appbar, Container, Icons, Texts} from '@atoms';
import {Avatar, Image} from '@rneui/themed';
import {colors, fonts, scale, verticalScale} from '@constants';

type Props = {};

const Transaction = (props: Props) => {
  const renderItem = ({item, index}) => {
    return (
      <View
        style={[
          {
            backgroundColor: '#FFF',
            margin: scale(8),
            marginBottom: 0,
            padding: scale(8),
            borderRadius: 8,
          },
          styles.shadow,
        ]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Avatar
              size={'medium'}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
              }}
              rounded
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
              }}>
              <Icons name="circle" size={fonts.size.font12} color={'green'} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginLeft: 10,
              flex: 1,
            }}>
            <View>
              <Texts>Elezabeth</Texts>
              <Texts>52 menit ago</Texts>
            </View>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                borderWidth: 1,
                borderColor: colors.borderColor,
                padding: 8,
                paddingVertical: 3,
              }}>
              <Texts>Following</Texts>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <Image
            style={{
              height: verticalScale(160),
              borderRadius: 8,
            }}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fWaoLfFtT-_KF5jPJ4sehcBZYjrh-fbkXw&s',
            }}
          />
          <View style={{marginTop: 8}}>
            <Texts numberOfLines={3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ut mollis dolor. Nullam erat lacus, rutrum a risus
              quis, ornare bibendum neque. Interdum et malesuada fames ac ante
              ipsum primis in faucibus.
            </Texts>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: scale(8),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icons name="share" size={fonts.size.font14} />
              <Texts style={{marginLeft: 4}}>20</Texts>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: scale(10),
                }}>
                <Icons
                  type="AntDesign"
                  name={true ? 'like1' : 'like2'}
                  size={fonts.size.font14}
                  color={'#000'}
                />
                <Texts style={{marginLeft: 4}}>20</Texts>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icons
                  type="Fontisto"
                  name="commenting"
                  size={fonts.size.font12}
                />
                <Texts style={{marginLeft: 4}}>20</Texts>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <Container>
      <Appbar
        title="Media"
        onCamera={() => {}}
        onSearch={() => {}}
        onMenu={() => {}}
      />

      <View
        style={{
          paddingVertical: scale(4),
        }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}
          style={{
            flexWrap: 'wrap-reverse',
          }}>
          {[
            'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
            'https://randomuser.me/api/portraits/men/35.jpg',
            'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
            'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
            'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
            'https://randomuser.me/api/portraits/men/35.jpg',
            'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
            'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
            'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
            'https://randomuser.me/api/portraits/men/35.jpg',
            'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
            'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
          ].map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  marginLeft: scale(8),
                  alignItems: 'center',
                }}>
                <Avatar
                  containerStyle={{
                    borderWidth: 4,
                    borderColor: colors.tint,
                  }}
                  size={68}
                  source={{uri: item}}
                  rounded
                />
                <Texts style={{fontSize: fonts.size.font10}}>Joko Widodo</Texts>
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: colors.borderColor,
          margin: scale(8),
          borderRadius: 20,
          padding: scale(4),
          paddingHorizontal: scale(10),
        }}>
        <Icons type="Ionicons" name="camera" size={fonts.size.font16} />
        <TextInput
          style={{
            margin: 0,
            padding: 0,
            marginLeft: scale(5),
          }}
          placeholder="Message"
        />
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingBottom: scale(10),
        }}
      />
    </Container>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
});
