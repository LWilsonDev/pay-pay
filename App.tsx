import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import tw from './lib/tailwind';
import {useDeviceContext} from 'twrnc';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export default function App() {
  useDeviceContext(tw, {withDeviceColorScheme: false}); // allows tailwind to access things like landscape/portrait, opt out of dark mode
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <BottomSheetModalProvider>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </BottomSheetModalProvider>
    );
  }
}
