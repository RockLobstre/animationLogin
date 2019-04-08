/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Router, Scene} from "react-native-router-flux";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import BackgroundWrapper from "./src/components/partials/BackgroundWrapper";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const getScenceStyle = (scene) => {
    let style = {
        backgroundColor: 'transparent'
    };
    if(scene.navigationState.index !== scene.scene.index){
        style = {
            ...style,
            opacity: 0
        }
    }
    return style;
}


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <BackgroundWrapper paddingTop={0}>
            <Router getSceneStyle={getScenceStyle}>
                <Scene key="home" component={Home} initial hideNavBar/>
                <Scene key="login" component={Login} hideNavBar/>
                <Scene key="register" component={Register} hideNavBar/>
            </Router>
        </BackgroundWrapper>
    );
  }
}
