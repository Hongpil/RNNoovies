/**
 * [Navigation]
 * $ npm install @react-navigation/native
 * $ npm install react-native-screens react-native-safe-area-context
 * $ npm install @react-navigation/native-stack
 * [Tab Navigation]
 * $ npm install @react-navigation/bottom-tabs
 *
 * $ npx pod-install ios
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Root from './navigation/Root';

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
