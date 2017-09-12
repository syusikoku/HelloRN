import React, {Component} from 'react';
import {Text, View, ToastAndroid, NetInfo, StyleSheet} from "react-native";

// var ToastAndroid = require('../ToastAndroid');

class NetCommunic extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isConnected: null,
            connectionInfo: null
        };
    }

    componentDidMount() {
        //网络是否连接的监听
        NetInfo.isConnected.addEventListener(
            'isConnected',
            this._handleConnectivityChange
        );

        //网络状态变化的监听
        NetInfo.addEventListener(
            'statusChange',
            this._handleNetStatusChange
        );

        //检测网络是否连接
        NetInfo.isConnected.fetch().done(
            (isConnected) => {
                this.setState({isConnected: isConnected});
            }
        );
        //检测网络连接状态
        NetInfo.fetch().done(
            (connectionInfo) => {
                this.setState({connectionInfo});
            }
        );
    }

    componentWillUnmount() {
        //卸载两个监听
        NetInfo.isConnected.removeEventListener(
            'isConnected',
            this._handleConnectivityChange
        );
        NetInfo.removeEventListener(
            'statusChange',
            this._handleNetStatusChange
        );
    }

    _handleConnectivityChange = (isConnected) => {
        ToastAndroid.show((isConnected ? 'online' : 'offline'), ToastAndroid.SHORT);
    }

    _handleNetStatusChange = (status) => {

        ToastAndroid.show('当然网络状态：' + status, ToastAndroid.SHORT);

    }

    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                    当前的网络状态
                </Text>
                <Text style={styles.welcome}>
                    {this.state.isConnected ? '网络在线' : '离线'}
                </Text>
                <Text style={styles.welcome}>
                    当前网络连接类型
                </Text>
                <Text style={styles.welcome}>
                    {this.state.connectionInfo}
                </Text>
                <Text style={styles.welcome}>
                    当前网络是否计费(仅Android平台)
                </Text>
                <Text style={styles.welcome}>
                    {NetInfo.isConnectionExpensive === true ? '需要计费' : '不要计费'}
                </Text>


                <Text onPress={this._goGetNet.bind(this)}
                      style={
                          [
                              styles.btn,
                              {backgroundColor: 'blue'}
                          ]
                      }>
                    fetch-GET访问网络
                </Text>

                <Text onPress={this.goPostNet2.bind(this)}
                      style={styles.btn}>fetch-POST访问网络1/2</Text>

            </View>
        );
    }

    goPostNet2() {
        ToastAndroid.show('fetch-POST访问网络-方法2', ToastAndroid.SHORT);
        let url = 'http://www.5iqunzi.com/wenjiaosuo/admin/privilege.php';
        let data = {
            'username': '13410225593',
            'password': '123456',
            'act': 'signin',
        };
        console.log('fetch-POST访问网络-方法2');
        this.postRequest(url, data, (result) => {
            alert('服务器返回结果：' + result);
            // console.log('服务器返回结果：' + result);
        });
    }

    postRequest(url, data, callback) {
        let map = {
            method: 'POST',
            headers: {
                'Private-header1': 'value1',
                'Private-header2': 'value2',
                'Content-Type': 'text/plain',
                'User-Agent': 'testAgent',
            },
            body: JSON.stringify(data),
            follow: 20,
            timeout: 8000,
            size: 0,
        };

        fetch(url, map).then((response) => response.text()).then(
            (responseText) => {
                callback(responseText);
            }
        ).catch(
            (err) => {
                callback(err);
            }
        );

    }


    /*GET网络请求*/
    _goGetNet() {
        ToastAndroid.show('fetch-GET访问网络', ToastAndroid.SHORT);
        console.log('GET访问网络');
        let url = 'https://zhuanlan.zhihu.com/api/columns/zhihuadmin';
        fetch(url).then((response) => {
            console.log('第一个then里面');
            return response.text()
        }).then((responseText) => {
            alert('服务器返回：' + responseText);
        }).catch((error) => {
            console.log('error' + error);
        })
    }

    _handleConnectivityChange = (isConnected) => {
        ToastAndroid.show(isConnected ? 'online' : 'offline', ToastAndroid.SHORT);
    }

    _handleNetStatusChange = (status) => {
        ToastAndroid.show('当前网络状态:' + status, ToastAndroid.SHORT);
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
            marginTop: 40,
            fontSize: 18,
        },
        welcome: {
            fontSize: 16,
            textAlign: 'center',
            margin: 10,
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
        },
    });

export default NetCommunic;