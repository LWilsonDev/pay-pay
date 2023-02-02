import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Carousel from '../../components/onboarding/Carousel';
import tw from '../../lib/tailwind';
import SignInUpButtons from '../../components/onboarding/SignInUpButtons';

const WelcomeCarousel = () => {
  return (
    <View style={tw`bg-white flex-1`}>
      <Carousel />
      <SignInUpButtons />
    </View>
  );
};

export default WelcomeCarousel;

const styles = StyleSheet.create({});
