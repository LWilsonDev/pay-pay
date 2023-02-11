/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import TabTwoScreen from '../screens/TabTwoScreen';
import {RootStackParamList, RootTabParamList} from './types';
import LinkingConfiguration from './LinkingConfiguration';
import WelcomeCarousel from '../screens/onboarding/WelcomeCarousel';
import SignIn from '../screens/authentication/SignIn';
import Register from '../screens/authentication/Register';
import Send from '../screens/tabScreens/Send';
import tw from '../lib/tailwind';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={WelcomeCarousel} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const activeColor = tw.color('green-600');

  return (
    <BottomTab.Navigator
      initialRouteName="Send"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: activeColor,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopColor: 'white',
        },
      }}
    >
      <BottomTab.Screen
        name="Send"
        component={Send}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="account" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return (
    <MaterialCommunityIcons size={30} style={{marginBottom: -3}} {...props} />
  );
}
