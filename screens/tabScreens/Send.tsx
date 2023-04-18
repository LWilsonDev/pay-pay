import {ScrollView, Text, View} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';
import ContentWrapper from '../../components/wrappers/ContentWrapper';
import tw from '../../lib/tailwind';
import {
  dummyBalance,
  dummyBalanceDataByYear,
  dummyYears,
} from '../../api/dummyData/dummyData';
import SendIconButtonRow from '../../components/send/SendIconButtonRow';
import BalanceByYearChart from '../../components/send/BalanceByYearChart';
import GraphSelectButton from '../../components/buttons/GraphSelectButton';
import {balanceByYearDataSelector} from '../../api/dummyData/types';

const Send = () => {
  const height = 250;

  const getTextForLabel = (year: number, months: 'first' | 'last') =>
    months === 'first' ? `Jan ${year}` : `Jul ${year}`;

  const [selectedGraph, setSelectedGraph] = useState<balanceByYearDataSelector>(
    {
      year: dummyYears[dummyYears.length - 1],
      months: 'first',
      label: getTextForLabel(dummyYears[dummyYears.length - 1], 'first'),
    }
  );

  const getAvailableGraphs = () => {
    // would return list of years from data and separate into months for the graphs
    // for now, just uses dummy data

    let listItems: balanceByYearDataSelector[] = [];

    dummyYears.forEach((year) => {
      listItems.push({year, months: 'first', label: `Jan ${year}`});
      listItems.push({year, months: 'last', label: `Jul ${year}`});
    });
    return listItems;
  };

  const handleGraphSelect = (selected: balanceByYearDataSelector) => {
    const {year, months, label} = selected;
    console.log('selected', selected);

    setSelectedGraph({...selectedGraph, year, months, label});
  };

  return (
    <>
      <ScreenWrapper>
        <View style={[tw`bg-green-600`, {height}]}>
          <ContentWrapper scrollable={false}>
            <View style={tw`flex-1 justify-center`}>
              <Text style={tw`text-white text-base mb-1`}>Your balance</Text>
              <Text style={tw`text-white text-4xl`}>£{dummyBalance}</Text>
            </View>
          </ContentWrapper>
        </View>
        <SendIconButtonRow parentHeight={height} />

        <ScrollView style={tw`flex-1 bg-black rounded-b-4xl `}>
          <View style={tw`pt-[80] pb-[80]`}>
            <View style={tw`flex-row items-center mb-3 justify-between`}>
              <Text style={tw`text-white text-xl font-semibold`}>
                Analytics
              </Text>
              {dummyBalanceDataByYear[selectedGraph.year] && (
                <GraphSelectButton
                  items={getAvailableGraphs()}
                  text={selectedGraph.label}
                  onGraphSelect={handleGraphSelect}
                />
              )}
            </View>
            <BalanceByYearChart
              months={selectedGraph.months}
              year={selectedGraph.year}
              data={dummyBalanceDataByYear[selectedGraph.year]}
            />
          </View>
        </ScrollView>
      </ScreenWrapper>
      {/* <BottomSheet
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        //onChange={handleSheetChange}
      >
        <BottomSheetFlatList
          data={items}
          keyExtractor={(i) => i.label}
          renderItem={renderItem}
          //contentContainerStyle={styles.contentContainer}
        />
      </BottomSheet> */}
    </>
  );
};

export default Send;
