import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Appbar, Container, TextInputs, Buttons} from '@atoms';
import {heightDimension, toasts} from '@constants';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '@stores/store.selector';

type Props = {
  [x: string]: any;
};

const ProfileEdit = (props: Props) => {
  const {profile, profileStatus, loading} = props.profile;
  const [Inputs, setInputs] = useState(profile);

  useEffect(() => {
    if (profileStatus?.status === 201) {
      toasts.success(profileStatus?.data);
      setTimeout(() => {
        props.resetActions();
        props.navigation.goBack();
      }, 200);
    }
  }, [profileStatus]);

  const handleSubmit = () => {
    props.editProfile(Inputs);
  };
  return (
    <Container scrolled animated style={{height: heightDimension - 20}}>
      <Appbar
        title="Profile Edit"
        centered
        onBack={() => props.navigation.goBack()}
      />

      <TextInputs
        containerStyle={styles.inputs}
        title="Name"
        numberOfLines={2}
        placeholder="Name"
        multiline
        value={Inputs.name}
        onChangeText={val => setInputs({...Inputs, name: val})}
      />
      <TextInputs
        containerStyle={styles.inputs}
        title="Username"
        numberOfLines={2}
        placeholder="Username"
        multiline
        value={Inputs.username}
        onChangeText={val => setInputs({...Inputs, username: val})}
      />
      <TextInputs
        containerStyle={styles.inputs}
        title="Email"
        numberOfLines={2}
        placeholder="Email"
        multiline
        value={Inputs.email}
        onChangeText={val => setInputs({...Inputs, email: val})}
      />
      <TextInputs
        containerStyle={styles.inputs}
        title="Phone"
        numberOfLines={2}
        placeholder="Phone"
        multiline
        value={Inputs.phone}
        onChangeText={val => setInputs({...Inputs, phone: val})}
      />

      <View
        style={{
          position: 'absolute',
          left: 20,
          right: 20,
          bottom: 20,
        }}>
        <Buttons loading={loading} title="Save" onPress={handleSubmit} />
      </View>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);

const styles = StyleSheet.create({
  inputs: {
    margin: 15,
    marginVertical: 10,
  },
});
