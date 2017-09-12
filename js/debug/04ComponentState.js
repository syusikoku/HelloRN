import React, {Component} from 'react';
import {Text, View} from 'react-native'

export default class ComponentStateD extends Component {
    constructor(props) {
        super(props);
        // 定义一个状态值
        this.state = {
            isRed: false,
            headerMsg: "你好,HelloRN!来自state"
        }
    }
    render() {
        var styleObj = {
            color: this.state.isRed ? 'red' : 'black',
            fontSize: 20
        };
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styleObj}>
                    {this.state.headerMsg}
                </Text>
            </View>
        );
    }
}