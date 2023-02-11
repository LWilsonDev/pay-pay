import {Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';
import ContentWrapper from '../../components/wrappers/ContentWrapper';
import tw from '../../lib/tailwind';
import {balance} from '../../api/dummyData/dummyData';
import IconButton from '../../components/buttons/IconButton';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import SendIconButtonRow from '../../components/send/SendIconButtonRow';

const Send = () => {
  return (
    <ScreenWrapper>
      <View style={tw`bg-green-600 h-[25vh]`}>
        <ContentWrapper scrollable={false}>
          <View style={tw`flex-1 justify-center`}>
            <Text style={tw`text-white text-base mb-1`}>Your balance</Text>
            <Text style={tw`text-white text-4xl`}>£{balance}</Text>
          </View>
        </ContentWrapper>
      </View>
      <View style={tw`flex-1 bg-black rounded-b-4xl`}>
        <SendIconButtonRow />
      </View>
    </ScreenWrapper>
  );
};

export default Send;
