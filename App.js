/**
 * [Navigation]
 * $ npm install @react-navigation/native
 * $ npm install react-native-screens react-native-safe-area-context
 * $ npm install @react-navigation/native-stack
 * [Tab Navigation]
 * $ npm install @react-navigation/bottom-tabs
 * [Styled Components]
 * $ npm install styled-components
 * [Adding TypeScript to an Existing Project]
 * $ npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
 * [Adding TypeScript for Styled-Components]
 * npm install --save @types/styled-components @types/styled-components-react-native
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
