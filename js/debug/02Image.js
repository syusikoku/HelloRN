import React, {Component} from 'react'
import {Image, View, StyleSheet, Text} from 'react-native'

class ImageD extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{width: 100, height: 100}}
                       source={{
                           uri: 'http://img1.tgbusdata.cn/v2/thumb/jpg/NjY0Qiw1MDAsMTAwLDQsMywxLC0xLDAscms1MA=='
                                + '/u/dota.tgbus.com/UploadFiles_9207/201303/20130322112648132.jpg'
                           , justifyContent: 'center'
                       }}/>

                <Image style={{width: 100, height: 100, marginTop: 15}}
                       source={require('../img/sphere.jpg')}/>

                <Text style={styles.welcome}>
                    图片控件的使用
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
            marginTop: 25,
            color: 'blue'
        }
    });

export default ImageD;