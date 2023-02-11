import {View} from 'react-native';
import React from 'react';
import IconButton from '../buttons/IconButton';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import tw from '../../lib/tailwind';

const SendIconButtonRow = () => {
  const iconColor = tw.color('gray-500');
  const iconSize = 24;
  const buttonStyle = 'w-[20]';
  const handleScanPress = () => {};
  const handleTopUpPress = () => {};
  const handleSendPress = () => {};
  const handleRequestPress = () => {};

  return (
    <View
      style={[
        tw`flex-row bg-white py-5 px-2 absolute rounded-3xl z-5 self-center`,
        {transform: [{translateY: -45}]},
      ]}
      accessibilityRole={'menu'}
    >
      <IconButton
        accessibilityRole={'menuitem'}
        buttonTWStyle={buttonStyle}
        icon={
          <MaterialCommunityIcons
            size={iconSize}
            color={iconColor}
            name={'scan-helper'}
          />
        }
        label="Scan"
        accessibilityLabel="scan code to send money"
        onPress={handleScanPress}
      />
      <IconButton
        accessibilityRole={'menuitem'}
        buttonTWStyle={buttonStyle}
        icon={
          <MaterialCommunityIcons
            size={iconSize}
            color={iconColor}
            name={'wallet-plus-outline'}
          />
        }
        label="Top up"
        accessibilityLabel="Top up"
        onPress={handleTopUpPress}
      />
      <IconButton
        accessibilityRole={'menuitem'}
        buttonTWStyle={buttonStyle}
        icon={
          <MaterialCommunityIcons
            size={iconSize}
            color={iconColor}
            name={'send'}
          />
        }
        label="Send"
        accessibilityLabel="Send money"
        onPress={handleSendPress}
      />
      <IconButton
        accessibilityRole={'menuitem'}
        buttonTWStyle={buttonStyle}
        icon={
          <MaterialCommunityIcons
            size={iconSize}
            color={iconColor}
            name={'hand-coin-outline'}
          />
        }
        label="Request"
        accessibilityLabel="Request"
        onPress={handleRequestPress}
      />
    </View>
  );
};

export default SendIconButtonRow;
