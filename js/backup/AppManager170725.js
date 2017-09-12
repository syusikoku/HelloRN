'use strict';

import React, {Component} from 'react'
import {Platform, BackHandler} from 'react-native'
import {Navigator} from 'react-native-deprecated-custom-components';

import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
/*引入其它工程*/
import HelloRNCo from './debug/01HelloRN'
import ImageCo from './debug/02Image'
import CoNest from './debug/03ComponentNest'
import CState from './debug/04ComponentState'
import CState2 from './debug/05ComponentState'
import CEvent from './debug/06Events'
import CTextInput from './debug/07TextInput'
import CSearchView from './debug/08SearchView'

var ToastAndroid = require('./ToastAndroid');

export default class AppManager extends Component {
    constructor() {
        super();
    }

    /*物理返回键的处理 注意:要加在根的组件*/
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
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
        var defName = 'List';
        var defComponent = List;
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

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: [
                {
                    key: 0,
                    title: 'View/Text/Style使用',
                    componentName: 'CNHelloRN',
                    component: HelloRNCo,
                    isFA: false,
                    color: '#ff856c',
                    hideNav: false
                },
                {
                    key: 1,
                    title: 'day02 图片控件的使用',
                    componentName: 'CNImage',
                    component: ImageCo,
                    isFA: false,
                    color: '#ff856c',
                    hideNav: false
                },
                {
                    key: 2,
                    title: '控件嵌套',
                    componentName: 'CNCoNest',
                    component: CoNest,
                    isFA: false,
                    color: '#ff856c',
                    hideNav: false
                },
                {
                    key: 3,
                    title: 'State定义及使用',
                    componentName: 'CNCState',
                    component: CState,
                    isFA: false,
                    color: '#ff856c',
                    hideNav: false
                },
                {
                    key: 4,
                    title: 'State之计时器实现',
                    componentName: 'CNCState2',
                    component: CState2,
                    isFA: false,
                    color: '#ff856c',
                    hideNav: false
                },
                {
                    key: 5,
                    title: '事件操作',
                    componentName: 'CNCEvent',
                    component: CEvent,
                    isFA: false,
                    color: '#ff856c',
                    hideNav: false
                },
                {
                    key: 6,
                    title: 'TextInput控件的使用',
                    componentName: 'CNCTextInput',
                    component: CTextInput,
                    isFA: false,
                    color: '#ff856c',
                    hideNav: false
                },
                {
                    key: 6,
                    title: 'SearchView的实现',
                    componentName: 'CSearchView',
                    component: CSearchView,
                    isFA: false,
                    color: '#ff856c',
                    hideNav: false
                }
            ],
            author: 'szzynt'
        }

    }

    render() {
        var textList = [];
        for (var i = 0; i < this.state.days.length; i++) {
            let day = this.state.days[i];
            textList.push(
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 5
                }}
                      key={'item' + i}>
                    <TouchableOpacity
                        style={styles.touchables}
                        onPress={this.show.bind(this, day.title, day.componentName,
                                                day.component)}>
                        <Text
                            style={{color: '#336699', fontSize: 16, alignItems: 'center'}}>
                            {day.title}
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <ScrollView style={styles.mainView} title={this.props.title}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{fontSize: 23, color: '#FFFFFF', alignItems: 'center'}}>
                        控件练习
                    </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    {textList}
                </View>
            </ScrollView>
        );
    }

    show(msg, comName, component) {
        const {navigator} = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if (navigator) {
            navigator.push(
                {
                    name: comName,
                    component: component,
                    params: {
                        author: this.state.author,
                    }
                })
        }
        ToastAndroid.show("跳转到" + msg, ToastAndroid.SHORT);
    }
}

const styles = StyleSheet.create(
    {
        flex: {
            flex: 1,
        },
        list_item: {
            height: 35,
            marginLeft: 10,
            marginRight: 10,
            fontSize: 18,
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
            justifyContent: 'center',
        },
        container: {
            flex: 1,
        },
        mainView: {
            flex: 1,
            padding: 15,
            backgroundColor: '#CC9966'
        },
        touchables: {
            backgroundColor: 'gray',
            width: 300,
            height: 45,
            borderRadius: 25,
            justifyContent: 'center',
            padding: 5,
            alignItems: 'center'
        },
    });
