import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import tw from '../../lib/tailwind';
import BaseButton from '../buttons/BaseButton';

const SignInUpButtons = () => {
  return (
    <SafeAreaView style={tw`flex-row mx-4 mt-4`}>
      <BaseButton
        accessibilityLabel="Sign in"
        twStyles="mr-2"
        variant="secondary"
        text="Sign in"
      />
      <BaseButton
        accessibilityLabel="Sign up"
        twStyles="ml-2"
        variant="primary"
        text="Sign up"
      />
    </SafeAreaView>
  );
};

export default SignInUpButtons;

const styles = StyleSheet.create({});
