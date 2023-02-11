import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import TabButtons, {TabButton} from '../buttons/TabButtons';
import EmailLoginForm from './EmailLoginForm';
import PhoneLoginForm from './PhoneLoginForm';

export enum SignInTab {
  Email,
  Phone,
}

const SignInForm = () => {
  const [selectedTab, setSelectedTab] = useState<SignInTab>(SignInTab.Email);
  const navigation = useNavigation();

  const buttons: TabButton[] = [
    {title: 'email', accessibilityLabel: 'Login with email', onPress: () => {}},
    {
      title: 'phone number',
      accessibilityLabel: 'Login with phone number',
      onPress: () => {},
    },
  ];

  const onSubmit = () => {
    navigation.navigate('Home');
  };

  return (
    <>
      <TabButtons
        buttons={buttons}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === SignInTab.Email ? (
        <EmailLoginForm onSubmit={onSubmit} />
      ) : (
        <PhoneLoginForm onSubmit={onSubmit} />
      )}
    </>
  );
};

export default SignInForm;
