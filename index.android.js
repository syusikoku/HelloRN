/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry,} from 'react-native';

import AppManager from './js/AppManager'

export default class AppMain extends Component {
    render() {
        return (
            < AppManager/>
        );
    }
}

AppRegistry.registerComponent('HelloRN', () => AppMain);
