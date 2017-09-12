 * 子组件调用父组件:this.propups
 * 父组件调用子组件: ref=""获取

command + D 弹出如下调试菜单
command + R Reload

adb shell input keyevent  82



TouchableHighlight的activeOpacity和underlayColor
    activeOpacity：触摸时透明度的设置
    underlayColor：点击时背景阴影效果的背景颜色

TouchableOpacity也有activeOpacity属性，
但我们经常不用它，因为默认就设置背景颜色的变化了。

js调用原生组件
android
  1。 MainApplication -->> getPackages()  -->>  new MyReactPackage()
  2。 定义MyReactPackage implements ReactPackage
      实现createNativeModules方法，并在该方法中添加自己的NativeModule

          public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
              List<NativeModule> modules = new ArrayList<NativeModule>();
              modules.add(new MyModule(reactContext));
              return modules;
          }

  3。 创建MyModule extends ReactContextBaseJavaModule,实现getName方法,该方法在js中会用到

          @Override
          public String getName() {
              return "MyModule";
          }

          创建native方法，使用ReactMethod注解，要不然会找不到该方法
          @ReactMethod
          public void callNative(String msg) {
              Toast.makeText(mContext, msg, Toast.LENGTH_SHORT).show();
          }

  4.  js中引用
      方式A
        import {NativeModules} from "react-native";
        NativeModules.MyModule.callNative("hello native");

      方式B
        native_modules
            import {NativeModules} from "react-native";

            export default NativeModules.MyModule;

        import MyModule from '../native_modules/MyModuleJS';
        MyModule.callNative("hello native");




