import {createStackNavigator} from '@react-navigation/stack';
import {nav} from './nav-data';

const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {nav.map((item, index) => (
        <Stack.Screen key={index} name={item.path} component={item.component} />
      ))}
    </Stack.Navigator>
  );
}

export default NavStack;
