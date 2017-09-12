import React from 'react';

/*引入其它工程*/
import HelloRNCo from '../debug/01HelloRN'
import ImageCo from '../debug/02Image'
import CoNest from '../debug/03ComponentNest'
import CState from '../debug/04ComponentState'
import CState2 from '../debug/05ComponentState'
import CEvent from '../debug/06Events'
import CTextInput from '../debug/07TextInput'
import CSearchView from '../debug/08SearchView'
import CJSCAndroidModule from '../debug/09CJSCAndroidModule'
import MainViewsBasic from "../main/MainBaseControlList";
import DataStorages from "../main/MainDataStorageList";
import NetCommunic from "../main/MainNetCommunList";

/**
 * 假数据工具类
 * @author syusikoku 2017-7-25
 */
const MokeUtils = {
    mainDatas: [
        {
            key: 0,
            title: 'View/Text/Style使用',
            componentName: 'CNHelloRN',
            component: HelloRNCo,
            isFA: false,
            color: '#ff856c',
            hideNav: false
        },
        {
            key: 1,
            title: 'day02 图片控件的使用',
            componentName: 'CNImage',
            component: ImageCo,
            isFA: false,
            color: '#ff856c',
            hideNav: false
        },
        {
            key: 2,
            title: '控件嵌套',
            componentName: 'CNCoNest',
            component: CoNest,
            isFA: false,
            color: '#ff856c',
            hideNav: false
        },
        {
            key: 3,
            title: 'State定义及使用',
            componentName: 'CNCState',
            component: CState,
            isFA: false,
            color: '#ff856c',
            hideNav: false
        },
        {
            key: 4,
            title: 'State之计时器实现',
            componentName: 'CNCState2',
            component: CState2,
            isFA: false,
            color: '#ff856c',
            hideNav: false
        },
        {
            key: 5,
            title: '事件操作',
            componentName: 'CNCEvent',
            component: CEvent,
            isFA: false,
            color: '#ff856c',
            hideNav: false
        },
        {
            key: 6,
            title: 'TextInput控件的使用',
            componentName: 'CNCTextInput',
            component: CTextInput,
            isFA: false,
            color: '#ff856c',
            hideNav: false
        },
        {
            key: 7,
            title: 'SearchView的实现',
            componentName: 'CSearchView',
            component: CSearchView,
            isFA: false,
            color: '#ff856c',
            hideNav: false
        },
        {
            key: 8,
            title: 'JS调用Android原生模块',
            componentName: 'JSCallAndroidModule',
            component: CJSCAndroidModule,
            isFA: false,
            color: '#ff856c',
            hideNav: false
        }
    ],
    baseControls: [],
    dataStorageList: [],
    networkCommunicationList: [],
    mainMenus: [
        {
            key: 0,
            title: '常用控件使用',
            componentName: 'MainViewsBasic',
            component: MainViewsBasic,
            isFA: false,
            color: '#ff856c',
            hideNav: false
        },
        {
            key: 1,
            title: '数据存储',
            componentName: 'DataStorages',
            component: DataStorages,
            isFA: false,
            color: '#ff856c',
            hideNav: false
        },
        {
            key: 2,
            title: '网络通讯',
            componentName: 'NetCommunic',
            component: NetCommunic,
            isFA: false,
            color: '#ff856c',
            hideNav: false
        }
    ]

};

export default MokeUtils;