import React, {Component} from 'react'
import {Text, TextInput, View} from 'react-native'

export default class TextInputD extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text>
                        登录
                    </Text>
                </View>
                <View>
                    <View>

                        <View style={{width: 150, height: 40, paddingLeft: 15, paddingRight: 15}}>
                            <Text>
                                用户名:
                            </Text>
                            <TextInput/>
                        </View>
                    </View>
                    <Text>
                        密码:
                    </Text>
                    <View style={{width: 150, height: 40, paddingLeft: 15, paddingRight: 15}}>
                        <TextInput/>
                    </View>
                </View>
            </View>

        );
    }
}