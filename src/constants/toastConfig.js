import {colors, fonts, fontType, scale} from '@constants';
import {Popup, SPSheet, Toast} from 'react-native-popup-confirm-toast';
import {Icons, Texts} from '@atoms';
import {View} from 'react-native';

export const toasts = {
  success(message, title, isbottom = false) {
    Toast.show({
      icon: <Icons name="home" />,
      title: title ? title : 'Success',

      text: message || 'success!',
      backgroundColor: colors.successBg,
      timeColor: 'transparent',
      timing: 0,

      position: isbottom ? 'bottom' : 'top',
      statusBarType: 'light-content',

      titleTextStyle: {
        fontFamily: fontType.medium,
        fontSize: fonts.font12,
        color: colors.success,
        padding: 0,
        margin: 0,
      },
      descTextStyle: {
        fontFamily: fontType.regular,
        fontSize: fonts.font12,
        color: colors.success,
        padding: 0,
        margin: 0,
      },
    });
  },
  error(message, title, isbottom = false) {
    Toast.show({
      icon: <Icons name="home" />,
      title: title ? title : 'Failed',
      text: message || 'error!',
      backgroundColor: colors.errorBg,
      timeColor: 'transparent',
      timing: 0,
      position: isbottom ? 'bottom' : 'top',
      statusBarType: 'light-content',

      titleTextStyle: {
        fontFamily: fontType.medium,
        fontSize: fonts.font12,
        color: colors.error,
        padding: 0,
        margin: 0,
      },
      descTextStyle: {
        fontFamily: fontType.regular,
        fontSize: fonts.font12,
        color: colors.error,
        padding: 0,
        margin: 0,
      },
    });
  },
  info(message, title, isbottom = false) {
    Toast.show({
      icon: (
        <Icons
          type="MaterialCommunityIcons"
          name="information-variant"
          color={colors.info}
          size={fonts.font26}
        />
      ),
      title: title ? title : 'Info',
      text: message || 'info!',
      backgroundColor: colors.infoBg,
      timeColor: 'transparent',
      timing: 0,
      position: isbottom ? 'bottom' : 'top',
      statusBarType: 'light-content',

      titleTextStyle: {
        fontFamily: fontType.medium,
        fontSize: fonts.font12,
        color: colors.info,
        padding: 0,
        margin: 0,
      },
      descTextStyle: {
        fontFamily: fontType.regular,
        fontSize: fonts.font12,
        color: colors.info,
        padding: 0,
        margin: 0,
      },
    });
  },
  warning(message, title, isbottom = false) {
    Toast.show({
      icon: <Icons name="home" />,
      title: title ? title : 'Warning',
      text: message || 'warning!',
      backgroundColor: colors.warningBg,
      timeColor: 'transparent',
      timing: 0,
      position: isbottom ? 'bottom' : 'top',
      statusBarType: 'light-content',

      titleTextStyle: {
        fontFamily: fontType.medium,
        fontSize: fonts.font12,
        color: colors.warning,
        padding: 0,
        margin: 0,
      },
      descTextStyle: {
        fontFamily: fontType.regular,
        fontSize: fonts.font12,
        color: colors.warning,
        padding: 0,
        margin: 0,
      },
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
