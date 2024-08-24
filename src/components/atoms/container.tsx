import React from 'react';
import {StyleSheet, Animated, View, StatusBar} from 'react-native';
import {colors} from '@constants';
import {useAnimation} from '@hooks';

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
          backgroundColor={bgColor ? bgColor : colors.bacgroundWhite}
          barStyle={barStyle ? barStyle : 'dark-content'}
        />
      )}
      {scrolled ? (
        <Animated.ScrollView
          onScroll={onScroll}
          contentContainerStyle={[styles.scrolled, style]}
          showsVerticalScrollIndicator={false}
          refreshControl={refreshControl}
          onMomentumScrollEnd={onEndReached}
          scrollEventThrottle={scrollEventThrottle}
          nestedScrollEnabled={nestedScrollEnabled}
          keyboardShouldPersistTaps="always">
          {children}
        </Animated.ScrollView>
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
    backgroundColor: colors.bacgroundWhite,
  },
  scrolled: {
    flexGrow: 1,
    backgroundColor: colors.bacgroundWhite,
  },
});
