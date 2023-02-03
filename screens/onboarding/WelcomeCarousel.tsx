import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Carousel from '../../components/onboarding/Carousel';
import tw from '../../lib/tailwind';
import SignInUpButtons from '../../components/onboarding/SignInUpButtons';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';

const WelcomeCarousel = () => {
  return (
    <ScreenWrapper>
      <>
        <Carousel />
        <SignInUpButtons />
      </>
    </ScreenWrapper>
  );
};

export default WelcomeCarousel;

const styles = StyleSheet.create({});
