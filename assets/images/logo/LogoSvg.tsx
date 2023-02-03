import * as React from 'react';
import {View} from 'react-native';
import Svg, {SvgProps, Path} from 'react-native-svg';
import tw from '../../../lib/tailwind';

const svgWidth = 35;

const LogoSvg = (props: SvgProps) => (
  <View
    accessible={false}
    style={tw`bg-white py-4 shadow-md rounded-3xl items-center w-[${
      svgWidth / 1.5
    }] h-[${svgWidth / 1.5}]`}
  >
    <Svg width={svgWidth} height={62} fill="none" {...props}>
      <Path
        d="M0 15.77 31.073 1.616c1.661-.756 3.549.458 3.549 2.284v12.322a27.597 27.597 0 0 1-16.158 25.114L0 49.746V15.77Z"
        fill="#1EAD60"
      />
      <Path
        opacity={0.5}
        d="m0 15.77 10.966 4.386A27.597 27.597 0 0 1 28.314 45.78v9.734c0 2.663-2.69 4.483-5.161 3.494L0 49.747V15.77Z"
        fill="#68BACC"
      />
    </Svg>
  </View>
);

export default LogoSvg;
