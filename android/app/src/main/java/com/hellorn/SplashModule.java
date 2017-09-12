package com.hellorn;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by zzg on 2017/7/30.
 */

public class SplashModule extends ReactContextBaseJavaModule {
    public SplashModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "SplashModule";
    }

    @ReactMethod
    public void showSplash() {
        SplashPager.show(getCurrentActivity());
    }

    @ReactMethod
    public void hideSplash() {
        SplashPager.hide(getCurrentActivity());
    }
}
