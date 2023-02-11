import {View} from 'react-native';
import React, {FC} from 'react';
import tw from '../../lib/tailwind';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ContentWrapperProps {
  children: React.ReactNode;
  scrollable?: boolean;
}

const ContentWrapper: FC<ContentWrapperProps> = ({
  children,
  scrollable = true,
}) => {
  const wrapStyle = tw.style(`mx-4 flex-1`);

  return !scrollable ? (
    <SafeAreaView style={wrapStyle}>{children}</SafeAreaView>
  ) : (
    <KeyboardAwareScrollView style={wrapStyle}>
      <SafeAreaView>{children}</SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default ContentWrapper;
