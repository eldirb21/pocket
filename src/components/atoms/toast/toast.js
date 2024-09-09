import {colors, verticalScale} from '@constants';
import React, {Component} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Modal,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const defaultColor = '#1f3676';
const defaultBackgroundColor = '#1da1f2';
const defaultTimeColor = '#122459';
const defaultPosition = 'bottom';

class Toast extends Component {
  static toastInstance;
  toastQueue = [];

  constructor(props) {
    super(props);

    this.width =
      Platform.OS === 'android'
        ? Dimensions.get('screen').width
        : Dimensions.get('window').width;
    this.defaultState = {
      color: defaultColor,
      modalVisible: false,
      timeColor: defaultTimeColor,
      isTiming: false,
      position: defaultPosition,
      start: false,
      minHeight: verticalScale(100),
      statusBarHidden: false,
      statusBarAndroidHidden: true,
      statusBarAppleHidden: false,
      statusBarTranslucent: false,
      statusBarAnimation: true,
      statusBarType: 'default',
      hiddenDuration: 200,
      startDuration: 200,
      onOpen: false,
      onOpenComplete: false,
      onClose: false,
      onCloseComplete: false,
      starting: false,
    };

    this.state = {
      ...this.defaultState,
      toast: new Animated.Value(-this.getHeight()),
      time: new Animated.Value(0),
    };
  }

  static show({...config}) {
    this.toastInstance.start(config);
  }

  static hide() {
    this.toastInstance.hideToast();
  }

  getBarHeight() {
    return getStatusBarHeight();
  }

  getHeight() {
    return Platform.OS === 'android'
      ? Dimensions.get('window').height
      : Dimensions.get('window').height;
  }

  start({...config}) {
    // Yeni toast mesajlarını kuyruğa ekleyin
    if (this.state.starting) {
      // Eğer zaten bir toast mesajı gösteriliyorsa, yeni mesajı kuyruğa ekleyin
      this.toastQueue.push(config);
    } else {
      // Toast mesajını gösterin
      this.setState(
        {
          ...this.defaultState,
          modalVisible: true,
          title: config.title || false,
          text: config.text || false,
          titleTextStyle: config.titleTextStyle || false,
          descTextStyle: config.descTextStyle || false,
          backgroundColor: config.backgroundColor
            ? config.backgroundColor
            : defaultBackgroundColor,
          timeColor: config.timeColor ? config.timeColor : defaultTimeColor,
          isTiming: config.isTiming ? config.isTiming : false,
          position: config.position ? config.position : defaultPosition,
          icon: config.icon || false,
          timing: config.timing || 500,
          statusBarHidden: config.statusBarHidden || false,
          statusBarAndroidHidden:
            typeof config.statusBarAndroidHidden === 'undefined'
              ? true
              : config.statusBarAndroidHidden,
          statusBarAppleHidden: config.statusBarAppleHidden || false,
          statusBarTranslucent: config.statusBarTranslucent || false,
          statusBarAnimation:
            typeof config.statusBarAnimation !== 'undefined'
              ? config.statusBarAnimation
              : true,
          statusBarType: config.statusBarType || 'dark-content',
          onOpen: config.onOpen || false,
          onOpenComplete: config.onOpenComplete || false,
          onClose: config.onClose || false,
          onCloseComplete: config.onCloseComplete || false,
          type: config.type,
          start: true,
          starting: true,
        },
        () => {
          if (typeof this.state.onOpen === 'function') {
            this.state.onOpen();
          }
          this.runStart();
        },
      );
    }
  }

