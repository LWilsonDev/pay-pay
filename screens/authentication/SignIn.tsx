import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderImage from '../../components/registration/HeaderImage';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';
import TitleAndSubtitle from '../../components/text/TitleAndSubtitle';
import ContentWrapper from '../../components/wrappers/ContentWrapper';
import SignInForm from '../../components/registration/SignInForm';

const SignIn = () => {
  return (
    <ScreenWrapper>
      <HeaderImage
        alt="Pay Pay home screen demo"
        imagePath={require('../../assets/images/authentication/paypay-brand.png')}
      />
      <ContentWrapper>
        <TitleAndSubtitle
          title="Let's get started"
          subtitle="We're happy to see you again. Enter your email address and password"
        />
        <SignInForm />
      </ContentWrapper>
    </ScreenWrapper>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
