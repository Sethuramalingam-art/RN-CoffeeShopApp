# RN-CoffeeShopApp

React Native uses Metro to build your JavaScript code and assets.

npx react-native init Coffee_Shop_App => create an react native app

zustand => state managment library
npm i zustand

immer => update the state data's in deeply
npm i immer

react-native-async-storage=> helps us to store the data locally on the device and same data can be used by store to update the store items

=> when you add the item in carts and closed the app and again open the app without any redux or zustand add item is there
in cart which is aceived by react-native-async-storage
npm i @react-native-async-storage/async-storage

react navigation
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack - because compare to stack native stack is performance high
npm install @react-navigation/bottom-tabs

react native linear gradiant
npm i react-native-linear-gradient

react native community blur
npm i @react-native-community/blur

react native vector icons
npm i react-native-vector-icons
npm i --save-dev @types/react-native-vector-icons

lottie react native => animations
npm i lottie-react-native

---

some modules are not there in javascript for react native android/ios so we need to extend the functions from native modules. these native modules are written by

android native module - java/ kotlin
ios modules - obj-c/swift

andriod native dev IDE - android studio
IOS native dev IDE - Xcode

do read => https://reactnative.dev/docs/native-modules-android important

---

after install packages do android ./gradlew clean

npx react-native run-android or run inside android folder ./gradle initialRelease

App icon generator in google generate the app icon and
Icon kitchen is for icon edit

include splash for app launch first screen
npm i react-natice-splash-screen
and changes are done in main activity.kt file

check launch_screen.xml for app icon and splash screen customization
app generator icons are there inside andriod-src-main-res-mipmap

---

assets and fonts are linked by

npx react-native-asset

info Linking ttf assets to iOS project
WARN ERRGROUP Group 'Resources' does not exist in your Xcode project. We have created it automatically for you.
info Linking custom assets to iOS project
info Linking ttf assets to Android project
info Linking png assets to Android project

1:30:16
2:00
2:30
2:40
2:49
4:11

https://blog.bitsrc.io/touchablehighlight-vs-touchablenativefeedback-vs-touchableopacity-vs-touchablewithoutfeedback-in-d5520a3c3e67
