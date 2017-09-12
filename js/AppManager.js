'use strict';

import React, {Component} from 'react'
import {BackHandler, Platform} from 'react-native'
import {Navigator} from 'react-native-deprecated-custom-components';
import MainCenterPager from "./main/MainPager";
import MyModule from './native_modules/MyModuleJS';
import Splash from './native_modules/SplashModuleJS';
/*引入其它工程*/
var ToastAndroid = require('./ToastAndroid');

class AppManager extends Component {
    constructor() {
        console.log("AppManager constructor");
        super();
    }

    /**
     * 界面渲染之后隐藏splash，加splash是为了解决启动白屏的问题
     * @author zzg
     * @date 2017-7-30
     */
    componentDidMount() {
        MyModule.callNative("pre hide splash screen");

        Splash.hideSplash();
    }

    /*物理返回键的处理 注意:要加在根的组件*/
    componentWillMount() {
        console.log("AppManager componentWillMount");
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnmount() {
        console.log("AppManager componentWillUnmount");
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        console.log("AppManager onBackAndroid");
        const navigator = this.refs.navigator;
        // const {navigator} = this.props;
        const routers = navigator.getCurrentRoutes();
        console.log('当前路由长度：' + routers.length);
        if (routers.length > 1) {
            navigator.pop();
            return true;//接管默认行为
        } //默认行为
        return false;
    };

    /*物理返回键的处理*/

    render() {
        console.log("AppManager render");
        /*默认的组件名称和组件对象*/
        var defName = 'MainCenterPager';
        var defComponent = MainCenterPager;
        return (
            <Navigator
                initialRoute={{name: defName, component: defComponent}}
                /*父组件调用子组件的使用ref+名字*/
                ref="navigator"
                //配置场景
                configureScene={
                    (route) => {
                        //这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，有源代码的:
                        // node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
                        return Navigator.SceneConfigs.FadeAndroid;
                    }
                }
                renderScene={
                    (route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator}/>
                    }
                }
            />
        );
    }
}

export default AppManager;