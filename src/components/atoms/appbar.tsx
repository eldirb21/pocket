import {
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Texts from './texts';
import Icons from './icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Avatar} from '@rneui/themed';
import {fonts} from '@constants';

type StatusBarProps = {
  animated?: boolean;
  backgroundColor?: string;
  barStyle?: 'dark-content' | 'default' | 'light-content';
  showHideTransition?: 'fade' | 'slide';
  hidden?: boolean;
};

type Props = {
  statusBarProps?: StatusBarProps;
  onBack?: () => void; // Fungsi callback untuk tombol back
  title?: string; // Judul Appbar
  onNotification?: () => void; // Fungsi callback untuk ikon notifikasi
  onSearch?: () => void; // Fungsi callback untuk ikon notifikasi
  onMenu?: () => void; // Fungsi callback untuk ikon notifikasi
  onBarcode?: () => void;
  onCamera?: () => void;
  onEdit?: () => void;
  centered?: boolean;
  avatar?: any;
};

const Appbar: React.FC<Props> = ({
  statusBarProps,
  onBack,
  title,
  onNotification,
  onSearch,
  onMenu,
  onBarcode,
  onCamera,
  onEdit,
  centered,
  avatar,
}) => {
  const insets = useSafeAreaInsets();

  const defaultStatusBarProps: StatusBarProps = {
    animated: true,
    backgroundColor: '#FFF',
    barStyle: 'dark-content',
    showHideTransition: 'slide',
    hidden: false,
  };

  const mergedStatusBarProps = {
    ...defaultStatusBarProps,
    ...statusBarProps,
  };

  const HEIGHT = Platform.OS === 'ios' ? insets.top : 55;
  const HEIGHT_STATUSBAR = Platform.OS === 'ios' ? 0 : 0;

  return (
    <View style={{overflow: 'hidden', paddingBottom: 2}}>
      <View
        style={[
          styles.appBar,
          styles.shadow,
          {
            marginTop: HEIGHT_STATUSBAR,
            height: HEIGHT,
          },
        ]}>
        <StatusBar {...mergedStatusBarProps} />
        {onBack && (
          <TouchableOpacity onPress={onBack} style={styles.arrowback}>
            <Icons name="arrow-back-ios" size={20} color={'#000'} />
          </TouchableOpacity>
        )}
        {onCamera && (
          <TouchableOpacity onPress={onCamera} style={styles.arrowback}>
            <Icons
              type="MaterialCommunityIcons"
              name={'camera-plus-outline'}
              size={fonts.size.font24}
              color={'#000'}
            />
          </TouchableOpacity>
        )}
        {avatar && (
          <View>
            <Avatar source={{uri: avatar}} rounded />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
              }}>
              <Icons name="circle" color={'#000'} />
            </View>
          </View>
        )}
        <Texts style={[styles.title, centered && {textAlign: 'center'}]}>
          {title}
        </Texts>
        {onSearch && (
          <TouchableOpacity onPress={onSearch} style={styles.search}>
            <Icons name={'search'} size={20} color={'#000'} />
          </TouchableOpacity>
        )}
        {onNotification && (
          <TouchableOpacity onPress={onNotification} style={styles.notif}>
            <Icons name={'notifications-none'} size={20} color={'#000'} />
          </TouchableOpacity>
        )}
        {onMenu && (
          <TouchableOpacity onPress={onMenu} style={styles.notif}>
            <Icons
              type="MaterialCommunityIcons"
              name={'dots-vertical'}
              size={20}
              color={'#000'}
            />
          </TouchableOpacity>
        )}

        {onBarcode && (
          <TouchableOpacity onPress={onBarcode} style={styles.notif}>
            <Icons name={'qr-code-scanner'} size={25} color={'#000'} />
          </TouchableOpacity>
        )}
        {onEdit && (
          <TouchableOpacity onPress={onEdit} style={styles.notif}>
            <Icons type="Feather" name={'edit'} size={25} color={'#000'} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Appbar;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  appBar: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  title: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  arrowback: {
    marginRight: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: 'red',
  },
  search: {
    marginLeft: 5,
  },
  notif: {
    marginLeft: 5,
  },
});
