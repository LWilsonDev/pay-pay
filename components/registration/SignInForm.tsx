import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TabButtons, {TabButton} from '../buttons/TabButtons';

export enum SignInTab {
  Email,
  Phone,
}

interface SignInFormProps {}

const SignInForm = () => {
  const [selectedTab, setSelectedTab] = useState<SignInTab>(SignInTab.Email);

  const buttons: TabButton[] = [
    {title: 'email', accessibilityLabel: 'Login with email', onPress: () => {}},
    {
      title: 'phone number',
      accessibilityLabel: 'Login with phone number',
      onPress: () => {},
    },
  ];

  return (
    <>
      <TabButtons
        buttons={buttons}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === SignInTab.Email ? (
        <Text>Email content</Text>
      ) : (
        <Text>Phone content</Text>
      )}
    </>
  );
};

export default SignInForm;

const styles = StyleSheet.create({});
