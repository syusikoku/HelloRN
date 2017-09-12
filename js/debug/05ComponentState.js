import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

/*组件状态:定时器*/
export default class ComponentState2D extends Component {
    constructor(props) {
        super(props);

        // 声明一个状态值
        this.state = {
            isRed: true,
            headerMsg2: "来自ComponentState2D的state",
            counter: 0
        }

        this._timer = null;
        // 每一秒修改一次counter,使其+1,刷新界面
        this._timer = setInterval(
            () => {
                if (this.state.counter < 9) {
                    this.setState({counter: this.state.counter + 1});
                } else {
                    // 清除计时
                    clearInterval(this._timer);
                }
            }
            , 1000)
    }

    componentWillUnmount() {
        /*计时器一定要在组件卸载的时候清除不要在后台进行更新操作，要不然会报下面的错误*/
        clearInterval(this._timer);
    }

    render() {
        // 渲染内容之前,手动配置一个style样式
        var styleObj = {
            color: this.state.isRed ? 'red' : 'black',
            fontSize: 18
        }
        return (
            <View style={styles.container}>
                <Image
                    style={styles.pic}
                    source={{
                        uri: 'http://img1.tgbusdata.cn/v2/thumb/jpg/NjY0Qiw1MDAsMTAwLDQsMywxLC0xLDAscms1MA=='
                             + '/u/dota.tgbus.com/UploadFiles_9207/201303/20130322112648132.jpg'
                        , justifyContent: 'center'
                    }}>
                </Image>

                <Text style={styles.welcome}>
                    Hello React Native!
                </Text>

                <Text style={styleObj}>
                    当前计数{this.state.counter + 1}次
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {

        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            color: 'blue'
        },
        pic: {
            width: 200,
            height: 50,
        }
    });