  runStart() {
    const {minHeight, position, startDuration} = this.state;
    let toValue;
    if (position === 'top') {
      toValue = 0;
    } else if (position === 'bottom') {
      toValue = this.getHeight() - minHeight;
    }
    this.setState(
      {
        start: false,
        toast: new Animated.Value(
          position === 'top' ? -minHeight : this.getHeight(),
        ),
      },
      () => {
        Animated.spring(this.state.toast, {
          toValue: toValue,
          bounciness: 0,
          useNativeDriver: true,
          easing: Easing.linear,
          duration: startDuration,
        }).start(() => {
          if (typeof this.state.onOpenComplete === 'function') {
            this.state.onOpenComplete();
          }
          this.runTiming();
        });
      },
    );
  }

  runTiming() {
    const {timing} = this.state;
    // Yeni toast için zaman değerini sıfırlayın
    this.state.time.setValue(0);
    Animated.timing(this.state.time, {
      toValue: -this.width,
      duration: timing,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => this.hideToast());
  }

  hideToast() {
    if (typeof this.state.onClose === 'function') {
      this.state.onClose();
      this.setState({
        modalVisible: false,
      });
    }
    const {minHeight, onCloseComplete} = this.state;
    let toValue = 0;
    if (this.state.position === 'top') {
      toValue = -(minHeight + 10);
    } else if (this.state.position === 'bottom') {
      toValue = this.getHeight() + this.getBarHeight() + minHeight;
    }
    Animated.sequence([
      Animated.timing(this.state.toast, {
        toValue: toValue,
        duration: this.state.hiddenDuration,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.time, {
        toValue: 0,
        duration: 0,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => {
      this.setState(
        {
          statusBarTranslucent: false,
          statusBarHidden: false,
          starting: false,
          modalVisible: false,
          toast: new Animated.Value(-(this.getHeight() + this.getBarHeight())),
        },
        () => {
          if (onCloseComplete && typeof onCloseComplete === 'function') {
            onCloseComplete();
          }
          // Gizlendikten sonra kuyrukta bekleyen mesajları kontrol edin
          if (this.toastQueue.length > 0) {
            const nextToast = this.toastQueue.shift();
            this.start(nextToast);
          }
        },
      );
    });
  }

  render() {
    let {
      modalVisible,
      title,
      text,
      icon,
      backgroundColor,
      timeColor,
      isTiming,
      position,
      titleTextStyle,
      descTextStyle,
      minHeight,
      start,
      starting,
      statusBarTranslucent,
      statusBarAnimation,
      statusBarType,
      statusBarHidden,
      statusBarAndroidHidden,
      statusBarAppleHidden,
    } = this.state;
    if (
      ((Platform.OS === 'android' && statusBarAndroidHidden === true) ||
        (Platform.OS === 'ios' && statusBarAppleHidden === true)) &&
      position === 'top'
    ) {
      statusBarHidden = true;
    }

    let exStyle = {};
    if (Platform.OS === 'ios') {
      if (position === 'top') {
        exStyle = {paddingTop: this.getBarHeight()};
      } else if (position === 'bottom') {
        exStyle = {
          paddingBottom: isIPhoneWithMonobrow() ? 10 : 0,
        };
      }
    } else if (Platform.OS === 'android') {
      if (position === 'bottom') {
        exStyle = {
          paddingBottom: this.getBarHeight(),
        };
      }
    }

    return (
      <Modal testID="Modal" transparent visible={modalVisible}>
        {starting && (
          <StatusBar
            // hidden={statusBarHidden}
            // animated={statusBarAnimation}
            // translucent={statusBarTranslucent}
            // barStyle={statusBarType}
            backgroundColor={backgroundColor || colors.gray}
          />
        )}
        <Animated.View
          ref={c => (this._root = c)}
          style={[
            styles.toast,
            {
              zIndex: 999,
              width: this.width,
              minHeight: minHeight / 1.5,
              backgroundColor: backgroundColor,
              transform: [{translateY: this.state.toast}],
            },
            !starting ? {display: 'none'} : {},
          ]}>
          <Animated.View
            style={[
              {
                flexDirection: 'row',
                justifyContent: 'center',
                flex: 1,
              },
              exStyle,
            ]}
            onLayout={event => {
              const height = event.nativeEvent.layout.height;
              if (start) {
                this.setState(
                  {
                    minHeight: height + 10,
                  },
                  () => {
                    this.runStart();
                  },
                );
              }
            }}>
            {icon && <View style={[styles.iconStatus]}>{icon}</View>}
            <View style={[styles.content]}>
              {title && title.length > 0 && (
                <Text style={[styles.title, titleTextStyle]}>{title}</Text>
              )}
              {text && text.length > 0 && (
                <Text style={[styles.subtitle, descTextStyle]}>{text}</Text>
              )}
            </View>
            {isTiming && (
              <Animated.View
                style={[
                  styles.timing,
                  {
                    backgroundColor: timeColor,
                    transform: [{translateX: this.state.time}],
                  },
                  position === 'top' ? {bottom: 0} : {top: 0},
                ]}
              />
            )}
          </Animated.View>
        </Animated.View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 0,
    shadowColor: defaultBackgroundColor,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    borderWidth: 0,
    zIndex: 6,
  },
  timing: {
    height: 5,
    width: '100%',
    backgroundColor: defaultTimeColor,
    position: 'absolute',
  },
  content: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    marginVertical: 10,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    marginTop: 5,
    fontSize: 13,
    color: '#fff',
    fontWeight: '400',
  },
  img: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
  },
  iconStatus: {
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Toast;

const STATUSBAR_DEFAULT_HEIGHT = 20;
const STATUSBAR_X_HEIGHT = 44;
const STATUSBAR_IP12_HEIGHT = 47;
const STATUSBAR_IP12MAX_HEIGHT = 47;
const STATUSBAR_IP14PRO_HEIGHT = 49;

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const IP12_WIDTH = 390;
const IP12_HEIGHT = 844;

const IP12MAX_WIDTH = 428;
const IP12MAX_HEIGHT = 926;

const IP14PRO_WIDTH = 393;
const IP14PRO_HEIGHT = 852;

const IP14PROMAX_WIDTH = 430;
const IP14PROMAX_HEIGHT = 932;

const {height: W_HEIGHT, width: W_WIDTH} = Dimensions.get('window');

let statusBarHeight = STATUSBAR_DEFAULT_HEIGHT;

let isIPhoneWithMonobrow_v = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
  if (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) {
    statusBarHeight = STATUSBAR_X_HEIGHT;
    isIPhoneWithMonobrow_v = true;
  } else if (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT) {
    statusBarHeight = STATUSBAR_X_HEIGHT;
    isIPhoneWithMonobrow_v = true;
  } else if (W_WIDTH === IP12_WIDTH && W_HEIGHT === IP12_HEIGHT) {
    statusBarHeight = STATUSBAR_IP12_HEIGHT;
    isIPhoneWithMonobrow_v = true;
  } else if (W_WIDTH === IP12MAX_WIDTH && W_HEIGHT === IP12MAX_HEIGHT) {
    statusBarHeight = STATUSBAR_IP12MAX_HEIGHT;
    isIPhoneWithMonobrow_v = true;
  } else if (W_WIDTH === IP14PROMAX_WIDTH && W_HEIGHT === IP14PROMAX_HEIGHT) {
    statusBarHeight = STATUSBAR_IP14PRO_HEIGHT;
    isIPhoneWithMonobrow_v = true;
  } else if (W_WIDTH === IP14PRO_WIDTH && W_HEIGHT === IP14PRO_HEIGHT) {
    statusBarHeight = STATUSBAR_IP14PRO_HEIGHT;
    isIPhoneWithMonobrow_v = true;
  }
}

export const isIPhoneWithMonobrow = () => isIPhoneWithMonobrow_v;

export function getStatusBarHeight(skipAndroid = false) {
  return Platform.select({
    ios: statusBarHeight,
    android: skipAndroid ? 0 : StatusBar.currentHeight,
    default: 0,
  });
}
