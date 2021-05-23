(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/storeMainPage/storeMainPage"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/storeMainPage/storeMainPage.jsx":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/storeMainPage/storeMainPage.jsx ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Storemainpage; });
/* harmony import */ var C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.1@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_plugin-platform-weapp@3.2.1@@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! taro-ui */ "./node_modules/_taro-ui@3.0.0-alpha.10@taro-ui/dist/index.esm.js");
/* harmony import */ var _storeMainPage_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storeMainPage.scss */ "./src/pages/storeMainPage/storeMainPage.scss");
/* harmony import */ var _storeMainPage_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_storeMainPage_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dayjs */ "./node_modules/_dayjs@1.10.4@dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs/locale/zh-cn */ "./node_modules/_dayjs@1.10.4@dayjs/locale/zh-cn.js");
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_image_13_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/image-13.png */ "./src/img/image-13.png");
/* harmony import */ var _img_image_13_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_image_13_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_storeinfobk_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/storeinfobk.png */ "./src/img/storeinfobk.png");
/* harmony import */ var _img_storeinfobk_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_storeinfobk_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_image_1_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/image-1.png */ "./src/img/image-1.png");
/* harmony import */ var _img_image_1_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_image_1_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_image_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../img/image.png */ "./src/img/image.png");
/* harmony import */ var _img_image_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_image_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _img_image_2_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../img/image-2.png */ "./src/img/image-2.png");
/* harmony import */ var _img_image_2_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_img_image_2_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _img_image_3_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../img/image-3.png */ "./src/img/image-3.png");
/* harmony import */ var _img_image_3_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_img_image_3_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _img_image_4_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../img/image-4.png */ "./src/img/image-4.png");
/* harmony import */ var _img_image_4_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_img_image_4_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _img_image_5_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../img/image-5.png */ "./src/img/image-5.png");
/* harmony import */ var _img_image_5_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_img_image_5_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _img_image_10_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../img/image-10.png */ "./src/img/image-10.png");
/* harmony import */ var _img_image_10_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_img_image_10_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../img/queueinfobk.png */ "./src/img/queueinfobk.png");
/* harmony import */ var _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _img_female_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../img/female.png */ "./src/img/female.png");
/* harmony import */ var _img_female_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_img_female_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _img_male_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../img/male.png */ "./src/img/male.png");
/* harmony import */ var _img_male_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_img_male_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _img_image_8_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../img/image-8.png */ "./src/img/image-8.png");
/* harmony import */ var _img_image_8_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_img_image_8_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _img_empty_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../img/empty.svg */ "./src/img/empty.svg");
/* harmony import */ var _img_empty_svg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_img_empty_svg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _img_certification_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../img/certification.svg */ "./src/img/certification.svg");
/* harmony import */ var _img_certification_svg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_img_certification_svg__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../service/api */ "./src/service/api.js");
/* harmony import */ var _service_config__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../service/config */ "./src/service/config.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__);































