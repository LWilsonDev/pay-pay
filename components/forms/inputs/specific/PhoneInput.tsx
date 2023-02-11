import React, {FC} from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import tw from '../../../../lib/tailwind';
import BaseInput, {BaseInputProps} from '../BaseInput';

interface PhoneInputProps extends Omit<BaseInputProps, 'icon'> {}

const PhoneInput: FC<PhoneInputProps> = ({...props}) => {
  const iconColor = tw.color('gray-300');

  const icon = (
    <MaterialCommunityIcons
      name="phone-outline"
      size={32}
      color={iconColor}
      style={tw`pr-2.5`}
    />
  );

  return (
    <BaseInput
      {...props}
      leftSideContent={icon}
      placeholder={'Phone number'}
      keyboardType={'phone-pad'}
      numberOfLines={1}
      accessibilityLabel="Enter your phone number"
    />
  );
};

export default PhoneInput;
