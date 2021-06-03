import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HelpOthersScreen from '../screens/HelpOthersScreen';
import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen';

export const AppStackNavigator = createStackNavigator(
  {
    HelpOthers: {
      screen: HelpOthersScreen,
      headerShown: false,
    },
    ReceiverDetailsHolder: {
      screen: ReceiverDetailsScreen,
      headerShown: false,
    },
  },
  {
    initialRouteName: 'HelpOthers',
  }
);