var Storemainpage = /*#__PURE__*/function (_Component) {
  Object(C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Storemainpage, _Component);

  var _super = Object(C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Storemainpage);

  function Storemainpage() {
    var _this2;

    Object(C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Storemainpage);

    _this2 = _super.apply(this, arguments);
    _this2.state = {
      current: 0,
      adminInfo: {},
      storeInfo: {},
      permission: 0,
      queueList: [],
      lockedQueueList: [],
      queueListIdx: [],
      tabLoading: true,
      infoLoading: true
    };
    return _this2;
  }

  Object(C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Storemainpage, [{
    key: "isInStorage",
    value: function isInStorage(key_name) {
      var info = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getStorageInfoSync();
      var key_list = info.keys;
      var res = key_list.find(function (elem) {
        return elem == key_name;
      });
      return res;
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.state.adminInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getStorageSync("admin_info");
      this.state.storeInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getStorageSync("store_info");
      this.state.permission = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getStorageSync("permission");
      /*
      if (JSON.stringify(this.state.storeInfo) !== '{}' & JSON.stringify(this.state.adminInfo) !== '{}') {
        this.setState({
          infoLoading: false
        })
      } else {
        console.log('false')
      }
      */
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var _this3 = this;

      this.setState({
        storeInfo: _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getStorageSync('store_info')
      });

      var _this = this;

      Object(_service_api__WEBPACK_IMPORTED_MODULE_26__[/* test_get_queues */ "g"])(this.state.storeInfo.store_id).then(function (res) {
        console.log(res.data.data.play_data);
        res.data.data.play_data.map(function (item, itemIdx) {
          if (_this3.isInStorage("play_id_".concat(item.play_id))) {
            console.log('the play is in cache');
          } else {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.setStorage({
              key: "play_id_".concat(item.play_id),
              data: item
            });
          }
        });

        _this.setState({
          queueList: res.data.data.queue_data,
          queueListIdx: res.data.data.queue_num,
          tabLoading: false,
          infoLoading: false
        });
      });
      _this = this;
      var body = {
        showDays: 1
      };
      Object(_service_api__WEBPACK_IMPORTED_MODULE_26__[/* test_get_lockedqueues */ "e"])(this.state.storeInfo.store_id, body).then(function (res) {
        console.log(res.data.data.play_data);
        res.data.data.play_data.map(function (item, itemIdx) {
          if (_this3.isInStorage("play_id_".concat(item.play_id))) {
            console.log('the play is in cache');
          } else {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.setStorage({
              key: "play_id_".concat(item.play_id),
              data: item
            });
          }
        });

        _this.setState({
          lockedQueueList: res.data.data.queue_data,
          tabLoading: false,
          infoLoading: false
        });
      });
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "handleNavBack",
    value: function handleNavBack() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.navigateBack();
    }
  }, {
    key: "handleClick",
    value: function handleClick(value) {
      var _this4 = this;

      this.setState({
        tabLoading: true
      });

      if (value == 0) {
        var _this = this;

        Object(_service_api__WEBPACK_IMPORTED_MODULE_26__[/* test_get_queues */ "g"])(this.state.storeInfo.store_id).then(function (res) {
          console.log(res.data.data.play_data);
          res.data.data.play_data.map(function (item, itemIdx) {
            if (_this4.isInStorage("play_id_".concat(item.play_id))) {
              console.log('the play is in cache');
            } else {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.setStorage({
                key: "play_id_".concat(item.play_id),
                data: item
              });
            }
          });

          _this.setState({
            queueList: res.data.data.queue_data,
            queueListIdx: res.data.data.queue_num,
            tabLoading: false,
            infoLoading: false
          });
        });
      } else if (value == 1) {
        var _this5 = this;

        var body = {
          showDays: 1
        };
        Object(_service_api__WEBPACK_IMPORTED_MODULE_26__[/* test_get_lockedqueues */ "e"])(this.state.storeInfo.store_id, body).then(function (res) {
          console.log(res.data.data.play_data);
          res.data.data.play_data.map(function (item, itemIdx) {
            if (_this4.isInStorage("play_id_".concat(item.play_id))) {
              console.log('the play is in cache');
            } else {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.setStorage({
                key: "play_id_".concat(item.play_id),
                data: item
              });
            }
          });

          _this5.setState({
            lockedQueueList: res.data.data.queue_data,
            tabLoading: false,
            infoLoading: false
          });
        });
      }

      this.setState({
        current: value
      });
    }
  }, {
    key: "handleClickStore",
    value: function handleClickStore() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.navigateTo({
        url: '../formPage/index?page=4'
      });
    }
  }, {
    key: "handleClickPlay",
    value: function handleClickPlay() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.navigateTo({
        url: '../playSearchPage/playSearchPage'
      });
    }
  }, {
    key: "onScrollToUpper",
    value: function onScrollToUpper() {} // or 使用箭头函数
    // onScrollToUpper = () => {}

  }, {
    key: "onScroll",
    value: function onScroll(e) {//console.log(e.detail)
    }
  }, {
    key: "lockTheQueue",
    value: function lockTheQueue(id) {
      var theQueue = this.state.queueList[id];

      var _this = this;

      console.log(theQueue);
      wx.showModal({
        title: '锁定车队',
        content: "\u786E\u5B9A\u9501\u5B9A ".concat(theQueue.queue_end_time.slice(0, 10) + " " + theQueue.queue_end_time.slice(11, -3), " \u4EBA\u6570\u4E3A").concat(theQueue.queue_current_num, "\u4EBA\u7684\u8F66\u961F\u5417\uFF1F"),
        success: function success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
            var body = {
              adminId: _this.state.adminInfo.adminId,
              sessionId: _this.state.adminInfo.sessionId,
              store_id: _this.state.storeInfo.store_id,
              queue_id: theQueue.queue_id,
              appId: wx.getAccountInfoSync().miniProgram.appId,
              token: (dayjs__WEBPACK_IMPORTED_MODULE_9___default()().unix() + 1000) * 2
            };
            Object(_service_api__WEBPACK_IMPORTED_MODULE_26__[/* test_lock_queue */ "j"])(body).then(function (result) {
              if (result.data.code == 1) {
                _this.state.queueList[id].queue_status = 1;

                _this.setState({
                  queueList: _this.state.queueList
                });
              } else {
                console.log(result.data.data);
              }
            });
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var top_height = wx.getSystemInfoSync().statusBarHeight;
      var system_width = wx.getSystemInfoSync().screenWidth / 3;
      var screenHeight = wx.getSystemInfoSync().screenHeight;
      var screenWidth = wx.getSystemInfoSync().screenWidth;
      var windowHeight = wx.getSystemInfoSync().windowHeight;
      var screenHeight_rpx = 750 * (screenHeight / screenWidth);
      var windowHeight_rpx = 750 * (windowHeight / screenWidth);
      var top_height_rpx = 750 * (top_height / screenWidth);
      var scrollTop = 0;
      var Threshold = 20;
      var scrollStyle = {
        height: "".concat(windowHeight_rpx - top_height_rpx - 20 - 170 - 50 - 20 - 170 - 80 - 180 - 80, "rpx")
      };
      var queuesInfo = [];
      var lockedQueueInfo = [];

      if (this.state.queueList.length == 0) {
        queuesInfo.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
          src: _img_empty_svg__WEBPACK_IMPORTED_MODULE_24___default.a,
          style: "width:675rpx;"
        }));
        lockedQueueInfo.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
          src: _img_empty_svg__WEBPACK_IMPORTED_MODULE_24___default.a,
          style: "width:675rpx;"
        }));
      } else {
        this.state.lockedQueueList.map(function (item, itemIdx) {
          var temp_play_info = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getStorageSync("play_id_".concat(item.play_id));
          console.log(temp_play_info); // male famale display

          var male_female_display = [];

          if (temp_play_info.play_male_num == 999 | temp_play_info.play_female_num == 999) {
            male_female_display = [];
          } else {
            male_female_display.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              className: "play-male-position-info",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                className: "gender-icon-info",
                src: _img_male_png__WEBPACK_IMPORTED_MODULE_22___default.a
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])("text", {
                children: [item.queue_current_male_num, "/", temp_play_info.play_male_num]
              })]
            }));
            male_female_display.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              className: "play-female-position-info",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                className: "gender-icon-info",
                src: _img_female_png__WEBPACK_IMPORTED_MODULE_21___default.a
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])("text", {
                children: [item.queue_current_female_num, "/", temp_play_info.play_female_num]
              })]
            }));
          }

          if (_this6.state.tabLoading == false) {
            lockedQueueInfo.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              className: "at-row queue-tab-info",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                src: _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_20___default.a,
                mode: "widthFix",
                style: "width:675rpx;z-index:-1;position:absolute;"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                className: "at-row play-pic-position-info",
                style: "width:21vw",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                  className: "play-pic-info",
                  src: _service_config__WEBPACK_IMPORTED_MODULE_27__[/* base */ "a"] + temp_play_info.play_img,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                    className: "play-pic-label-info",
                    children: temp_play_info.play_labels[0]
                  })
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                className: "at-col play-intro-info",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  className: "at-col play-name-position-info",
                  children: temp_play_info.play_name
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  className: "at-row",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-col",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row",
                      style: "font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                        decode: "{{true}}",
                        children: item.queue_end_time.slice(0, 10) + " " + item.queue_end_time.slice(11, -3)
                      })
                    })
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  className: "at-col",
                  style: "margin-top:10%;",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                    style: "font-size:24rpx;font-weight:550;",
                    children: "\u623F\u95F4\uFF1A\u9ED8\u8BA4"
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                className: "at-row",
                style: "width:20vw;display:flex;align-items:center;",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                  src: _img_image_8_png__WEBPACK_IMPORTED_MODULE_23___default.a,
                  style: "height:160rpx;width:160rpx;"
                })
              })]
            }));
          } else {
            lockedQueueInfo.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              className: "storeMainPage",
              style: {
                height: "300rpx",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start"
              },
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtActivityIndicator */ "a"], {
                  mode: "center",
                  size: 64,
                  content: "Loading...",
                  className: "load"
                })
              })
            }));
          }
        });
        this.state.queueList.map(function (item, itemIdx) {
          var temp_play_info = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getStorageSync("play_id_".concat(item.play_id));
          console.log(temp_play_info); // male famale display

          var male_female_display = [];

          if (temp_play_info.play_male_num == 999 | temp_play_info.play_female_num == 999) {
            male_female_display = [];
          } else {
            male_female_display.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              className: "play-male-position-info",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                className: "gender-icon-info",
                src: _img_male_png__WEBPACK_IMPORTED_MODULE_22___default.a
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])("text", {
                children: [item.queue_current_male_num, "/", temp_play_info.play_male_num]
              })]
            }));
            male_female_display.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              className: "play-female-position-info",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                className: "gender-icon-info",
                src: _img_female_png__WEBPACK_IMPORTED_MODULE_21___default.a
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])("text", {
                children: [item.queue_current_female_num, "/", temp_play_info.play_female_num]
              })]
            }));
          } // 将item加入锁局中

          /*
          lockedQueueInfo.push(
            <View className='at-row queue-tab-info' >
              <image src={tabbk} mode='widthFix' style='width:675rpx;z-index:-1;position:absolute;'></image>
               <View className='at-row play-pic-position-info' style='width:21vw'>
                <image className='play-pic-info' src={base+temp_play_info.play_img}>
                <text className='play-pic-label-info'>{temp_play_info.play_labels[0]}</text>
                </image>
              </View>
              <View className='at-col play-intro-info'>
                <View className='at-col play-name-position-info'>{temp_play_info.play_name}</View>
                <View className='at-row'>
                  <View className='at-col'>
                    <View className='at-row' style='font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;'><text decode="{{true}}">{item.queue_end_time}</text></View>
                  </View>
                </View>
                <View className='at-col' style='margin-top:10%;'>
                  <text style='font-size:24rpx;font-weight:550;'>房间：默认</text>
                </View>
              </View>
              <View className='at-row' style='width:20vw;display:flex;align-items:center;'>
                 <image src={closedQueue} style='height:160rpx;width:160rpx;'></image>
              </View>
            </View>
          )
          */


          if (_this6.state.tabLoading == false) {
            if (temp_play_info.play_headcount == item.queue_current_num) {
              queuesInfo.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                className: "at-row queue-tab-info",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                  src: _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_20___default.a,
                  mode: "widthFix",
                  style: "width:675rpx;z-index:-1;position:absolute;"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                  style: "background-color:rgba(252, 95, 47, 0.5);position:absolute;right:37.5rpx;;font-size:24rpx;padding:10rpx;border-radius:0 20rpx 0 20rpx;",
                  children: "\u5DF2\u62FC\u6EE1"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  className: "at-row play-pic-position-info",
                  style: "width:21vw",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                    className: "play-pic-info",
                    src: _service_config__WEBPACK_IMPORTED_MODULE_27__[/* base */ "a"] + temp_play_info.play_img,
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                      className: "play-pic-label-info",
                      children: temp_play_info.play_labels[0]
                    })
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  className: "at-col play-intro-info",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-col play-name-position-info",
                    children: temp_play_info.play_name
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-row",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-col",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-row play-time-position-info",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                          decode: "{{true}}",
                          children: item.queue_end_time.slice(0, 10) + " " + item.queue_end_time.slice(11, -3)
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-row play-headcount-position-info",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "play-headcount-info",
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])("text", {
                            decode: "{{true}}",
                            children: ["\u4EBA\u6570\uFF1A", item.queue_current_num, "/", temp_play_info.play_headcount]
                          })
                        }), male_female_display]
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row",
                      style: "width:20vw;margin-right:20rpx;",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtButton */ "b"], {
                        type: "primary",
                        circle: "true",
                        className: "confirm-button",
                        disabled: item.queue_status == 1 ? true : false,
                        onClick: _this6.lockTheQueue.bind(_this6, itemIdx),
                        children: "\u786E\u8BA4\u9501\u5C40"
                      })
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-col",
                    style: "margin-top:2%;",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                      style: "font-size:24rpx;font-weight:550;",
                      children: "\u623F\u95F4\uFF1A\u9ED8\u8BA4"
                    })
                  })]
                })]
              }));
            } else {
              queuesInfo.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                className: "at-row queue-tab-info",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                  src: _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_20___default.a,
                  mode: "widthFix",
                  style: "width:675rpx;z-index:-1;position:absolute;"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                  style: "background-color:rgba(252, 166, 47, 0.5);position:absolute;right:37.5rpx;;font-size:24rpx;padding:10rpx;border-radius:0 20rpx 0 20rpx;",
                  children: "\u672A\u62FC\u6EE1"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  className: "at-row play-pic-position-info",
                  style: "width:21vw",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                    className: "play-pic-info",
                    src: _service_config__WEBPACK_IMPORTED_MODULE_27__[/* base */ "a"] + temp_play_info.play_img,
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                      className: "play-pic-label-info",
                      children: temp_play_info.play_labels[0]
                    })
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  className: "at-col play-intro-info",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-col play-name-position-info",
                    children: temp_play_info.play_name
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-row",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-col",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-row play-time-position-info",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                          decode: "{{true}}",
                          children: item.queue_end_time.slice(0, 10) + " " + item.queue_end_time.slice(11, -3)
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-row play-headcount-position-info",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "play-headcount-info",
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])("text", {
                            decode: "{{true}}",
                            children: ["\u4EBA\u6570\uFF1A", item.queue_current_num, "/", temp_play_info.play_headcount]
                          })
                        }), male_female_display]
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row",
                      style: "width:20vw;margin-right:20rpx;",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtButton */ "b"], {
                        type: "primary",
                        circle: "true",
                        className: "confirm-button",
                        disabled: item.queue_status == 1 ? true : false,
                        onClick: _this6.lockTheQueue.bind(_this6, itemIdx),
                        children: "\u786E\u8BA4\u9501\u5C40"
                      })
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-col",
                    style: "margin-top:2%;",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                      style: "font-size:24rpx;font-weight:550;",
                      children: "\u623F\u95F4\uFF1A\u9ED8\u8BA4"
                    })
                  })]
                })]
              }));
            }
          } else {
            queuesInfo.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              className: "storeMainPage",
              style: {
                height: "300rpx",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start"
              },
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtActivityIndicator */ "a"], {
                  mode: "center",
                  size: 64,
                  content: "Loading...",
                  className: "load"
                })
              })
            }));
          }
        });

        if (lockedQueueInfo.length == 0) {
          lockedQueueInfo.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
            src: _img_empty_svg__WEBPACK_IMPORTED_MODULE_24___default.a,
            style: "width:675rpx;"
          }));
        }

        if (queuesInfo.length == 0) {
          queuesInfo.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
            src: _img_empty_svg__WEBPACK_IMPORTED_MODULE_24___default.a,
            style: "width:675rpx;"
          }));
        }
      }

      if (this.state.infoLoading == true) {
        //这里处理加载，主要是从storage读取store admin info
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
          className: "storeMainPage",
          style: {
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start"
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
            src: _img_image_13_png__WEBPACK_IMPORTED_MODULE_11___default.a,
            style: "width:100vw;height:100vh;position:absolute;size:100%;z-index:-1;"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtActivityIndicator */ "a"], {
              mode: "center",
              size: 64,
              content: "Loading...",
              className: "load"
            })
          })]
        });
      } else {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
          className: "storeMainPage",
          style: {
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start"
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
            src: _img_image_13_png__WEBPACK_IMPORTED_MODULE_11___default.a,
            style: "width:100vw;height:100vh;position:absolute;size:100%;z-index:-1;"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: {
              paddingTop: "".concat(top_height_rpx, "rpx"),
              height: "70rpx",
              width: "100vw"
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtNavBar */ "f"], {
              className: "nav-bar-info",
              onClickLeftIcon: this.handleNavBack.bind(this),
              color: "#ffff",
              leftIconType: "chevron-left",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "color:#fff;font-size:18px",
                children: "\u9996\u9875"
              })
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "padding-top:20rpx;height:150rpx;width:100vw;",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
              mode: "heightFix",
              src: _img_storeinfobk_png__WEBPACK_IMPORTED_MODULE_12___default.a,
              style: "height:300rpx;width:660rpx;position:relative;left:45rpx;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "height:200rpx;width:600rpx;position:relative;top:-260rpx;left:75rpx;display:flex;align-items:flex-start;justify-content:flex-start",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                src: _service_config__WEBPACK_IMPORTED_MODULE_27__[/* base */ "a"] + this.state.storeInfo.store_logo,
                style: "height:200rpx;width:200rpx;"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-left:20rpx;",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                  style: "height:50rpx;width:360rpx;font-size:36rpx;font-weight:600;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;",
                  children: this.state.storeInfo.store_name
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  style: "height:60rpx;display:flex;align-items:center;justify-content:flex-start;",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                    src: _img_certification_svg__WEBPACK_IMPORTED_MODULE_25___default.a,
                    style: "height:30rpx;width:30rpx;"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                    style: "font-size:20rpx;margin-left:5rpx;background:rgba(139, 111, 73, 1);color: rgba(255, 255, 255, 1);padding: 3rpx 5rpx;",
                    children: "\u5F85\u8BA4\u8BC1"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])("text", {
                  style: "height:50rpx;width:360rpx;font-size:24rpx;font-weight:530;",
                  children: ["\u5E97\u94FAID\uFF1A", this.state.storeInfo.store_id]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])("text", {
                  style: "height:50rpx;width:360rpx;font-size:24rpx;font-weight:530;",
                  children: ["\u7BA1\u7406\u5458\uFF1A", this.state.adminInfo.nickName]
                })]
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: {
              width: '100vw',
              height: "".concat(windowHeight_rpx - top_height_rpx - 20 - 170 - 50, "rpx"),
              backgroundColor: '#F9F9F9',
              borderRadius: '10px 10px 0 0',
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start"
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: {
                height: "80rpx",
                width: "660rpx",
                marginTop: "170rpx"
              },
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                src: _img_image_1_png__WEBPACK_IMPORTED_MODULE_13___default.a,
                mode: "widthFix",
                style: "width:660rpx;position:absolute;"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "height:80rpx;width:660rpx;position:relative;display:flex;align-items:center;justify-content:flex-start;",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                  src: _img_certification_svg__WEBPACK_IMPORTED_MODULE_25___default.a,
                  style: "margin-left:20rpx;height:40rpx;width:40rpx;"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                  style: "font-size:16px;font-weight:530;color:#FCA62F;margin-left:10rpx;",
                  children: "\u672A\u8BA4\u8BC1\u95E8\u5E97"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  style: "position:absolute;right:0;",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                    style: "font-size:16px;font-weight:530;color:#FCA62F;margin-left:10rpx;",
                    children: "\u53BB\u8BA4\u8BC1"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtIcon */ "c"], {
                    value: "chevron-right",
                    size: "24",
                    color: "#FCA62F"
                  })]
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: {
                height: "180rpx",
                width: "660rpx",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                marginTop: "20rpx"
              },
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;",
                onClick: this.handleClickStore.bind(this),
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  style: "background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                    src: _img_image_png__WEBPACK_IMPORTED_MODULE_14___default.a,
                    style: "height:30px;width:30px;"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                  style: "font-size:12px;font-weight:400;margin-top:10%;",
                  children: "\u5E97\u94FA\u7BA1\u7406"
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "width:40rpx;"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;",
                onClick: this.handleClickPlay.bind(this),
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  style: "background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                    src: _img_image_2_png__WEBPACK_IMPORTED_MODULE_15___default.a,
                    style: "height:30px;width:30px;"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                  style: "font-size:12px;font-weight:400;margin-top:10%;",
                  children: "\u5267\u672C\u7BA1\u7406"
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "width:40rpx;"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  style: "background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                    src: _img_image_3_png__WEBPACK_IMPORTED_MODULE_16___default.a,
                    style: "height:30px;width:30px;"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                  style: "font-size:12px;font-weight:400;margin-top:10%;",
                  children: "\u652F\u4ED8\u7BA1\u7406"
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "width:40rpx;"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  style: "background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                    src: _img_image_4_png__WEBPACK_IMPORTED_MODULE_17___default.a,
                    style: "height:30px;width:30px;"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                  style: "font-size:12px;font-weight:400;margin-top:10%;",
                  children: "\u8F66\u961F\u7BA1\u7406"
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "width:40rpx;"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  style: "background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("image", {
                    src: _img_image_5_png__WEBPACK_IMPORTED_MODULE_18___default.a,
                    style: "height:30px;width:30px;"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])("text", {
                  style: "font-size:12px;font-weight:400;margin-top:10%;",
                  children: "\u5E97\u94FA\u5206\u4EAB"
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtTabs */ "h"]
              /* TODO: 这部分需要重构，红点没实现，列表不同日期显示不同灰度也没实现 */
              , {
                className: "tabs-info",
                current: this.state.current,
                scroll: true,
                tabList: [{
                  title: '待确认',
                  queueNum: 0
                }, {
                  title: '已结束',
                  queueNum: 0
                }],
                onClick: this.handleClick.bind(this),
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtTabsPane */ "i"], {
                  current: this.state.current,
                  index: 0,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* ScrollView */ "j"], {
                    className: "scrollview",
                    scrollY: true,
                    scrollWithAnimation: true,
                    "show-scrollbar": "false",
                    scrollTop: scrollTop,
                    style: scrollStyle,
                    lowerThreshold: Threshold,
                    upperThreshold: Threshold,
                    onScrollToUpper: this.onScrollToUpper.bind(this) // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
                    ,
                    onScroll: this.onScroll,
                    children: queuesInfo
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtTabsPane */ "i"], {
                  current: this.state.current,
                  index: 1,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* ScrollView */ "j"], {
                    className: "scrollview",
                    scrollY: true,
                    scrollWithAnimation: true,
                    "show-scrollbar": "false",
                    scrollTop: scrollTop,
                    style: scrollStyle,
                    lowerThreshold: Threshold,
                    upperThreshold: Threshold,
                    onScrollToUpper: this.onScrollToUpper.bind(this) // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
                    ,
                    onScroll: this.onScroll,
                    children: lockedQueueInfo
                  })
                })]
              })
            })]
          })]
        });
      }
    }
  }]);

  return Storemainpage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/img/certification.svg":
