import React, {FC} from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import tw from '../../../../lib/tailwind';
import BaseInput, {BaseInputProps} from '../BaseInput';

interface EmailInputProps extends Omit<BaseInputProps, 'icon'> {}

const EmailInput: FC<EmailInputProps> = ({...props}) => {
  const iconColor = tw.color('gray-300');

  const emailIcon = (
    <MaterialCommunityIcons
      name="account-box-outline"
      size={32}
      color={iconColor}
      style={tw`pr-2.5`}
    />
  );

  return (
    <BaseInput
      {...props}
      leftSideContent={emailIcon}
      placeholder={'Email address'}
      keyboardType="email-address"
      numberOfLines={1}
      accessibilityLabel="Enter your email Address"
    />
  );
};

export default EmailInput;
