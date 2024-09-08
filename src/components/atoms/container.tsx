import React from 'react';
import {StyleSheet, Animated, View, StatusBar} from 'react-native';
import {colors} from '@constants';
import {useAnimation} from '@hooks';
import {Platform} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';

type Props = {
  children: any;
  scrolled?: boolean;
  style?: any;
  statusbar?: boolean;
  bgColor?: any;
  barStyle?: 'dark-content' | 'light-content';
  refreshControl?: any;
  animated?: boolean;
  onEndReached?: (item: any) => void;
  scrollEventThrottle?: any;
  nestedScrollEnabled?: boolean;
  onScroll?: () => void;
};

const Container = (props: Props) => {
  const {
    children,
    scrolled,
    style,
    statusbar,
    bgColor,
    barStyle,
    refreshControl,
    animated = false,
    onEndReached,
    scrollEventThrottle,
    nestedScrollEnabled = false,
    onScroll,
  } = props;

  const slideAnim = useAnimation.useEffectAnimation(animated);

  return (
    <Animated.View
      style={[
        styles.container,
        animated && {transform: [{translateY: slideAnim}]},
      ]}>
      {statusbar && (
        <StatusBar
          backgroundColor={bgColor ? bgColor : colors.white}
          barStyle={barStyle ? barStyle : 'dark-content'}
        />
      )}
      {scrolled ? (
        <KeyboardAvoidingView
          style={{flexGrow: 1,zIndex:999}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
          <Animated.ScrollView
            onScroll={onScroll}
            contentContainerStyle={[styles.scrolled, style]}
            showsVerticalScrollIndicator={false}
            refreshControl={refreshControl}
            onMomentumScrollEnd={onEndReached}
            scrollEventThrottle={scrollEventThrottle}
            nestedScrollEnabled={nestedScrollEnabled}
            keyboardShouldPersistTaps="always">
            <View>{children}</View>
          </Animated.ScrollView>
        </KeyboardAvoidingView>
      ) : (
        <View style={[styles.container, style]}>{children}</View>
      )}
    </Animated.View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.white,
  },
  scrolled: {
    flexGrow: 1,
    backgroundColor: colors.white,
    zIndex:999
  },
});
