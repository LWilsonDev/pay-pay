import {View, useWindowDimensions, Text} from 'react-native';
import React, {FC} from 'react';
import tw from '../../../lib/tailwind';

import Bar from './Bar';
import {BarData} from './types';

interface BarChartProps {
  data: BarData[];
}

const BarChart: FC<BarChartProps> = ({data}) => {
  const chartHeight = 200;
  const {width} = useWindowDimensions();
  const margin = 4;

  const calculateBarHeight = (barValue: BarData) => {
    const total = barValue.value1 + barValue.value2;
    const value1Percent = (barValue.value1 / total) * 100;

    return (value1Percent / 100) * chartHeight;
  };

  const calculateBarWidth = () => {
    return width / data.length - margin * 2;
  };

  return (
    <>
      <View style={tw`flex-row`}>
        {data.map((bar, index) => {
          const barHeight = calculateBarHeight(bar);
          const barWidth = calculateBarWidth();
          return (
            <View key={index.toString()}>
              <Bar
                barMargin={margin}
                barHeight={barHeight}
                barWidth={barWidth}
                totalHeight={chartHeight}
              />
              <Text style={tw`self-center text-base text-white pt-3`}>
                {bar.label}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={tw`flex-row`}></View>
    </>
  );
};

export default BarChart;
