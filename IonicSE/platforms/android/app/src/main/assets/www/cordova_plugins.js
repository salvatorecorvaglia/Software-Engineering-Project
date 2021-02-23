cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-crop.CropPlugin",
      "file": "plugins/cordova-plugin-crop/www/crop.js",
      "pluginId": "cordova-plugin-crop",
      "clobbers": [
        "plugins.crop"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-fcm-with-dependecy-updated.FCMPlugin",
      "file": "plugins/cordova-plugin-fcm-with-dependecy-updated/www/FCMPlugin.js",
      "pluginId": "cordova-plugin-fcm-with-dependecy-updated",
      "clobbers": [
        "FCM"
      ]
    },
    {
      "id": "cordova-plugin-firebasex.FirebasePlugin",
      "file": "plugins/cordova-plugin-firebasex/www/firebase.js",
      "pluginId": "cordova-plugin-firebasex",
      "clobbers": [
        "FirebasePlugin"
      ]
    },
    {
      "id": "cordova-plugin-firestore.Firestore",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/firestore.js",
      "pluginId": "cordova-plugin-firestore",
      "clobbers": [
        "Firestore"
      ]
    },
    {
      "id": "cordova-plugin-firestore.collection_reference",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/collection_reference.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.query",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/query.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.document_reference",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/document_reference.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.document_snapshot",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/document_snapshot.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.query_snapshot",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/query_snapshot.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.query_document_snapshot",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/query_document_snapshot.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.firestore_timestamp",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/firestore_timestamp.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.transaction",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/transaction.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.utilities",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/utilities.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.geo_point",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/geo_point.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.path",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/path.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.utils",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/utils.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "runs": true
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-androidx": "3.0.0",
    "cordova-plugin-androidx-adapter": "1.1.3",
    "cordova-plugin-camera": "4.1.0",
    "cordova-plugin-crop": "0.3.1",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-fcm-with-dependecy-updated": "7.0.10",
    "cordova-plugin-firebasex": "11.0.3",
    "cordova-plugin-firestore": "4.1.1",
    "cordova-plugin-geolocation": "4.1.0",
    "cordova-plugin-inappbrowser": "4.1.0",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-ionic-webview": "4.2.1",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-support-android-plugin": "1.0.2",
    "cordova-support-google-services": "1.4.1"
  };
});