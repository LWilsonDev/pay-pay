import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface DotProps {
  index: number;
  currentIndex: Readonly<Animated.SharedValue<number>>;
}
const Dot: React.FC<DotProps> = ({index, currentIndex}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );
    const scale = interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [1, 1.25, 1],
      Extrapolate.CLAMP
    );
    return {
      opacity,
      transform: [{scale}],
    };
  });

  return <Animated.View style={[styles.dot, animatedStyle]} />;
};

export default Dot;

const styles = StyleSheet.create({
  dot: {
    backgroundColor: '#2CB9B0',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 4,
  },
});
