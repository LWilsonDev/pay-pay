import {Text, Pressable, View, ListRenderItem} from 'react-native';
import React, {FC, useCallback, useMemo, useRef, useState} from 'react';
import tw from '../../lib/tailwind';
import {AntDesign} from '@expo/vector-icons';
import BottomSheet, {
  BottomSheetModalProvider,
  BottomSheetFlatList,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import {balanceByYearDataSelector} from '../../api/dummyData/types';
import BaseBottomSheet, {
  BottomSheetIndex,
} from '../bottomSheets/BaseBottomSheet';

interface GraphSelectButtonProps {
  text: string;
  items: balanceByYearDataSelector[]; // items for dropdown select
  onGraphSelect: (selected: balanceByYearDataSelector) => void;
}
/** A button that triggers a dropdown menu for selecting graphs to view */
const GraphSelectButton: FC<GraphSelectButtonProps> = ({
  text,
  items,
  onGraphSelect,
}) => {
  const [bottomSheetIndex, setBottomSheetIndex] =
    useState<BottomSheetIndex>(-1);

  const handleShowMenu = () => {
    setBottomSheetIndex(BottomSheetIndex.ContentHeight);
  };
  const closeMenu = () => {
    setBottomSheetIndex(BottomSheetIndex.Closed);
  };

  const handleGraphSelect = (selected: balanceByYearDataSelector) => {
    closeMenu();
    onGraphSelect(selected);
  };

  return (
    <>
      <Pressable
        onPress={handleShowMenu}
        accessibilityRole="menu"
        accessibilityLabel={`${text}. Select dates to view from dropdown menu`}
        hitSlop={10} // needed for accessibility as button is < 48px
        style={({pressed}) => [
          tw`flex-row items-center border border-white rounded-xl p-2`,
          {
            opacity: pressed ? 0.5 : 1,
          },
        ]}
      >
        <Text style={tw`text-white font-sm mr-2`}>{text}</Text>
        <AntDesign name="downcircleo" size={18} color="white" />
      </Pressable>

      <BaseBottomSheet indexToShow={bottomSheetIndex} onDismiss={closeMenu}>
        {items.map((item) => {
          return (
            <Pressable
              key={item.label}
              style={tw`p-4`}
              accessibilityRole="menuitem"
              accessibilityLabel={item.label}
              onPress={() => handleGraphSelect(item)}
            >
              <Text>{item.label}</Text>
            </Pressable>
          );
        })}
      </BaseBottomSheet>
    </>
  );
};

export default GraphSelectButton;
