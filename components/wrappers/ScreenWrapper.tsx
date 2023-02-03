import {View} from 'react-native';
import React, {FC} from 'react';
import tw from '../../lib/tailwind';

interface ScreenWrapperProps {
  children: React.ReactNode;
}

const ScreenWrapper: FC<ScreenWrapperProps> = ({children}) => {
  return <View style={tw`bg-white flex-1`}>{children}</View>;
};

export default ScreenWrapper;
