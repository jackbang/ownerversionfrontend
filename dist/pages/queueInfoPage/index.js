(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/queueInfoPage/index"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/queueInfoPage/index.jsx":
/*!***********************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/queueInfoPage/index.jsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Queueinfopage; });
/* harmony import */ var C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.1@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_plugin-platform-weapp@3.2.1@@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! taro-ui */ "./node_modules/_taro-ui@3.0.0-alpha.10@taro-ui/dist/index.esm.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayjs */ "./node_modules/_dayjs@1.10.4@dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dayjs/locale/zh-cn */ "./node_modules/_dayjs@1.10.4@dayjs/locale/zh-cn.js");
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.scss */ "./src/pages/queueInfoPage/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/queueinfobk.png */ "./src/img/queueinfobk.png");
/* harmony import */ var _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_image_10_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/image-10.png */ "./src/img/image-10.png");
/* harmony import */ var _img_image_10_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_image_10_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_female_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/female.png */ "./src/img/female.png");
/* harmony import */ var _img_female_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_female_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_male_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../img/male.png */ "./src/img/male.png");
/* harmony import */ var _img_male_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_male_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _img_image_8_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../img/image-8.png */ "./src/img/image-8.png");
/* harmony import */ var _img_image_8_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_img_image_8_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);



















var Queueinfopage = /*#__PURE__*/function (_Component) {
  Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Queueinfopage, _Component);

  var _super = Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Queueinfopage);

  function Queueinfopage() {
    var _this;

    Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Queueinfopage);

    _this = _super.apply(this, arguments);
    _this.state = {
      value: '',
      tagActiveNum: 0,
      plays_num: 0,
      plays_list: [],
      current: 0,
      currentDay: 0,
      playInfo: {
        play_name: "木兮僧之戏",
        play_headcount: 7,
        play_male_num: 4,
        play_female_num: 3
      }
    };
    return _this;
  }

  Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Queueinfopage, [{
    key: "handleClick",
    value: function handleClick(value) {
      this.setState({
        current: value
      });
    }
  }, {
    key: "handleDayTabsClick",
    value: function handleDayTabsClick(value) {
      this.setState({
        currentDay: value
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
    key: "render",
    value: function render() {
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
        height: "".concat(windowHeight_rpx - top_height_rpx - 90 - 80 - 100, "rpx")
      };
      var newScrollStyle = {
        height: "".concat(windowHeight_rpx - top_height_rpx - 80 - 100, "rpx")
      };
      var tabInfoList = [];
      var dayList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      tabInfoList.push({
        title: "今天 " + dayjs__WEBPACK_IMPORTED_MODULE_8___default()().format('MM-DD')
      });

      for (var index = 1; index < 14; index++) {
        tabInfoList.push({
          title: dayList[index % 7] + " " + dayjs__WEBPACK_IMPORTED_MODULE_8___default()().add(index, 'day').format('MM-DD')
        });
      }

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
        className: "queueInfoPage",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
          className: "at-col",
          style: {
            padding: "".concat(top_height_rpx, "rpx 0rpx 0rpx 0rpx")
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtNavBar */ "d"], {
            className: "nav-bar-info",
            onClickLeftIcon: this.handleNavBack,
            color: "#ffff",
            leftIconType: "chevron-left",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "color:#fff;font-size:18px",
              children: "\u8F66\u961F\u7BA1\u7406"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtTabs */ "f"]
          /* TODO: 这部分需要重构，红点没实现，列表不同日期显示不同灰度也没实现 */
          , {
            className: "tabs-info",
            current: this.state.current,
            scroll: true,
            tabList: [{
              title: '在拼车队'
            }, {
              title: '完成车队'
            }],
            onClick: this.handleClick.bind(this),
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtTabsPane */ "g"], {
              current: this.state.current,
              index: 0,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "background:#FEF9F4;",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtTabs */ "f"]
                /* TODO: 这部分需要重构，红点没实现，列表不同日期显示不同灰度也没实现 */
                , {
                  className: "day-tabs-info",
                  current: this.state.currentDay,
                  scroll: true,
                  tabList: tabInfoList,
                  onClick: this.handleDayTabsClick.bind(this),
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtTabsPane */ "g"], {
                    current: this.state.currentDay,
                    index: 0,
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* ScrollView */ "j"], {
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
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-row queue-tab-info",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                          src: _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_11___default.a,
                          mode: "widthFix",
                          style: "width:675rpx;z-index:-1;position:absolute;"
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                          style: "background-color:rgba(252, 166, 47, 0.5);position:absolute;right:37.5rpx;;font-size:24rpx;padding:10rpx;border-radius:0 20rpx 0 20rpx;",
                          children: "\u672A\u62FC\u6EE1"
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "at-row play-pic-position-info",
                          style: "width:21vw",
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                            className: "play-pic-info",
                            src: _img_image_10_png__WEBPACK_IMPORTED_MODULE_12___default.a,
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                              className: "play-pic-label-info",
                              children: "\u672C\u683C"
                            })
                          })
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "at-col play-intro-info",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-col play-name-position-info",
                            children: "\u6728\u516E\u50E7\u4E4B\u620F"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-row",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                              className: "at-col",
                              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                                className: "at-row play-time-position-info",
                                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                                  decode: "{{true}}",
                                  children: "04\u670803\u65E5 15:00"
                                })
                              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                                className: "at-row play-headcount-position-info",
                                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                                  className: "play-headcount-info",
                                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                                    decode: "{{true}}",
                                    children: "\u4EBA\u6570\uFF1A0/7"
                                  })
                                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                                  className: "play-male-position-info",
                                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                                    className: "gender-icon-info",
                                    src: _img_male_png__WEBPACK_IMPORTED_MODULE_14___default.a
                                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                                    children: "0/7"
                                  })]
                                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                                  className: "play-female-position-info",
                                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                                    className: "gender-icon-info",
                                    src: _img_female_png__WEBPACK_IMPORTED_MODULE_13___default.a
                                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                                    children: "0/4"
                                  })]
                                })]
                              })]
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                              className: "at-row",
                              style: "width:20vw;margin-right:20rpx;",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtButton */ "a"], {
                                type: "primary",
                                circle: "true",
                                className: "confirm-button",
                                onClick: console.log("邀请好友"),
                                children: "\u786E\u8BA4\u9501\u5C40"
                              })
                            })]
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-col",
                            style: "margin-top:2%;",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                              style: "font-size:24rpx;font-weight:550;",
                              children: "\u623F\u95F4\uFF1A\u65E5\u5F0F\u69BB\u69BB\u7C73"
                            })
                          })]
                        })]
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-row queue-tab-info",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                          src: _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_11___default.a,
                          mode: "widthFix",
                          style: "width:675rpx;z-index:-1;position:absolute;"
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                          style: "background-color:rgba(252, 95, 47, 0.5);position:absolute;right:37.5rpx;;font-size:24rpx;padding:10rpx;border-radius:0 20rpx 0 20rpx;",
                          children: "\u5DF2\u62FC\u6EE1"
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "at-row play-pic-position-info",
                          style: "width:21vw",
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                            className: "play-pic-info",
                            src: _img_image_10_png__WEBPACK_IMPORTED_MODULE_12___default.a,
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                              className: "play-pic-label-info",
                              children: "\u672C\u683C"
                            })
                          })
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "at-col play-intro-info",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-col play-name-position-info",
                            children: "\u6728\u516E\u50E7\u4E4B\u620F"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-row",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                              className: "at-col",
                              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                                className: "at-row play-time-position-info",
                                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                                  decode: "{{true}}",
                                  children: "04\u670803\u65E5 15:00"
                                })
                              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                                className: "at-row play-headcount-position-info",
                                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                                  className: "play-headcount-info",
                                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                                    decode: "{{true}}",
                                    children: "\u4EBA\u6570\uFF1A0/7"
                                  })
                                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                                  className: "play-male-position-info",
                                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                                    className: "gender-icon-info",
                                    src: _img_male_png__WEBPACK_IMPORTED_MODULE_14___default.a
                                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                                    children: "0/7"
                                  })]
                                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                                  className: "play-female-position-info",
                                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                                    className: "gender-icon-info",
                                    src: _img_female_png__WEBPACK_IMPORTED_MODULE_13___default.a
                                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                                    children: "0/4"
                                  })]
                                })]
                              })]
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                              className: "at-row",
                              style: "width:20vw;margin-right:20rpx;",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtButton */ "a"], {
                                type: "primary",
                                circle: "true",
                                className: "confirm-button",
                                onClick: console.log("邀请好友"),
                                children: "\u786E\u8BA4\u9501\u5C40"
                              })
                            })]
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-col",
                            style: "margin-top:2%;",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                              style: "font-size:24rpx;font-weight:550;",
                              children: "\u623F\u95F4\uFF1A\u65E5\u5F0F\u69BB\u69BB\u7C73"
                            })
                          })]
                        })]
                      })]
                    })
                  })
                })
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtTabsPane */ "g"], {
              current: this.state.current,
              index: 1,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "background:#FEF9F4;",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* ScrollView */ "j"], {
                  className: "scrollview",
                  scrollY: true,
                  scrollWithAnimation: true,
                  "show-scrollbar": "false",
                  scrollTop: scrollTop,
                  style: newScrollStyle,
                  lowerThreshold: Threshold,
                  upperThreshold: Threshold,
                  onScrollToUpper: this.onScrollToUpper.bind(this) // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
                  ,
                  onScroll: this.onScroll,
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-row queue-tab-info",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                      src: _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_11___default.a,
                      mode: "widthFix",
                      style: "width:675rpx;z-index:-1;position:absolute;"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row play-pic-position-info",
                      style: "width:21vw",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                        className: "play-pic-info",
                        src: _img_image_10_png__WEBPACK_IMPORTED_MODULE_12___default.a,
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                          className: "play-pic-label-info",
                          children: "\u672C\u683C"
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-col play-intro-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col play-name-position-info",
                        children: "\u6728\u516E\u50E7\u4E4B\u620F"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-row",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "at-col",
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-row",
                            style: "font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                              decode: "{{true}}",
                              children: "04\u670803\u65E5 15:00"
                            })
                          })
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col",
                        style: "margin-top:10%;",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                          style: "font-size:24rpx;font-weight:550;",
                          children: "\u623F\u95F4\uFF1A\u65E5\u5F0F\u69BB\u69BB\u7C73"
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row",
                      style: "width:20vw;display:flex;align-items:center;",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                        src: _img_image_8_png__WEBPACK_IMPORTED_MODULE_15___default.a,
                        style: "height:160rpx;width:160rpx;"
                      })
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-row queue-tab-info",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                      src: _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_11___default.a,
                      mode: "widthFix",
                      style: "width:675rpx;z-index:-1;position:absolute;"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row play-pic-position-info",
                      style: "width:21vw",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                        className: "play-pic-info",
                        src: _img_image_10_png__WEBPACK_IMPORTED_MODULE_12___default.a,
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                          className: "play-pic-label-info",
                          children: "\u672C\u683C"
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-col play-intro-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col play-name-position-info",
                        children: "\u6728\u516E\u50E7\u4E4B\u620F"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-row",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "at-col",
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-row",
                            style: "font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                              decode: "{{true}}",
                              children: "04\u670803\u65E5 15:00"
                            })
                          })
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col",
                        style: "margin-top:10%;",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                          style: "font-size:24rpx;font-weight:550;",
                          children: "\u623F\u95F4\uFF1A\u65E5\u5F0F\u69BB\u69BB\u7C73"
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row",
                      style: "width:20vw;display:flex;align-items:center;",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                        src: _img_image_8_png__WEBPACK_IMPORTED_MODULE_15___default.a,
                        style: "height:160rpx;width:160rpx;"
                      })
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-row queue-tab-info",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                      src: _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_11___default.a,
                      mode: "widthFix",
                      style: "width:675rpx;z-index:-1;position:absolute;"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row play-pic-position-info",
                      style: "width:21vw",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                        className: "play-pic-info",
                        src: _img_image_10_png__WEBPACK_IMPORTED_MODULE_12___default.a,
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                          className: "play-pic-label-info",
                          children: "\u672C\u683C"
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-col play-intro-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col play-name-position-info",
                        children: "\u6728\u516E\u50E7\u4E4B\u620F"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-row",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "at-col",
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-row",
                            style: "font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                              decode: "{{true}}",
                              children: "04\u670803\u65E5 15:00"
                            })
                          })
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col",
                        style: "margin-top:10%;",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                          style: "font-size:24rpx;font-weight:550;",
                          children: "\u623F\u95F4\uFF1A\u65E5\u5F0F\u69BB\u69BB\u7C73"
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row",
                      style: "width:20vw;display:flex;align-items:center;",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                        src: _img_image_8_png__WEBPACK_IMPORTED_MODULE_15___default.a,
                        style: "height:160rpx;width:160rpx;"
                      })
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-row queue-tab-info",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                      src: _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_11___default.a,
                      mode: "widthFix",
                      style: "width:675rpx;z-index:-1;position:absolute;"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row play-pic-position-info",
                      style: "width:21vw",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                        className: "play-pic-info",
                        src: _img_image_10_png__WEBPACK_IMPORTED_MODULE_12___default.a,
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                          className: "play-pic-label-info",
                          children: "\u672C\u683C"
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-col play-intro-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col play-name-position-info",
                        children: "\u6728\u516E\u50E7\u4E4B\u620F"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-row",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "at-col",
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-row",
                            style: "font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                              decode: "{{true}}",
                              children: "04\u670803\u65E5 15:00"
                            })
                          })
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col",
                        style: "margin-top:10%;",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                          style: "font-size:24rpx;font-weight:550;",
                          children: "\u623F\u95F4\uFF1A\u65E5\u5F0F\u69BB\u69BB\u7C73"
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row",
                      style: "width:20vw;display:flex;align-items:center;",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                        src: _img_image_8_png__WEBPACK_IMPORTED_MODULE_15___default.a,
                        style: "height:160rpx;width:160rpx;"
                      })
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-row queue-tab-info",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                      src: _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_11___default.a,
                      mode: "widthFix",
                      style: "width:675rpx;z-index:-1;position:absolute;"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row play-pic-position-info",
                      style: "width:21vw",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                        className: "play-pic-info",
                        src: _img_image_10_png__WEBPACK_IMPORTED_MODULE_12___default.a,
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                          className: "play-pic-label-info",
                          children: "\u672C\u683C"
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-col play-intro-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col play-name-position-info",
                        children: "\u6728\u516E\u50E7\u4E4B\u620F"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-row",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "at-col",
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-row",
                            style: "font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                              decode: "{{true}}",
                              children: "04\u670803\u65E5 15:00"
                            })
                          })
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col",
                        style: "margin-top:10%;",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                          style: "font-size:24rpx;font-weight:550;",
                          children: "\u623F\u95F4\uFF1A\u65E5\u5F0F\u69BB\u69BB\u7C73"
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row",
                      style: "width:20vw;display:flex;align-items:center;",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
                        src: _img_image_8_png__WEBPACK_IMPORTED_MODULE_15___default.a,
                        style: "height:160rpx;width:160rpx;"
                      })
                    })]
                  })]
                })
              })
            })]
          })]
        })
      });
    }
  }]);

  return Queueinfopage;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./src/pages/queueInfoPage/index.jsx":
/*!*******************************************!*\
  !*** ./src/pages/queueInfoPage/index.jsx ***!
  \*******************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.1@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!./index.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/queueInfoPage/index.jsx");


var config = {"navigationBarTitleText":"车队管理","disableScroll":true};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/queueInfoPage/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/queueInfoPage/index.scss":
/*!********************************************!*\
  !*** ./src/pages/queueInfoPage/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/queueInfoPage/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map