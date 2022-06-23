/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';

import { App } from './app/App';
import { ARView } from './app/ARView';

LogBox.ignoreLogs(["`new NativeEventEmitter()`", "defaultBrush", "Remote debugger is in a background"]);


AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(ARView.moduleName, () => ARView);
