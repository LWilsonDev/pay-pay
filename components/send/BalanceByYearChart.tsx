import {Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {balanceYear} from '../../api/dummyData/types';
import BarChart from '../charts/barChart/BarChart';
import {BarData} from '../charts/barChart/types';
import tw from '../../lib/tailwind';

interface BalanceByYearChartProps {
  year: number;
  months: 'first' | 'last';
  data: balanceYear;
}

const BalanceByYearChart: FC<BalanceByYearChartProps> = ({
  year,
  data,
  months,
}) => {
  const convertDataForChart = (
    yearlyData: balanceYear | undefined
  ): BarData[] | undefined => {
    let res = undefined;

    if (yearlyData) {
      let bars: BarData[] = [];
      const max = months === 'first' ? 5 : 11;
      const min = months === 'first' ? 0 : 6;
      yearlyData.monthlyData.forEach((month, index) => {
        if (index >= min && index <= max) {
          bars.push({
            label: month.month,
            value1: month.income,
            value2: month.outgoing,
          });
        }
      });
      res = bars;
    }

    return res;
  };

  const [currentData, setCurrentData] = useState<BarData[] | undefined>(
    undefined
  );

  useEffect(() => {
    if (year && months) {
      setCurrentData(convertDataForChart(data));
    }
  }, [year, months]);

  return (
    <View>
      {currentData ? (
        <BarChart data={currentData} />
      ) : (
        <Text style={tw`text-white font-semibold mb-3 self-center`}>
          No Data
        </Text>
      )}
    </View>
  );
};

export default BalanceByYearChart;
