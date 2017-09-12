import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

var ToastAndroid = require('../ToastAndroid');

class HelloRND extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        /*接收传递过来的参数*/
        this.setState({
                          author: this.props.author,
                      })
    }

    _pressButton() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    render() {
        return (
            <View style={styles.globalcontainer}>
                <Text style={styles.welcome} onPress={this._pressButton.bind(this)}>
                    Hello React Native!
                </Text>
                <View style={styles.container}>
                    <Text style={styles.instructions}>
                        To get started, edit index.android.js
                    </Text>
                    <Text style={{
                        textAlign: 'center',
                        color: '#FF3333',
                        fontSize: 23

                    }}>
                        主界面传递过来的数据:{'\n'} author by : {this.state.author}
                    </Text>
                </View>
                <View style={styles.navi}>
                    <Text style={styles.instructions}>
                        Double tap R on your keyboard to reload,{'\n'}
                        Shake or press menu button for dev menu
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        globalcontainer: {
            flex: 1, backgroundColor: '#F5FCFF',
        },
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
        instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
        },
        navi: {
            backgroundColor: '#F5FCFF',
            justifyContent: 'flex-end',
            marginBottom: 15
        }
    });

export default HelloRND;