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
/* harmony import */ var C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.1@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_plugin-platform-weapp@3.2.1@@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! taro-ui */ "./node_modules/_taro-ui@3.0.0-alpha.10@taro-ui/dist/index.esm.js");
/* harmony import */ var _storeMainPage_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storeMainPage.scss */ "./src/pages/storeMainPage/storeMainPage.scss");
/* harmony import */ var _storeMainPage_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_storeMainPage_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_image_6_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/image-6.png */ "./src/img/image-6.png");
/* harmony import */ var _img_image_6_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_image_6_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_storeinfobk_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/storeinfobk.png */ "./src/img/storeinfobk.png");
/* harmony import */ var _img_storeinfobk_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_storeinfobk_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_image_1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/image-1.png */ "./src/img/image-1.png");
/* harmony import */ var _img_image_1_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_image_1_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_image_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/image.png */ "./src/img/image.png");
/* harmony import */ var _img_image_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_image_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_image_2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/image-2.png */ "./src/img/image-2.png");
/* harmony import */ var _img_image_2_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_image_2_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_image_3_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../img/image-3.png */ "./src/img/image-3.png");
/* harmony import */ var _img_image_3_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_image_3_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _img_image_4_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../img/image-4.png */ "./src/img/image-4.png");
/* harmony import */ var _img_image_4_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_img_image_4_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _img_image_5_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../img/image-5.png */ "./src/img/image-5.png");
/* harmony import */ var _img_image_5_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_img_image_5_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _img_image_10_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../img/image-10.png */ "./src/img/image-10.png");
/* harmony import */ var _img_image_10_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_img_image_10_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../img/queueinfobk.png */ "./src/img/queueinfobk.png");
/* harmony import */ var _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _img_female_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../img/female.png */ "./src/img/female.png");
/* harmony import */ var _img_female_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_img_female_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _img_male_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../img/male.png */ "./src/img/male.png");
/* harmony import */ var _img_male_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_img_male_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _img_image_8_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../img/image-8.png */ "./src/img/image-8.png");
/* harmony import */ var _img_image_8_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_img_image_8_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__);

























