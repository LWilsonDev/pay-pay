import {
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import Slide from '../carousel/Slide';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  divide,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {PanGesture} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/panGesture';
import {snapPoint} from 'react-native-redash';
import tw from '../../lib/tailwind';
import Pagination from '../carousel/Dot';
import Dot from '../carousel/Dot';

export type OnboardingSlide = {
  imagePath: ImageSourcePropType;
  alt: string;
  title: string;
  subtitle: string;
};

const data: OnboardingSlide[] = [
  {
    imagePath: require('../../assets/images/onboarding/onboarding1.png'),
    alt: 'Screen shot showing monthly analytics graph',
    title: 'Save, spend, and send your money',
    subtitle:
      'We’re the first app that pays you to save, spend, and send your money',
  },
  {
    imagePath: require('../../assets/images/onboarding/onboarding2.png'),
    alt: '3 screen shots showing ways to withdraw cash',
    title: 'Easy to access for all people',
    subtitle: 'Prioritizing the experience of users for ease of transactions',
  },
  {
    imagePath: require('../../assets/images/onboarding/onboarding3.png'),
    alt: 'Pay Pay logo with avatars in the background',
    title: 'Trusted by millions of users around the world',
    subtitle:
      'Prioritizing the trust of users is the path we take to reach the future',
  },
];

const Carousel = () => {
  const {width} = useWindowDimensions();
  const xPosition = useSharedValue<number>(0);
  const translationX = useSharedValue<number>(0);
  const scroll = useRef<Animated.ScrollView>(null);

  const onScroll = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      //transform: [{translateX: xPosition.value}],
    };
  });

  const currentIndex = useDerivedValue(() => {
    return translationX.value / width;
  });

  return (
    <View>
      <Animated.ScrollView
        ref={scroll}
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        style={[animatedStyle]}
      >
        {data.map((item, index) => {
          return <Slide key={index.toString()} item={item} />;
        })}
      </Animated.ScrollView>

      <View style={tw`flex-row justify-center mt-4`}>
        {data.map((_, index) => (
          <Dot index={index} key={index} currentIndex={currentIndex} />
        ))}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
