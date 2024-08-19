import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {ReactNode} from 'react';
import {SafeAreaViewProps} from 'react-native-safe-area-context';

type Props = KeyboardAvoidingViewProps &
  SafeAreaViewProps & {
    children?: ReactNode;
    keyboardVoid?: boolean;
  };

const Container: React.FC<Props> = ({
  keyboardVoid = false,
  children,
  ...rest
}) => {
  return keyboardVoid ? (
    <KeyboardAvoidingView style={styles.container} {...rest}>
      {children}
    </KeyboardAvoidingView>
  ) : (
    <SafeAreaView style={styles.container} {...rest}>
      {children}
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
