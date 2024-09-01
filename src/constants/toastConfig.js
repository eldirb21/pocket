import {colors, fonts, fontType, scale} from '@constants';
import {Icons, Texts, Popup, SPSheet, Toast} from '@atoms';
import {View} from 'react-native';

const toasts = {
  success({message, title, bottom = false}) {
    Toast.show({
      title: title,
      text: message,
      backgroundColor: '#22bb33',
      isTiming: false,
      icon: <Icons name={'check'} color={'#fff'} size={32} />,
      position: bottom ? 'bottom' : 'top',
    });
  },
  error({message, title, bottom = false}) {
    Toast.show({
      title: title,
      text: message,
      backgroundColor: '#bb2124',
      isTiming: false,
      icon: (
        <Icons type="Ionicons" name={'close-circle'} color={'#fff'} size={32} />
      ),
      position: bottom ? 'bottom' : 'top',
    });
  },
  info({message, title, bottom = false}) {
    Toast.show({
      title: title,
      text: message,
      backgroundColor: '#aaaaaa',
      isTiming: false,
      icon: (
        <Icons
          type="MaterialCommunityIcons"
          name={'information-variant'}
          color={'#fff'}
          size={32}
        />
      ),
      position: bottom ? 'bottom' : 'top',
    });
  },
  warning({message, title, bottom = false}) {
    Toast.show({
      title: title,
      text: message,
      backgroundColor: '#f0ad4e',
      isTiming: false,
      icon: (
        <Icons
          type="Ionicons"
          name={'warning-outline'}
          color={'#fff'}
          size={32}
        />
      ),
      position: bottom ? 'bottom' : 'top',
    });
  },
  popup(
    message = 'access your camera roll to upload and save your profile picture and attachment fields',
    callback = () => {},
    cancelCallback = () => {},
    isAllow = true,
    icon = 'location-outline', //location-outline|camera-outline|image-outline|notifications-outline
  ) {
    const bodyComponent = () => (
      <View style={{alignItems: 'center', marginTop: scale(-15)}}>
        <Icons type="Ionicons" name={icon} size={25} color={'#1b74e8'} />
        <Texts style={{textAlign: 'center', marginTop: scale(15)}}>
          {message}
        </Texts>
      </View>
    );

    Popup.show({
      type: 'confirm',
      bodyComponent: bodyComponent,
      bodyComponentForce: true,
      buttonText: 'Settings',
      confirmText: 'Deny',
      background: '#646464',
      iconEnabled: false,
      callback: () => {
        callback(); // Eksekusi callback
        Popup.hide();
      },
      cancelCallback: () => {
        cancelCallback(); // Eksekusi cancelCallback
        Popup.hide();
      },
      buttonContentStyle: {
        marginTop: scale(20),
      },

      okButtonStyle: {
        backgroundColor: 'transparent',
        borderTopWidth: 1,
        borderColor: colors.colorBorder,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        marginBottom: 0,
      },

      okButtonTextStyle: {
        color: '#1b74e8',
        fontSize: fonts.font12,
        fontFamily: fontType.regular,
      },
      confirmButtonStyle: {
        backgroundColor: 'transparent',
        borderTopWidth: 1,
        borderColor: colors.colorBorder,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        marginBottom: 0,
      },
      confirmButtonTextStyle: {
        color: '#1b74e8',
        fontSize: fonts.font12,
        fontFamily: fontType.regular,
      },
      containerStyle: {
        padding: 0,
        margin: 0,
      },
      modalContainerStyle: {
        width: '80%',
        padding: 0,
        margin: 0,
      },
    });
  },
};

export default toasts;
