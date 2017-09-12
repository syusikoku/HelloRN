import React, {Component} from 'react'

import Util from "./utils";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
    StyleSheet
} from "react-native";

/*引入其它工程*/
import HelloRNCo from './debug/01HelloRN'
import ImageCo from './debug/02Image'
import CoNest from './debug/03ComponentNest'
import CState from './debug/04ComponentState'
import CState2 from './debug/05ComponentState'
import CEvent from './debug/06Events'
// import AppNavigator from './release/UIJump4NavigatorD'
import CTextInput from './debug/07TextInput'

var ToastAndroid = require('./ToastAndroid');

export default class AppManager extends Component {
    constructor() {
        super();
        this.state = {
            days: [
                {
                    key: 0,
                    title: 'View/Text/Style使用',
                    component: HelloRNCo,
                    isFA: false,
                    color: '#ff856c',
                    hideNav: false
                },
                {
                    key: 1,
                    title: 'day02 图片控件的使用',
                    component: ImageCo,
                    isFA: false,
                    color: '#ff856c',
                    hideNav: false
                },
                {
                    key: 2,
                    title: '控件嵌套',
                    component: CoNest,
                    isFA: false,
                    color: '#ff856c',
                    hideNav: false
                },
                {
                    key: 3,
                    title: 'State定义及使用',
                    component: CState,
                    isFA: false,
                    color: '#ff856c',
                    hideNav: false
                },
                {
                    key: 4,
                    title: 'State之计时器实现',
                    component: CState2,
                    isFA: false,
                    color: '#ff856c',
                    hideNav: false
                },
                {
                    key: 5,
                    title: '事件操作',
                    component: CEvent,
                    isFA: false,
                    color: '#ff856c',
                    hideNav: false
                },
                {
                    key: 6,
                    title: 'TextInput控件的使用',
                    component: CTextInput,
                    isFA: false,
                    color: '#ff856c',
                    hideNav: false
                }]
        }
    }

    render() {
        var textList = [];
        for (var i = 0; i < this.state.days.length; i++) {
            textList.push(
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 5
                }}
                      key={'item' + i}
                >
                    {/*onPress={this.handleItemClick}*/}
                    {/*onPress={this.show.bind(this, this.state.days[i].title)} 给控件绑定方法并且进行参数回传*/}
                    <TouchableOpacity
                        style={styles.touchables}
                        onPress={this.show.bind(this, this.state.days[i].title)}
                    >
                        <Text style={{color: '#336699', fontSize: 16, alignItems: 'center'}}>
                            {/*onPress={e => this.handleItemClick(e)}*/}
                            {this.state.days[i].title}
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
                    margin: 15
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

    show(msg) {
        // alert('准备跳转')
        ToastAndroid.show("跳转到" + msg, ToastAndroid.SHORT);
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        mainView: {
            flex: 1,
            padding: 25,
            backgroundColor: '#CC9966'
        },
        navBar: {
            borderBottomWidth: 1,
            borderBottomColor: "#ddd",
        },
        navTitle: {
            paddingTop: 10,
            fontSize: 18,
            fontWeight: "500",
        },
        navBackBtn: {
            paddingTop: 10,
            paddingLeft: 10,
            fontSize: 18,
            color: "#555",
        },
        itemWrapper: {
            backgroundColor: "#f3f3f3"
        },
        touchBox: {
            width: Util.size.width / 3 - 0.33334,
            height: Util.size.width / 3,
            backgroundColor: "#fff",
        },
        touchBoxContainer: {
            flexDirection: "row",
            flexWrap: "wrap",
            width: Util.size.width,
            borderTopWidth: Util.pixel,
            borderTopColor: "#ccc",
            borderLeftWidth: Util.pixel,
            borderLeftColor: "#ccc",
            borderRightWidth: Util.pixel,
            borderRightColor: "#ccc",
        },
        touchBox1: {
            borderBottomWidth: Util.pixel,
            borderBottomColor: "#ccc",
            borderRightWidth: Util.pixel,
            borderRightColor: "#ccc",
        },
        touchBox2: {
            borderBottomWidth: Util.pixel,
            borderBottomColor: "#ccc",
            borderLeftWidth: Util.pixel,
            borderLeftColor: "#ccc",
        },
        boxContainer: {
            alignItems: "center",
            justifyContent: "center",
            width: Util.size.width / 3,
            height: Util.size.width / 3,
        },
        boxIcon: {
            position: "relative",
            top: -10
        },
        boxText: {
            position: "absolute",
            bottom: 15,
            width: Util.size.width / 3,
            textAlign: "center",
            left: 0,
            backgroundColor: "transparent"
        },
        slide: {
            flex: 1,
            height: 150,
            justifyContent: "center",
            alignItems: "center",
        },
        slideText: {
            position: "absolute",
            bottom: 0,
            paddingTop: 5,
            paddingBottom: 5,
            backgroundColor: "rgba(255,255,255,0.5)",
            width: Util.size.width,
            textAlign: "center",
            fontSize: 12
        },
        image: {
            width: Util.size.width,
            height: 80,
            flex: 1,
            alignSelf: "stretch",
            resizeMode: "cover"
        },
        touchables: {
            backgroundColor: 'gray',
            width: 300,
            height: 45,
            borderRadius: 55,
            justifyContent: 'center',
            padding: 5,
            alignItems: 'center'
        },
    });