import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {ReactNode, useEffect, useMemo, useRef} from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';

import tw from 'twrnc';

interface BaseBottomSheetProps {
  children: ReactNode;
  indexToShow: number;
  onDismiss(): void;
}

export enum BottomSheetIndex {
  Closed = -1,
  ContentHeight = 0,
  FullHeight = 1,
}

const BaseBottomSheet: React.FC<BaseBottomSheetProps> = ({
  children,
  indexToShow,
  onDismiss,
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['CONTENT_HEIGHT', '90%'], []);

  // show bottom sheet
  useEffect(() => {
    if (bottomSheetRef.current && indexToShow !== -1) {
      bottomSheetRef.current?.present();
    } else if (bottomSheetRef.current && indexToShow === -1) {
      bottomSheetRef.current?.dismiss();
    }
  }, [indexToShow]);

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(snapPoints);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={indexToShow}
      snapPoints={animatedSnapPoints}
      keyboardBehavior="extend"
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      backgroundStyle={{backgroundColor: 'red'}}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}
      enablePanDownToClose
      onDismiss={onDismiss}
    >
      <View>
        <SafeAreaView style={{flex: 1}}>
          <BottomSheetScrollView
            onLayout={handleContentLayout}
            style={styles.scrollContainer}
          >
            <View
              onAccessibilityEscape={onDismiss}
              style={tw`pb-6 flex flex-1`}
            >
              {children}
            </View>
          </BottomSheetScrollView>
        </SafeAreaView>
      </View>
    </BottomSheetModal>
  );
};

export default BaseBottomSheet;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
});
