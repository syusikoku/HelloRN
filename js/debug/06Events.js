import React, {Component} from 'react'
import {Text, View} from 'react-native'

/**
 * onPress={e => this.handleClick(e)} 事件点击
 */
export default class EventComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isRed: true,
            headerMsg: '你好黑马程序员! 来自state',
            counter: 0
        };
    }

    handleClick(e) {
        if (this.state.counter < 9) {
            this.setState(
                {
                    counter: this.state.counter + 1
                }
            )
        } else {
            alert('到达限制了,不能现点了')
        }
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 23, color: 'black'}}
                      onPress={e => this.handleClick(e)}>
                    点我累加计数
                </Text>

                <Text style={{fontSize: 18, color: 'red', marginTop: 25}}>
                    当前计数{this.state.counter + 1}次
                </Text>
            </View>
        );
    }

}