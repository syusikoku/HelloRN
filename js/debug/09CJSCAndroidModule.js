import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

import MyModule from '../native_modules/MyModuleJS';
import Splash from '../native_modules/SplashModuleJS';

class JSCAndroidModule extends Component {

    // 构造
    constructor(props) {
        super(props);

        this._timer = null;

        // 初始状态
        this.state = {
            counter: 0
        };

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={styles.btn} onPress={this.showToast.bind(this)}>
                    调用原生控件1-显示Toast
                </Text>
                <Text style={styles.btn} onPress={this.showDialog.bind(this)}>
                    调用原生控件2-显示和关闭dialog
                </Text>

            </View>
        );
    }

    showToast() {
        // NativeModules.MyModule.callNative("hello native");

        MyModule.callNative("hello native");
    }

    showDialog() {
        Splash.showSplash();
        // 每一秒修改一次counter,使其+1,刷新界面
        this._timer = setInterval(
            () => {
                if (this.state.counter < 1) {
                    Splash.hideSplash();
                } else {
                    // 清除计时
                    clearInterval(this._timer);
                }
            }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this._timer);
    }

}

const styles = StyleSheet.create(
    {

        btn: {
            backgroundColor: '#FF7200',
            height: 45,
            textAlign: 'center',
            textAlignVertical: 'center',
            color: '#fff',
            marginLeft: 10,
            marginRight: 10,
            lineHeight: 24,
            borderRadius: 15,
            marginTop: 15,
            fontSize: 16,
        }
    });

export default JSCAndroidModule;