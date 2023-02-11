import {ScrollView, View} from 'react-native';
import React, {FC} from 'react';
import tw from '../../lib/tailwind';

interface ScreenWrapperProps {
  children: React.ReactNode;
  scrollable?: boolean;
  twStyle?: string;
}

const ScreenWrapper: FC<ScreenWrapperProps> = ({
  children,
  twStyle,
  scrollable = false,
}) => {
  const style = tw.style(`bg-white flex-1 ${twStyle ?? ''}`);

  return scrollable ? (
    <ScrollView style={style}>{children}</ScrollView>
  ) : (
    <View style={style}>{children}</View>
  );
};

export default ScreenWrapper;
