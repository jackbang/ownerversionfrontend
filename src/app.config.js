export default {
  pages: [
    'pages/index/index',
    'pages/storeMainPage/storeMainPage',
    'pages/formPage/index',
    'pages/playSearchPage/playSearchPage',
    'pages/queueManagePage/index',
    'pages/queueInfoPage/index',
  ],
  window: {
    navigationStyle: "custom",
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  plugins: {
    chooseLocation: {
      version: "1.0.6",
      provider: "wx76a9a06e5b4e693e"
    }
  },
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于小程序定位"
    }
  }
}