/*!***********************************!*\
  !*** ./src/img/certification.svg ***!
  \***********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/certification.svg";

/***/ }),

/***/ "./src/img/empty.svg":
/*!***************************!*\
  !*** ./src/img/empty.svg ***!
  \***************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/empty.svg";

/***/ }),

/***/ "./src/img/image-1.png":
/*!*****************************!*\
  !*** ./src/img/image-1.png ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image-1.png";

/***/ }),

/***/ "./src/img/image-2.png":
/*!*****************************!*\
  !*** ./src/img/image-2.png ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image-2.png";

/***/ }),

/***/ "./src/img/image-3.png":
/*!*****************************!*\
  !*** ./src/img/image-3.png ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image-3.png";

/***/ }),

/***/ "./src/img/image-4.png":
/*!*****************************!*\
  !*** ./src/img/image-4.png ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image-4.png";

/***/ }),

/***/ "./src/img/image-5.png":
/*!*****************************!*\
  !*** ./src/img/image-5.png ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image-5.png";

/***/ }),

/***/ "./src/img/image.png":
/*!***************************!*\
  !*** ./src/img/image.png ***!
  \***************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAYAAAAiwE4nAAADSUlEQVRIieWWz4tcRRDHP1Xdb3ZiNAnuIcYfN4kH8SASo6uMY1yjF/eg7oBmERZ/5JY/IKeAePQkogEhIbuoBDUECQuJ4LgRg0rAgMaLiB50E0Vxl+zMvJnuLg+zP2Z2ZgV58eT3WP2qPtWvqrpb6JF9WvXtX9OECruTJaOAvPPSCuHbG0qfz0mNuGbv++r3fJuSvaGZ3qpJivDAgYvuO9p75+HLpVXzQNT27Ngey7I7SZaKEXGS9HLpQP2bXmMf8MqJ/Vt3uMbOEVKkqMpA9MqyLsh0vTUAXHznwZvLI9lxV2JvCIhCoRomEK+kFO1ctrzjoBz8uAE9NSyX9XFf1qfoGF6LoLpSQATUy1S+9Y8Z4GwfEPXPEo1QrDkH5DMB09oqUAHsw+rtxPQwRdtkmBKI6BN2snrLGrDTCPtcSXfG67w7gBgNzeS2dojjAGonJ52pToiKbMTJP4ziZksbfQxQFcF4xo5UvcLSdhEeTZ2B/2lm1mZ4t0aDMAxmZjnQN1bd2PIYu92owlJTjJ/Vr6emAoi1BfvIzEJv1t4LZnZJsK99j48IWLIkoqeAlvb4qBMMfsHHZZXahWYSey0ZTV9SvBc0UxA7k+dySFTm3IrdlxQzWw7C4ZjssBlLPuuuuZKCyLnMp0NinNZM8VnXJ0Fuml6VWv3aWh7NE5V9zvOCiYyK2CdZU4/KdL1lb1ZvTKPhlRB03Dm56pIdkwPz8wCdmcqYOF6Mxi4lfeaz5ttSu7hox6rlfCS+LEn3C+mvRJwpT31xFjavPe3ZsT347N7sWvsDeenCn71rjdmHHtgiWUs2nJN2dHx73NZ+xDn9Smr1K8Pi9gHz9yrP+8zdF/LO3aAV72RLDOkHYC7Bj+KlTOJ+jCcxcgfvdzReRCR59I6U7GlVuSdG+0mFU05lwbDv/XPnzwwHvls57W/yEzQiMRpm4FSQTLoTa0A0YjAEVmq9YhcgGCHaus+IEBfD8dLU+em1ptuw35w8EcL6JMRkkA9OhgGpPfxoWvXxSaA7Jmu6Dsf0v9P/DZj+gwRM+mL2NY0l+w0VvCv4gFqVCgYLmwKJ8fXUZBcqdyUrdlWpCCHnUrns3uq1D92KTeKYLMSDy5gcGbzS/wa2qGb8ZA7lxQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/img/storeinfobk.png":
/*!*********************************!*\
  !*** ./src/img/storeinfobk.png ***!
  \*********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/storeinfobk.png";

/***/ }),

/***/ "./src/pages/storeMainPage/storeMainPage.jsx":
/*!***************************************************!*\
  !*** ./src/pages/storeMainPage/storeMainPage.jsx ***!
  \***************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.1@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_storeMainPage_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!./storeMainPage.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/storeMainPage/storeMainPage.jsx");


var config = {"navigationBarTitleText":"店铺首页","disableScroll":true};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_storeMainPage_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/storeMainPage/storeMainPage', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/storeMainPage/storeMainPage.scss":
/*!****************************************************!*\
  !*** ./src/pages/storeMainPage/storeMainPage.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/storeMainPage/storeMainPage.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=storeMainPage.js.map