var Storemainpage = /*#__PURE__*/function (_Component) {
  Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Storemainpage, _Component);

  var _super = Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Storemainpage);

  function Storemainpage() {
    var _this;

    Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Storemainpage);

    _this = _super.apply(this, arguments);
    _this.state = {
      current: 0
    };
    return _this;
  }

  Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Storemainpage, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "handleClick",
    value: function handleClick(value) {
      this.setState({
        current: value
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
        height: "".concat(windowHeight_rpx - top_height_rpx - 20 - 170 - 50 - 20 - 170 - 80 - 180 - 80, "rpx")
      };
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
        className: "storeMainPage",
        style: {
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start"
        },
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
          src: _img_image_6_png__WEBPACK_IMPORTED_MODULE_9___default.a,
          style: "width:100vw;position:absolute;size:100%;z-index:-1;"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
          style: {
            paddingTop: "".concat(top_height_rpx + 20, "rpx"),
            height: "50rpx"
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
            style: "color:#FEFFFF;font-size:18px;",
            children: "\u9996\u9875"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
          style: "padding-top:20rpx;height:150rpx;width:100vw;",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
            mode: "heightFix",
            src: _img_storeinfobk_png__WEBPACK_IMPORTED_MODULE_10___default.a,
            style: "height:300rpx;width:660rpx;position:relative;left:45rpx;"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "height:200rpx;width:600rpx;position:relative;top:-260rpx;left:75rpx;display:flex;align-items:flex-start;justify-content:flex-start",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
              src: _img_image_10_png__WEBPACK_IMPORTED_MODULE_17___default.a,
              style: "height:200rpx;width:200rpx;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-left:20rpx;",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                style: "height:50rpx;width:360rpx;font-size:36rpx;font-weight:600;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;",
                children: "\u60CA\u5267\u9986\xB7\u5267\u672C\u6740\xB7\u72FC\u4EBA\u6740"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "height:60rpx;"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                style: "height:50rpx;width:360rpx;font-size:23rpx;font-weight:550;",
                children: "\u5E97\u94FAID\uFF1A2104130001"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                style: "height:50rpx;width:360rpx;font-size:23rpx;font-weight:550;",
                children: "\u7BA1\u7406\u5458\uFF1ARocklove"
              })]
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
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
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: {
              height: "80rpx",
              width: "660rpx",
              marginTop: "170rpx"
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
              src: _img_image_1_png__WEBPACK_IMPORTED_MODULE_11___default.a,
              mode: "widthFix",
              style: "width:660rpx;z-index:-1;"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: {
              height: "180rpx",
              width: "660rpx",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: "20rpx"
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                  src: _img_image_png__WEBPACK_IMPORTED_MODULE_12___default.a,
                  style: "height:30px;width:30px;"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                style: "font-size:12px;font-weight:400;margin-top:10%;",
                children: "\u5E97\u94FA\u7BA1\u7406"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "width:40rpx;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                  src: _img_image_2_png__WEBPACK_IMPORTED_MODULE_13___default.a,
                  style: "height:30px;width:30px;"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                style: "font-size:12px;font-weight:400;margin-top:10%;",
                children: "\u5267\u672C\u7BA1\u7406"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "width:40rpx;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                  src: _img_image_3_png__WEBPACK_IMPORTED_MODULE_14___default.a,
                  style: "height:30px;width:30px;"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                style: "font-size:12px;font-weight:400;margin-top:10%;",
                children: "\u652F\u4ED8\u7BA1\u7406"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "width:40rpx;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                  src: _img_image_4_png__WEBPACK_IMPORTED_MODULE_15___default.a,
                  style: "height:30px;width:30px;"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                style: "font-size:12px;font-weight:400;margin-top:10%;",
                children: "\u8F66\u961F\u7BA1\u7406"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "width:40rpx;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                style: "background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                  src: _img_image_5_png__WEBPACK_IMPORTED_MODULE_16___default.a,
                  style: "height:30px;width:30px;"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                style: "font-size:12px;font-weight:400;margin-top:10%;",
                children: "\u5E97\u94FA\u5206\u4EAB"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtTabs */ "f"]
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
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtTabsPane */ "g"], {
                current: this.state.current,
                index: 0,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* ScrollView */ "j"], {
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
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-row queue-tab-info",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                      src: _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_18___default.a,
                      mode: "widthFix",
                      style: "width:675rpx;z-index:-1;position:absolute;"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                      style: "background-color:rgba(252, 166, 47, 0.5);position:absolute;right:37.5rpx;;font-size:24rpx;padding:10rpx;border-radius:0 20rpx 0 20rpx;",
                      children: "\u672A\u62FC\u6EE1"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row play-pic-position-info",
                      style: "width:21vw",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                        className: "play-pic-info",
                        src: _img_image_10_png__WEBPACK_IMPORTED_MODULE_17___default.a,
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                          className: "play-pic-label-info",
                          children: "\u672C\u683C"
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-col play-intro-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col play-name-position-info",
                        children: "\u6728\u516E\u50E7\u4E4B\u620F"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-row",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "at-col",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-row play-time-position-info",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                              decode: "{{true}}",
                              children: "04\u670803\u65E5 15:00"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-row play-headcount-position-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                              className: "play-headcount-info",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                                decode: "{{true}}",
                                children: "\u4EBA\u6570\uFF1A0/7"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                              className: "play-male-position-info",
                              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                                className: "gender-icon-info",
                                src: _img_male_png__WEBPACK_IMPORTED_MODULE_20___default.a
                              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                                children: "0/7"
                              })]
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                              className: "play-female-position-info",
                              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                                className: "gender-icon-info",
                                src: _img_female_png__WEBPACK_IMPORTED_MODULE_19___default.a
                              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                                children: "0/4"
                              })]
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "at-row",
                          style: "width:20vw;margin-right:20rpx;",
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtButton */ "a"], {
                            type: "primary",
                            circle: "true",
                            className: "confirm-button",
                            onClick: console.log("邀请好友"),
                            children: "\u786E\u8BA4\u9501\u5C40"
                          })
                        })]
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col",
                        style: "margin-top:2%;",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                          style: "font-size:24rpx;font-weight:550;",
                          children: "\u623F\u95F4\uFF1A\u65E5\u5F0F\u69BB\u69BB\u7C73"
                        })
                      })]
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-row queue-tab-info",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                      src: _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_18___default.a,
                      mode: "widthFix",
                      style: "width:675rpx;z-index:-1;position:absolute;"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                      style: "background-color:rgba(252, 95, 47, 0.5);position:absolute;right:37.5rpx;;font-size:24rpx;padding:10rpx;border-radius:0 20rpx 0 20rpx;",
                      children: "\u5DF2\u62FC\u6EE1"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row play-pic-position-info",
                      style: "width:21vw",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                        className: "play-pic-info",
                        src: _img_image_10_png__WEBPACK_IMPORTED_MODULE_17___default.a,
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                          className: "play-pic-label-info",
                          children: "\u672C\u683C"
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-col play-intro-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col play-name-position-info",
                        children: "\u6728\u516E\u50E7\u4E4B\u620F"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-row",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "at-col",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-row play-time-position-info",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                              decode: "{{true}}",
                              children: "04\u670803\u65E5 15:00"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-row play-headcount-position-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                              className: "play-headcount-info",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                                decode: "{{true}}",
                                children: "\u4EBA\u6570\uFF1A0/7"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                              className: "play-male-position-info",
                              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                                className: "gender-icon-info",
                                src: _img_male_png__WEBPACK_IMPORTED_MODULE_20___default.a
                              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                                children: "0/7"
                              })]
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                              className: "play-female-position-info",
                              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                                className: "gender-icon-info",
                                src: _img_female_png__WEBPACK_IMPORTED_MODULE_19___default.a
                              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                                children: "0/4"
                              })]
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "at-row",
                          style: "width:20vw;margin-right:20rpx;",
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtButton */ "a"], {
                            type: "primary",
                            circle: "true",
                            className: "confirm-button",
                            onClick: console.log("邀请好友"),
                            children: "\u786E\u8BA4\u9501\u5C40"
                          })
                        })]
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col",
                        style: "margin-top:2%;",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                          style: "font-size:24rpx;font-weight:550;",
                          children: "\u623F\u95F4\uFF1A\u65E5\u5F0F\u69BB\u69BB\u7C73"
                        })
                      })]
                    })]
                  })]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtTabsPane */ "g"], {
                current: this.state.current,
                index: 1,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* ScrollView */ "j"], {
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
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-row queue-tab-info",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                      src: _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_18___default.a,
                      mode: "widthFix",
                      style: "width:675rpx;z-index:-1;position:absolute;"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row play-pic-position-info",
                      style: "width:21vw",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                        className: "play-pic-info",
                        src: _img_image_10_png__WEBPACK_IMPORTED_MODULE_17___default.a,
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                          className: "play-pic-label-info",
                          children: "\u672C\u683C"
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-col play-intro-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col play-name-position-info",
                        children: "\u6728\u516E\u50E7\u4E4B\u620F"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-row",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "at-col",
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-row",
                            style: "font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                              decode: "{{true}}",
                              children: "04\u670803\u65E5 15:00"
                            })
                          })
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col",
                        style: "margin-top:10%;",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                          style: "font-size:24rpx;font-weight:550;",
                          children: "\u623F\u95F4\uFF1A\u65E5\u5F0F\u69BB\u69BB\u7C73"
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row",
                      style: "width:20vw;display:flex;align-items:center;",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                        src: _img_image_8_png__WEBPACK_IMPORTED_MODULE_21___default.a,
                        style: "height:160rpx;width:160rpx;"
                      })
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-row queue-tab-info",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                      src: _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_18___default.a,
                      mode: "widthFix",
                      style: "width:675rpx;z-index:-1;position:absolute;"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row play-pic-position-info",
                      style: "width:21vw",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                        className: "play-pic-info",
                        src: _img_image_10_png__WEBPACK_IMPORTED_MODULE_17___default.a,
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                          className: "play-pic-label-info",
                          children: "\u672C\u683C"
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-col play-intro-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col play-name-position-info",
                        children: "\u6728\u516E\u50E7\u4E4B\u620F"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-row",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "at-col",
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-row",
                            style: "font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                              decode: "{{true}}",
                              children: "04\u670803\u65E5 15:00"
                            })
                          })
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col",
                        style: "margin-top:10%;",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                          style: "font-size:24rpx;font-weight:550;",
                          children: "\u623F\u95F4\uFF1A\u65E5\u5F0F\u69BB\u69BB\u7C73"
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row",
                      style: "width:20vw;display:flex;align-items:center;",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                        src: _img_image_8_png__WEBPACK_IMPORTED_MODULE_21___default.a,
                        style: "height:160rpx;width:160rpx;"
                      })
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-row queue-tab-info",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                      src: _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_18___default.a,
                      mode: "widthFix",
                      style: "width:675rpx;z-index:-1;position:absolute;"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row play-pic-position-info",
                      style: "width:21vw",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                        className: "play-pic-info",
                        src: _img_image_10_png__WEBPACK_IMPORTED_MODULE_17___default.a,
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                          className: "play-pic-label-info",
                          children: "\u672C\u683C"
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-col play-intro-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col play-name-position-info",
                        children: "\u6728\u516E\u50E7\u4E4B\u620F"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-row",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "at-col",
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-row",
                            style: "font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                              decode: "{{true}}",
                              children: "04\u670803\u65E5 15:00"
                            })
                          })
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col",
                        style: "margin-top:10%;",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                          style: "font-size:24rpx;font-weight:550;",
                          children: "\u623F\u95F4\uFF1A\u65E5\u5F0F\u69BB\u69BB\u7C73"
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row",
                      style: "width:20vw;display:flex;align-items:center;",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                        src: _img_image_8_png__WEBPACK_IMPORTED_MODULE_21___default.a,
                        style: "height:160rpx;width:160rpx;"
                      })
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-row queue-tab-info",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                      src: _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_18___default.a,
                      mode: "widthFix",
                      style: "width:675rpx;z-index:-1;position:absolute;"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row play-pic-position-info",
                      style: "width:21vw",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                        className: "play-pic-info",
                        src: _img_image_10_png__WEBPACK_IMPORTED_MODULE_17___default.a,
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                          className: "play-pic-label-info",
                          children: "\u672C\u683C"
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-col play-intro-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col play-name-position-info",
                        children: "\u6728\u516E\u50E7\u4E4B\u620F"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-row",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "at-col",
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-row",
                            style: "font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                              decode: "{{true}}",
                              children: "04\u670803\u65E5 15:00"
                            })
                          })
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col",
                        style: "margin-top:10%;",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                          style: "font-size:24rpx;font-weight:550;",
                          children: "\u623F\u95F4\uFF1A\u65E5\u5F0F\u69BB\u69BB\u7C73"
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row",
                      style: "width:20vw;display:flex;align-items:center;",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                        src: _img_image_8_png__WEBPACK_IMPORTED_MODULE_21___default.a,
                        style: "height:160rpx;width:160rpx;"
                      })
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-row queue-tab-info",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                      src: _img_queueinfobk_png__WEBPACK_IMPORTED_MODULE_18___default.a,
                      mode: "widthFix",
                      style: "width:675rpx;z-index:-1;position:absolute;"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row play-pic-position-info",
                      style: "width:21vw",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                        className: "play-pic-info",
                        src: _img_image_10_png__WEBPACK_IMPORTED_MODULE_17___default.a,
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                          className: "play-pic-label-info",
                          children: "\u672C\u683C"
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-col play-intro-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col play-name-position-info",
                        children: "\u6728\u516E\u50E7\u4E4B\u620F"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-row",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                          className: "at-col",
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                            className: "at-row",
                            style: "font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                              decode: "{{true}}",
                              children: "04\u670803\u65E5 15:00"
                            })
                          })
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                        className: "at-col",
                        style: "margin-top:10%;",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("text", {
                          style: "font-size:24rpx;font-weight:550;",
                          children: "\u623F\u95F4\uFF1A\u65E5\u5F0F\u69BB\u69BB\u7C73"
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row",
                      style: "width:20vw;display:flex;align-items:center;",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("image", {
                        src: _img_image_8_png__WEBPACK_IMPORTED_MODULE_21___default.a,
                        style: "height:160rpx;width:160rpx;"
                      })
                    })]
                  })]
                })
              })]
            })
          })]
        })]
      });
    }
  }]);

  return Storemainpage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



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

/***/ "./src/img/image-6.png":
/*!*****************************!*\
  !*** ./src/img/image-6.png ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image-6.png";

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