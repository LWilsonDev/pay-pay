import {
  Image,
  View,
  ImageSourcePropType,
  useWindowDimensions,
} from 'react-native';
import React, {FC} from 'react';
import tw from '../../lib/tailwind';
import LogoSvg from '../../assets/images/logo/LogoSvg';

interface HeaderImageProps {
  alt: string;
  imagePath: ImageSourcePropType;
}

const HeaderImage: FC<HeaderImageProps> = ({alt, imagePath}) => {
  const {width} = useWindowDimensions();
  return (
    <>
      <View
        style={[tw`h-[20vh] rounded-b-4xl bg-black overflow-hidden`, {width}]}
      >
        <Image
          accessibilityRole={'image'}
          accessibilityLabel={alt}
          source={imagePath}
          resizeMode="cover"
          style={[tw`h-[30vh]`, {width}]}
        />
      </View>
      <View style={[tw`ml-4 mt--10`]}>
        <LogoSvg />
      </View>
    </>
  );
};

export default HeaderImage;
