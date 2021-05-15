(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/queueManagePage/index"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/queueManagePage/index.jsx":
/*!*************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/queueManagePage/index.jsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Queuemanagepage; });
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
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.scss */ "./src/pages/queueManagePage/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_play_pic_2_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/play_pic_2.jpg */ "./src/img/play_pic_2.jpg");
/* harmony import */ var _img_play_pic_2_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_play_pic_2_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_scoreActive_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/scoreActive.png */ "./src/img/scoreActive.png");
/* harmony import */ var _img_scoreActive_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_scoreActive_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_scoreDeactive_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/scoreDeactive.png */ "./src/img/scoreDeactive.png");
/* harmony import */ var _img_scoreDeactive_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_scoreDeactive_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_member_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../img/member.png */ "./src/img/member.png");
/* harmony import */ var _img_member_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_member_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _img_male_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../img/male.png */ "./src/img/male.png");
/* harmony import */ var _img_male_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_img_male_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _img_female_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../img/female.png */ "./src/img/female.png");
/* harmony import */ var _img_female_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_img_female_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);




















var Queuemanagepage = /*#__PURE__*/function (_Component) {
  Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Queuemanagepage, _Component);

  var _super = Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Queuemanagepage);

  function Queuemanagepage() {
    Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Queuemanagepage);

    return _super.apply(this, arguments);
  }

  Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Queuemanagepage, [{
    key: "handleNavBack",
    value: function handleNavBack() {}
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
        height: "".concat(windowHeight_rpx - top_height_rpx - 90 - 150, "rpx")
      };
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
        className: "queueManagePage",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("image", {
          className: "queue-info-page",
          src: _img_play_pic_2_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
          style: "width:100vw;height:100vh;position:absolute"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
          className: "at-col",
          style: {
            padding: "".concat(top_height, "px 0px 0px 0px"),
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtNavBar */ "d"], {
            className: "nav-bar-info",
            onClickLeftIcon: this.handleNavBack.bind(this),
            color: "#ffff",
            leftIconType: "chevron-left",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "color:#fff;font-size:18px",
              children: "\u62FC\u8F66\u8BE6\u60C5"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* ScrollView */ "j"], {
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
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              className: "at-row",
              style: "height:300rpx;padding-top:5%;",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                className: "at-row play-pic-position-info",
                style: {
                  width: "".concat(system_width, "px")
                }
                /* 这里是用来规划image放置的位置 */
                ,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("image", {
                  src: _img_play_pic_2_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
                  style: "height:100%;width:90%;border-radius:10px;",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("text", {
                    className: "play-pic-label-info",
                    children: "\u672C\u683C"
                  })
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                className: "at-col"
                /*这里写的是StoreInfo 文字部分*/
                ,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  className: "play-name-position-info",
                  children: "\u6728\u516E\u50E7\u4E4B\u620F"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  className: "play-score-position-info",
                  children: ["\u96BE\u5EA6", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    style: "display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("image", {
                      src: _img_scoreActive_png__WEBPACK_IMPORTED_MODULE_12___default.a,
                      className: "play-score-pic-info",
                      style: "position:relative;left:-0px;"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("image", {
                      src: _img_scoreActive_png__WEBPACK_IMPORTED_MODULE_12___default.a,
                      className: "play-score-pic-info",
                      style: "position:relative;left:-3px;"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("image", {
                      src: _img_scoreActive_png__WEBPACK_IMPORTED_MODULE_12___default.a,
                      className: "play-score-pic-info",
                      style: "position:relative;left:-6px;"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("image", {
                      src: _img_scoreDeactive_png__WEBPACK_IMPORTED_MODULE_13___default.a,
                      className: "play-score-pic-info",
                      style: "position:relative;left:-9px;"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("image", {
                      src: _img_scoreDeactive_png__WEBPACK_IMPORTED_MODULE_13___default.a,
                      className: "play-score-pic-info",
                      style: "position:relative;left:-12px;"
                    })]
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  className: "play-headcount-position-info",
                  children: ["7\u4EBA\u672C", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    style: "display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%;",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("text", {
                      style: "background-color:#c0c0c0;color:rgb(80, 80, 80);padding: 0% 10%;border-radius:3px;",
                      children: "4\u75373\u5973"
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  className: "play-duration-position-info",
                  children: "\u6E38\u620F\u65F6\u957F\u7EA66\u5C0F\u65F6"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  className: "play-label-position-info",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("text", {
                    className: "play-label-info",
                    children: "\u672C\u683C"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("text", {
                    className: "play-label-info",
                    children: "\u672C\u683C"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("text", {
                    className: "play-label-info",
                    children: "\u672C\u683C"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("text", {
                    className: "play-label-info",
                    children: "\u672C\u683C"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("text", {
                    className: "play-label-info",
                    children: "\u672C\u683C"
                  })]
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: {
                minHeight: "".concat(windowHeight_rpx - top_height_rpx - 90 - 335 - 30 - 150, "rpx"),
                background: "#F9F9F9",
                marginTop: "5%"
              },
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                className: "at-row queue-time-tab-info",
                style: "padding-top:2%",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  className: "at-row",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-col",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row queue-start-time-info",
                      children: "\u5F00\u5C40\u65F6\u95F4"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row",
                      style: "font-size:14px;color:#000;height:70%;align-items:center;display:flex;justify-content:flex-start;padding-left:10%;",
                      children: "05\u670807\u65E5 12:00"
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  className: "at-row",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    className: "at-col",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row queue-antigender-info",
                      children: "\u662F\u5426\u63A5\u53D7\u53CD\u4E32"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      className: "at-row",
                      style: "font-size:14px;color:#000;height:70%;align-items:center;display:flex;justify-content:flex-start;padding-left:10%;",
                      children: "\u63A5\u53D7\u53CD\u4E32"
                    })]
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                className: "at-row queue-player-tab-info",
                style: "padding-top:2%",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  style: "display:flex;width:100%;margin-left:5%;align-items:center;",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("text", {
                    style: "font-size:14px;",
                    children: "\u8F66\u961F\u6210\u5458"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("text", {
                    style: "font-size:10px;",
                    children: "\uFF083/7\uFF09"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    style: "width:50rpx;position:absolute;margin-right:10%;right:0;",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtButton */ "a"], {
                      type: "primary",
                      circle: "true",
                      className: "add-player-but",
                      children: "\u6DFB\u52A0"
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  style: "height:10rpx;margin-left:5%;margin-right:5%;border:0px solid #97979755;border-bottom-width:1px;margin-bottom:20rpx;"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  style: "display:flex;width:100%;margin-left:5%;align-items:center;padding-bottom:10rpx;padding-top:10rpx;",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("image", {
                    src: _img_member_png__WEBPACK_IMPORTED_MODULE_14___default.a,
                    style: "height:100rpx;width:100rpx;background:#D8D8D8;border-radius:50rpx"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    style: "display:flex;flex-direction:column;justify-content:flex-start;",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      style: "display:flex;align-item:center;height:60rpx;",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("text", {
                        style: "font-size:12px;font-weight:520;",
                        children: "Caroline"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("image", {
                        src: _img_male_png__WEBPACK_IMPORTED_MODULE_15___default.a,
                        style: "height:25rpx;width:25rpx;"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("text", {
                      style: "font-size:10px;text-decoration:underline;",
                      children: "18615172123"
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    style: "width:120rpx;position:absolute;margin-right:7%;right:0;",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtButton */ "a"], {
                      type: "primary",
                      circle: "true",
                      className: "remove-player-but",
                      children: "\u79FB\u9664\u8F66\u961F"
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  style: "display:flex;width:100%;margin-left:5%;align-items:center;padding-bottom:10rpx;padding-top:10rpx;",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("image", {
                    src: _img_member_png__WEBPACK_IMPORTED_MODULE_14___default.a,
                    style: "height:100rpx;width:100rpx;background:#D8D8D8;border-radius:50rpx"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    style: "display:flex;flex-direction:column;justify-content:flex-start;",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                      style: "display:flex;align-item:center;height:60rpx;",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("text", {
                        style: "font-size:12px;font-weight:520;",
                        children: "Caroline"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("image", {
                        src: _img_female_png__WEBPACK_IMPORTED_MODULE_16___default.a,
                        style: "height:25rpx;width:25rpx;"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("text", {
                      style: "font-size:10px;text-decoration:underline;",
                      children: "18615172123"
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                    style: "width:120rpx;position:absolute;margin-right:7%;right:0;",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtButton */ "a"], {
                      type: "primary",
                      circle: "true",
                      className: "remove-player-but",
                      children: "\u79FB\u9664\u8F66\u961F"
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
                  style: "height:20rpx;"
                })]
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            className: "at-row",
            style: "position:fixed;bottom:0;height:150rpx;padding-top:2%;background-color:#fff",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtButton */ "a"], {
              type: "second",
              circle: "true",
              className: "invite-friends-button",
              children: "\u89E3\u6563\u8BE5\u5C40"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtButton */ "a"], {
              type: "primary",
              circle: "true",
              className: "join-queue-button",
              children: "\u786E\u8BA4\u9501\u5C40"
            })]
          })]
        })]
      });
    }
  }]);

  return Queuemanagepage;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./src/img/member.png":
/*!****************************!*\
  !*** ./src/img/member.png ***!
  \****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/member.png";

/***/ }),

/***/ "./src/img/play_pic_2.jpg":
/*!********************************!*\
  !*** ./src/img/play_pic_2.jpg ***!
  \********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/play_pic_2.jpg";

/***/ }),

/***/ "./src/img/scoreDeactive.png":
/*!***********************************!*\
  !*** ./src/img/scoreDeactive.png ***!
  \***********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/scoreDeactive.png";

/***/ }),

/***/ "./src/pages/queueManagePage/index.jsx":
/*!*********************************************!*\
  !*** ./src/pages/queueManagePage/index.jsx ***!
  \*********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.1@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!./index.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/queueManagePage/index.jsx");


var config = {"navigationBarTitleText":"车队详情","disableScroll":true};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/queueManagePage/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/queueManagePage/index.scss":
/*!**********************************************!*\
  !*** ./src/pages/queueManagePage/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/queueManagePage/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map