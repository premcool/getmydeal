// This section sets up some basic app metadata,
// the entire section is optional.
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');

App.info({
  id: 'com.getmydeal.android',
  name: 'getmydeal',
  version: "1.0",
  description: 'Getmydeal',
  author: 'Prolysi',
  email: 'info@prolysi.com',
  website: 'https://getmydeal.prolysi.com'
});

// Set up resources such as icons and launch screens.
// App.icons({
//   "iphone_2x": "public/resources/icons/iphone_2x.png", // 120x120
//   "iphone_3x": "public/resources/icons/iphone_3x.png", // 180x180
//   "ipad": "public/resources/icons/ipad.png", // 76x76
//   "ipad_2x": "public/resources/icons/ipad_2x.png", // 152x152
//   "ipad_pro": "public/resources/icons/ipad_pro.png", // 167x167
//   "ios_settings": "public/resources/icons/ios_settings.png", // 29x29
//   "ios_settings_2x": "public/resources/icons/ios_settings_2x.png", // 58x58
//   "ios_settings_3x": "public/resources/icons/ios_settings_3x.png", // 87x87
//   "ios_spotlight": "public/resources/icons/ios_spotlight.png", // 40x40
//   "ios_spotlight_2x": "public/resources/icons/ios_spotlight_2x.png", // 80x80
//   "android_mdpi": "public/resources/icons/android_mdpi.png", // 48x48
//   "android_hdpi": "public/resources/icons/android_hdpi.png", // 72x72
//   "android_xhdpi": "public/resources/icons/android_xhdpi.png", // 96x96
//   "android_xxhdpi": "public/resources/icons/android_xxhdpi.png", // 144x144
//   "android_xxxhdpi": "public/resources/icons/android_xxxhdpi.png" // 192x192
// });



  // Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('Orientation', 'default');
