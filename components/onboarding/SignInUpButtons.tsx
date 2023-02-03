import {SafeAreaView} from 'react-native';
import React from 'react';

import tw from '../../lib/tailwind';
import BaseButton from '../buttons/BaseButton';
import {useNavigation} from '@react-navigation/native';

const SignInUpButtons = () => {
  const navigation = useNavigation();

  const handleNavigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={tw`flex-row mx-4 mt-4`}>
      <BaseButton
        accessibilityLabel="Sign in. Navigates to new screen"
        twStyles="mr-2"
        variant="secondary"
        text="Sign in"
        onPress={handleNavigateToSignIn}
      />
      <BaseButton
        accessibilityLabel="Sign up. Navigates to new screen"
        twStyles="ml-2"
        variant="primary"
        text="Sign up"
        onPress={handleNavigateToRegister}
      />
    </SafeAreaView>
  );
};

export default SignInUpButtons;
