import React, {Component} from 'react'

import {View, Text, ScrollView} from 'react-native'

/*组件嵌套*/
class ComponentNeD extends Component {
    render() {
        var subMsgs = [];
        for (var i = 0; i < 5; i++) {
            subMsgs.push(<MsgText key={'hrn' + i}/>)
        }

        return (
            <ScrollView>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{padding: 15}}>
                        hello
                    </Text>
                    {/*<MsgText/>*/}
                </View>
                {subMsgs}
            </ScrollView>

        );
    }
}

class MsgText extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: 'gray',
                marginTop: 15,
                marginBottom: 15,
                alignItems: 'center',
                padding: 5
            }}>
                <Text style={{color: 'red', fontSize: 20}}>
                    Text
                </Text>
                <MsgSubText/>
            </View>

        );
    }
}

class MsgSubText extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: 'gray', padding: 5
            }}>
                <Text style={{color: 'green', fontSize: 16}}>
                    SubText
                </Text>
            </View>

        );
    }
}

export default ComponentNeD;