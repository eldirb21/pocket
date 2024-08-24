import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabs} from './nav-data';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors, fonts, moderateVerticalScale} from '@constants';
import {
  StackCardInterpolatedStyle,
  StackCardInterpolationProps,
} from '@react-navigation/stack';
import {Icons} from '@atoms';

const Tab = createBottomTabNavigator();

function TabBar({state, descriptors, navigation}: any) {
  const scaleAnim = state.routes.map(() => new Animated.Value(1));

  return (
    <View style={[styles.tabContainerSales, styles.shadowTop]}>
      {state.routes.map(
        (route: {key: string | number; name: any}, index: any) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocus = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocus && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          let icon = null;
          switch (label) {
            case 'Home':
              icon = (
                <Icons
                  type="Ionicons"
                  name={isFocus ? 'home' : 'home-outline'}
                  color={isFocus ? colors.tint : '#000'}
                  size={fonts.size.font26}
                />
              );
              break;
            case 'Transaction':
              icon = (
                <Icons
                  name={isFocus ? 'swap-horizontal-circle' : 'swap-horiz'}
                  color={isFocus ? colors.tint : '#000'}
                  size={fonts.size.font26}
                />
              );
              break;
            case 'Budget':
              icon = (
                <Icons
                  type="Ionicons"
                  name={isFocus ? 'pie-chart' : 'pie-chart-outline'}
                  color={isFocus ? colors.tint : '#000'}
                  size={fonts.size.font26}
                />
              );
              break;
            case 'Profile':
              icon = (
                <Icons
                  type="Ionicons"
                  name={isFocus ? 'person-sharp' : 'person-outline'}
                  color={isFocus ? colors.tint : '#000'}
                  size={fonts.size.font26}
                />
              );
              break;

            default:
              break;
          }
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocus ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.tabItemSales}>
              <Animated.View style={{transform: [{scale: scaleAnim[index]}]}}>
                {icon}
              </Animated.View>
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
}

function NavTabs() {
  const forSlideFromLeft = ({
    current,
    layouts,
    index,
  }: StackCardInterpolationProps): StackCardInterpolatedStyle => {
    const translateX = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [-layouts.screen.width, 0],
    });
    if (index === 2) {
      return {
        cardStyle: {
          transform: [{translateX}],
        },
      };
    } else {
      return {};
    }
  };

  const screenOptions = {
    headerShown: false,
    transitionSpec: {
      open: {
        animation: 'timing',
        config: {
          duration: 1500,
        },
      },
      close: {
        animation: 'timing',
        config: {
          duration: 1500,
        },
      },
    },
    cardStyleInterpolator: forSlideFromLeft,
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <TabBar {...props} />}
      screenOptions={screenOptions}>
      {tabs.map((x, i) => (
        <Tab.Screen key={i} name={x.path} component={x.component} />
      ))}
    </Tab.Navigator>
  );
}
export default NavTabs;

const styles = StyleSheet.create({
  shadowTop: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 15,
  },
  tabItemSales: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  tabContainerSales: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: moderateVerticalScale(20),
    paddingTop: moderateVerticalScale(10),

    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: colors.borderColor,
  },
});
