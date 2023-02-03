import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import tw from '../../lib/tailwind';

export interface TabButton {
  title: string;
  accessibilityLabel: string;
  onPress: () => void;
}

interface TabButtonsProps {
  buttons: TabButton[];
  selectedTab: number;
  setSelectedTab: (index: number) => void;
}

/**
 * An animated tab bar of buttons - when user selects a button, tab slides and style changes
 */
const TabButtons: FC<TabButtonsProps> = ({
  buttons,
  selectedTab,
  setSelectedTab,
}) => {
  const [tabbarDimens, setTabbarDimens] = useState({height: 20, width: 100});

  const buttonWidth = tabbarDimens.width / buttons.length;

  const padding = 10;

  const tabPositionX = useSharedValue(0);

  const handlePressCb = (index: number) => {
    setSelectedTab(index);
    buttons[index].onPress();
  };

  const onTabPress = (index: number) => {
    tabPositionX.value = withTiming(buttonWidth * index, {}, () => {
      runOnJS(handlePressCb)(index);
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: tabPositionX.value}],
    };
  });

  return (
    <View
      accessibilityRole="tabbar"
      style={tw`bg-gray-100 rounded-xl justify-center`}
    >
      <Animated.View
        style={[
          animatedStyle,
          tw`bg-white rounded-lg mx-1 `,
          {
            height: tabbarDimens.height - padding,
            width: buttonWidth - padding,
            position: 'absolute',
          },
        ]}
      />
      <View
        onLayout={(e) => {
          setTabbarDimens({
            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height,
          });
        }}
        style={[tw`flex-row`]}
      >
        {buttons.map((button, index) => {
          const color = selectedTab === index ? 'green-600' : 'gray-600';

          return (
            <Pressable
              key={index.toString()}
              accessibilityRole="tab"
              accessibilityLabel={button.accessibilityLabel}
              onPress={() => onTabPress(index)}
              style={tw`flex-1 py-4`}
            >
              <Text
                style={tw`text-gray-700 self-center font-semibold text-sm capitalize text-${color}`}
              >
                {button.title}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default TabButtons;

const styles = StyleSheet.create({});
