import {Image, StyleSheet, useWindowDimensions, View, Text} from 'react-native';
import React from 'react';
import tw from '../../lib/tailwind';
import {OnboardingSlide} from '../onboarding/Carousel';

interface SlideProps {
  item: OnboardingSlide;
}

const Slide: React.FC<SlideProps> = ({item}) => {
  const {title, subtitle, alt, imagePath} = item;
  const {width} = useWindowDimensions();
  return (
    <View style={{width}}>
      <View
        style={[
          tw` rounded-b-4xl justify-end bg-black overflow-hidden`,
          {width},
        ]}
      >
        <Image
          accessibilityRole={'image'}
          accessibilityLabel={alt}
          source={imagePath}
          style={[tw`rounded-b-3xl h-[60vh]`, styles.image, {width}]}
        />
      </View>
      <View style={tw` w-[80vw] tablet:w-[60vw] self-center mt-8`}>
        <Text style={tw`text-xl mb-3 font-semibold text-center`}>{title}</Text>
        <Text style={tw`text-center`}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
  },
});
