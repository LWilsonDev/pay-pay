import {View} from 'react-native';
import React, {FC} from 'react';
import tw from '../../lib/tailwind';

interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper: FC<ContentWrapperProps> = ({children}) => {
  return <View style={tw`mx-4 flex-1`}>{children}</View>;
};

export default ContentWrapper;
