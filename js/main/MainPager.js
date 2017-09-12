import React, {Component} from 'react'
import {ScrollView, Text, TouchableHighlight, View, StyleSheet} from 'react-native'
import MokeUtil from "../utils/MokeUtils";
import ColorList from "../utils/Colors";
import Util from "../utils";

var ToastAndroid = require('../ToastAndroid');

class MainCenterPager extends Component {
    constructor(props) {
        super(props);
        console.log("List constructor");
        console.log(MokeUtil.mainDatas);

        this.state = {
            days: MokeUtil.mainMenus,
            author: 'szzynt'
        }
    }

    render() {
        console.log("List render");
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
                    <TouchableHighlight
                        style={styles.touchables}
                        onPress={this.show.bind(this, day.title, day.componentName, day.component)}
                        activeOpacity={2}
                        underlayColor="#fa8072"
                    >
                        <Text
                            style={{color: '#336699', fontSize: 16, alignItems: 'center'}}>
                            {day.title}
                        </Text>
                    </TouchableHighlight>
                </View>
            );
        }

        return (
            <View style={styles.list_container}>
                <ScrollView>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontSize: 23,
                            color: '#FFFFFF',
                            alignItems: 'center',
                            marginTop: 15
                        }}>
                            React-Native Demos
                        </Text>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10,
                        marginBottom: 10
                    }}>
                        {textList}
                    </View>
                </ScrollView>
            </View>
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
        list_container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: ColorList.steelblue,
        },
        touchables: {
            width: Util.size.width * 0.95,
            backgroundColor: ColorList.skyblue,
            height: 45,
            borderRadius: 5,
            justifyContent: 'center',
            padding: 5,
            alignItems: 'center'
        },
    });

export default MainCenterPager;