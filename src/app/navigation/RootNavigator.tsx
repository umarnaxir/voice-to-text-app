import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigator} from './TabNavigator';

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};
