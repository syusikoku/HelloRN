/**
 * 颜色表
 * @author syusikoku 2017-7-25
 */
const CommonColor = {
    colorPrimary: '#3F51B5',
    colorPrimaryDark: '#303F9F',
    colorAccent: '#FF4081',
    white: '#ffffff', /*白色 */
    ivory: '#fffff0', /*象牙色 */
    lightyellow: '#ffffe0', /*亮黄色 */
    yellow: '#ffff00', /*黄色 */
    snow: '#fffafa', /*雪白色 */
    floralwhite: '#fffaf0', /*花白色 */
    lemonchiffon: '#fffacd', /*柠檬绸色 */
    cornsilk: '#fff8dc', /*米绸色 */
    seaShell: '#fff5ee', /*海贝色 */
    lavenderblush: '#fff0f5', /*淡紫红 */
    papayawhip: '#ffefd5', /*番木色 */
    blanchedalmond: '#ffebcd', /*白杏色 */
    mistyrose: '#ffe4e1', /*浅玫瑰色 */
    bisque: '#ffe4c4', /*桔黄色 */
    moccasin: '#ffe4b5', /*鹿皮色 */
    navajowhite: '#ffdead', /*纳瓦白 */
    peachpuff: '#ffdab9', /*桃色 */
    gold: '#ffd700', /*金色 */
    pink: '#ffc0cb', /*粉红色 */
    lightpink: '#ffb6c1', /*亮粉红色 */
    orange: '#ffa500', /*橙色 */
    lightsalmon: '#ffa07a', /*亮肉色 */
    darkorange: '#ff8c00', /*暗桔黄色 */
    coral: '#ff7f50', /*珊瑚色 */
    hotpink: '#ff69b4', /*热粉红色 */
    tomato: '#ff6347', /*西红柿色 */
    orangered: '#ff4500', /*红橙色 */
    deeppink: '#ff1493', /*深粉红色 */
    fuchsia: '#ff00ff', /*紫红色 */
    magenta: '#ff00ff', /*红紫色 */
    red: '#ff0000', /*红色 */
    oldlace: '#fdf5e6', /*老花色 */
    lightgoldenrodyellow: '#fafad2', /*亮金黄色 */
    linen: '#faf0e6', /*亚麻色 */
    antiquewhite: '#faebd7', /*古董白 */
    salmon: '#fa8072', /*鲜肉色 */
    ghostwhite: '#f8f8ff', /*幽灵白 */
    mintcream: '#f5fffa', /*薄荷色 */
    whitesmoke: '#f5f5f5', /*烟白色 */
    beige: '#f5f5dc', /*米色 */
    wheat: '#f5deb3', /*浅黄色 */
    sandybrown: '#f4a460', /*沙褐色 */
    azure: '#f0ffff', /*天蓝色 */
    honeydew: '#f0fff0', /*蜜色 */
    aliceblue: '#f0f8ff', /*艾利斯兰 */
    khaki: '#f0e68c', /*黄褐色 */
    lightcoral: '#f08080', /*亮珊瑚色 */
    palegoldenrod: '#eee8aa', /*苍麒麟色 */
    violet: '#ee82ee', /*紫罗兰色 */
    darksalmon: '#e9967a', /*暗肉色 */
    lavender: '#e6e6fa', /*淡紫色 */
    lightcyan: '#e0ffff', /*亮青色 */
    burlywood: '#deb887', /*实木色 */
    plum: '#dda0dd', /*洋李色 */
    gainsboro: '#dcdcdc', /*淡灰色 */
    crimson: '#dc143c', /*暗深红色 */
    palevioletred: '#db7093', /*苍紫罗兰色 */
    goldenrod: '#daa520', /*金麒麟色 */
    orchid: '#da70d6', /*淡紫色 */
    thistle: '#d8bfd8', /*蓟色 */
    lightgray: '#d3d3d3', /*亮灰色 */
    lightgrey: '#d3d3d3', /*亮灰色 */
    tan: '#d2b48c', /*茶色 */
    chocolate: '#d2691e', /*巧可力色 */
    peru: '#cd853f', /*秘鲁色 */
    indianred: '#cd5c5c', /*印第安红 */
    mediumvioletred: '#c71585', /*中紫罗兰色 */
    silver: '#c0c0c0', /*银色 */
    darkkhaki: '#bdb76b', /*暗黄褐色 */
    rosybrown: '#bc8f8f', /*褐玫瑰红 */
    mediumorchid: '#ba55d3', /*中粉紫色 */
    darkgoldenrod: '#b8860b', /*暗金黄色 */
    firebrick: '#b22222', /*火砖色 */
    powderblue: '#b0e0e6', /*粉蓝色 */
    lightsteelblue: '#b0c4de', /*亮钢兰色 */
    paleturquoise: '#afeeee', /*苍宝石绿 */
    greenyellow: '#adff2f', /*黄绿色 */
    lightblue: '#add8e6', /*亮蓝色 */
    darkgray: '#a9a9a9', /*暗灰色 */
    darkgrey: '#a9a9a9', /*暗灰色 */
    brown: '#a52a2a', /*褐色 */
    sienna: '#a0522d', /*赭色 */
    darkorchid: '#9932cc', /*暗紫色 */
    palegreen: '#98fb98', /*苍绿色 */
    darkviolet: '#9400d3', /*暗紫罗兰色 */
    mediumpurple: '#9370db', /*中紫色 */
    lightgreen: '#90ee90', /*亮绿色 */
    darkseagreen: '#8fbc8f', /*暗海兰色 */
    saddlebrown: '#8b4513', /*重褐色 */
    darkmagenta: '#8b008b', /*暗洋红 */
    darkred: '#8b0000', /*暗红色 */
    blueviolet: '#8a2be2', /*紫罗兰蓝色 */
    lightskyblue: '#87cefa', /*亮天蓝色 */
    skyblue: '#87ceeb', /*天蓝色 */
    gray: '#808080', /*灰色 */
    grey: '#808080', /*灰色 */
    olive: '#808000', /*橄榄色 */
    purple: '#800080', /*紫色 */
    maroon: '#800000', /*粟色 */
    aquamarine: '#7fffd4', /*碧绿色 */
    chartreuse: '#7fff00', /*黄绿色 */
    lawngreen: '#7cfc00', /*草绿色 */
    mediumslateblue: '#7b68ee', /*中暗蓝色 */
    lightslategray: '#778899', /*亮蓝灰 */
    lightslategrey: '#778899', /*亮蓝灰 */
    slategray: '#708090', /*灰石色 */
    slategrey: '#708090', /*灰石色 */
    olivedrab: '#6b8e23', /*深绿褐色 */
    slateblue: '#6a5acd', /*石蓝色 */
    dimgray: '#696969', /*暗灰色 */
    dimgrey: '#696969', /*暗灰色 */
    mediumaquamarine: '#66cdaa', /*中绿色 */
    cornflowerblue: '#6495ed', /*菊兰色 */
    cadetblue: '#5f9ea0', /*军兰色 */
    darkolivegreen: '#556b2f', /*暗橄榄绿 */
    indigo: '#4b0082', /*靛青色 */
    mediumturquoise: '#48d1cc', /*中绿宝石 */
    darkslateblue: '#483d8b', /*暗灰蓝色 */
    steelblue: '#4682b4', /*钢兰色 */
    royalblue: '#4169e1', /*皇家蓝 */
    turquoise: '#40e0d0', /*青绿色 */
    mediumseagreen: '#3cb371', /*中海蓝 */
    limegreen: '#32cd32', /*橙绿色 */
    darkslategray: '#2f4f4f', /*暗瓦灰色 */
    darkslategrey: '#2f4f4f', /*暗瓦灰色 */
    seagreen: '#2e8b57', /*海绿色 */
    forestgreen: '#228b22', /*森林绿 */
    lightseagreen: '#20b2aa', /*亮海蓝色 */
    dodgerblue: '#1e90ff', /*闪兰色 */
    midnightblue: '#191970', /*中灰兰色 */
    aqua: '#00ffff', /*浅绿色 */
    cyan: '#00ffff', /*青色 */
    springgreen: '#00ff7f', /*春绿色 */
    lime: '#00ff00', /*酸橙色 */
    mediumspringgreen: '#00fa9a', /*中春绿色 */
    darkturquoise: '#00ced1', /*暗宝石绿 */
    deepskyblue: '#00bfff', /*深天蓝色 */
    darkcyan: '#008b8b', /*暗青色 */
    teal: '#008080', /*水鸭色 */
    green: '#008000', /*绿色 */
    darkgreen: '#006400', /*暗绿色 */
    blue: '#0000ff', /*蓝色 */
    mediumblue: '#0000cd', /*中兰色 */
    darkblue: '#00008b', /*暗蓝色 */
    navy: '#000080', /*海军色 */
    black: '#000000', /*黑色 */
    transparent: '#0000', /* 透明 */
    transparent2: '#8000', /* 透明 */
    /* 上传图片添加的颜色 */
    none_color: '#00000000',
    plugin_camera_black: '#000000',
    albumback: '#E1E0DE',
    style_red: '#ff4c41',
    style_divider_color: '#C9C7CD',
    no_color: '#00000000'
};

export default CommonColor;