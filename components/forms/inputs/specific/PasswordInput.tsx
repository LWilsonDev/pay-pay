import React, {FC, useState} from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import tw from '../../../../lib/tailwind';
import BaseInput, {BaseInputProps} from '../BaseInput';
import IconButton from '../../../buttons/IconButton';

interface PasswordInputProps extends Omit<BaseInputProps, 'icon'> {}

const PasswordInput: FC<PasswordInputProps> = ({...props}) => {
  const [showPassword, setShowPassword] = useState(false);

  const iconColor = tw.color('gray-300');

  const icon = (
    <MaterialCommunityIcons
      name="account-key-outline"
      size={32}
      color={iconColor}
      style={tw`pr-2.5`}
    />
  );

  const handleShowPassword = () => setShowPassword(!showPassword);

  const rightSideContent = (
    <IconButton
      onPress={handleShowPassword}
      accessibilityLabel={showPassword ? 'hide' : 'show'}
      icon={
        <MaterialCommunityIcons
          name={showPassword ? 'eye-off' : 'eye'}
          size={32}
          color={iconColor}
          style={tw`pl-2`}
        />
      }
    />
  );

  return (
    <BaseInput
      {...props}
      leftSideContent={icon}
      placeholder={'Password'}
      rightSideContent={rightSideContent}
      secureTextEntry={!showPassword}
      numberOfLines={1}
      accessibilityLabel="Enter your password"
    />
  );
};

export default PasswordInput;
