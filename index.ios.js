/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MainWebView from './components/mainWebView';

export default class rnwrapper extends Component {
  render() {
    return (
      <MainWebView source={{uri: 'https://eladmoshe.dev.capriza.com:8080/index.ios.html'}}/>
    );
  }
}

AppRegistry.registerComponent('rnwrapper', () => rnwrapper);
