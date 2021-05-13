(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/playSearchPage/playSearchPage"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/playSearchPage/playSearchPage.jsx":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/playSearchPage/playSearchPage.jsx ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Playsearchpage; });
/* harmony import */ var C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.1@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_plugin-platform-weapp@3.2.1@@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! taro-ui */ "./node_modules/_taro-ui@3.0.0-alpha.10@taro-ui/dist/index.esm.js");
/* harmony import */ var _playSearchPage_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./playSearchPage.scss */ "./src/pages/playSearchPage/playSearchPage.scss");
/* harmony import */ var _playSearchPage_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_playSearchPage_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_image_10_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/image-10.png */ "./src/img/image-10.png");
/* harmony import */ var _img_image_10_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_image_10_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_male_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/male.png */ "./src/img/male.png");
/* harmony import */ var _img_male_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_male_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_female_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/female.png */ "./src/img/female.png");
/* harmony import */ var _img_female_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_female_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_scoreActive_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/scoreActive.png */ "./src/img/scoreActive.png");
/* harmony import */ var _img_scoreActive_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_scoreActive_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_background2_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../img/background2.jpg */ "./src/img/background2.jpg");
/* harmony import */ var _img_background2_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_background2_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);


















var Playsearchpage = /*#__PURE__*/function (_Component) {
  Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Playsearchpage, _Component);

  var _super = Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Playsearchpage);

  function Playsearchpage() {
    var _this;

    Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Playsearchpage);

    _this = _super.apply(this, arguments);
    _this.state = {
      value: '',
      tagActiveNum: 0,
      plays_num: 0,
      plays_list: [],
      current: 0,
      playInfo: {
        play_name: "木兮僧之戏",
        play_headcount: 7,
        play_male_num: 4,
        play_female_num: 3
      }
    };
    return _this;
  }

  Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Playsearchpage, [{
    key: "handleCreateQueue",
    value: function handleCreateQueue() {}
  }, {
    key: "onScrollToUpper",
    value: function onScrollToUpper() {} // or 使用箭头函数
    // onScrollToUpper = () => {}

  }, {
    key: "onScroll",
    value: function onScroll(e) {//console.log(e.detail)
    }
  }, {
    key: "onScrollToUpperY",
    value: function onScrollToUpperY() {} // or 使用箭头函数
    // onScrollToUpper = () => {}

  }, {
    key: "onScrollY",
    value: function onScrollY(e) {//console.log(e.detail)
    }
  }, {
    key: "onChange",
    value: function onChange(value) {
      this.setState({
        value: value
      });
    }
  }, {
    key: "handleNavBack",
    value: function handleNavBack() {}
  }, {
    key: "onActionClick",
    value: function onActionClick() {}
  }, {
    key: "onTagClick",
    value: function onTagClick(active) {
      console.log(active);
      this.setState({
        tagActiveNum: active
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(value) {
      this.setState({
        current: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _jsxs2; //Taro.hideTabBar();


      var top_height = wx.getSystemInfoSync().statusBarHeight;
      var screenHeight = wx.getSystemInfoSync().screenHeight;
      var screenWidth = wx.getSystemInfoSync().screenWidth;
      var windowHeight = wx.getSystemInfoSync().windowHeight;
      var screenHeight_rpx = 750 * (screenHeight / screenWidth);
      var windowHeight_rpx = 750 * (windowHeight / screenWidth);
      var top_height_rpx = 750 * (top_height / screenWidth);
      var scrollTop = 0;
      var Threshold = 20;
      var scrollStyle = {
        width: '75vw'
      };
      var scrollStyleY = {
        height: "".concat(screenHeight_rpx - top_height_rpx - 320, "rpx")
      };
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
        className: "JoinQueueSelectInfo",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
          className: "at-col",
          style: {
            padding: "".concat(top_height, "px 0px 0px 0px")
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtNavBar */ "d"], {
            className: "nav-bar-info",
            onClickLeftIcon: this.handleNavBack,
            color: "#ffff",
            leftIconType: "chevron-left",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
              style: "color:#fff;font-size:18px",
              children: "\u5267\u672C\u5217\u8868"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtTabs */ "f"]
          /* TODO: 这部分需要重构，红点没实现，列表不同日期显示不同灰度也没实现 */
          , {
            className: "tabs-info",
            current: this.state.current,
            scroll: true,
            tabList: [{
              title: '剧本总库'
            }, {
              title: '门店库'
            }],
            onClick: this.handleClick.bind(this),
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtTabsPane */ "g"], {
              current: this.state.current,
              index: 0,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                src: _img_background2_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
                style: "width:100vw;height:100vh;position:absolute;"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                className: "at-col",
                style: "height:150rpx;background-color:#FFFEFFFF;"
                /* 这里是*/

              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* ScrollView */ "j"], {
                className: "scrollviewY",
                scrollY: true,
                scrollWithAnimation: true,
                "show-scrollbar": "false",
                scrollTop: scrollTop,
                style: scrollStyleY,
                lowerThreshold: Threshold,
                upperThreshold: Threshold,
                onScrollToUpper: this.onScrollToUpperY.bind(this) // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
                ,
                onScroll: this.onScrollY,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                  className: "at-row queue-tab-info",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                    className: "at-row play-pic-position-info",
                    style: "width:21vw"
                    /* 这里写的是 每个tab上剧本图片的位置*/
                    ,
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                      className: "play-pic-info",
                      src: _img_image_10_png__WEBPACK_IMPORTED_MODULE_10___default.a,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                        className: "play-pic-label-info",
                        children: "\u672C\u683C"
                      })
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                    className: "at-col play-intro-info"
                    /*这里的信息是每个tab上 剧本的一些文字信息 */
                    ,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                      className: "at-col play-name-position-info",
                      children: this.state.playInfo.play_name
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                      className: "at-row"
                      /* =- 这一部分是这样，两列，第一列有两行文字，第二列用来放按钮 */
                      ,
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                        className: "at-col"
                        /* 第一列 有两行*/
                        ,
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                          className: "play-score-position-info",
                          children: ["\u96BE\u5EA6", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                            style: "display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                              src: _img_scoreActive_png__WEBPACK_IMPORTED_MODULE_13___default.a,
                              className: "play-score-pic-info",
                              style: "position:relative;left:-0px;"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                              src: _img_scoreActive_png__WEBPACK_IMPORTED_MODULE_13___default.a,
                              className: "play-score-pic-info",
                              style: "position:relative;left:-3px;"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                              src: _img_scoreActive_png__WEBPACK_IMPORTED_MODULE_13___default.a,
                              className: "play-score-pic-info",
                              style: "position:relative;left:-6px;"
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                          className: "at-row play-headcount-position-info"
                          /* 这一部分有三列 */
                          ,
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                            className: "play-headcount-info",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])("text", {
                              decode: "{{true}}",
                              children: [this.state.playInfo.play_headcount, "\u4EBA\u672C"]
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                            className: "play-male-position-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                              className: "gender-icon-info",
                              src: _img_male_png__WEBPACK_IMPORTED_MODULE_11___default.a
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                              children: this.state.playInfo.play_male_num
                            })]
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                            className: "play-female-position-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                              className: "gender-icon-info",
                              src: _img_female_png__WEBPACK_IMPORTED_MODULE_12___default.a
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                              children: this.state.playInfo.play_female_num
                            })]
                          })]
                        })]
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                        className: "at-row",
                        style: "width:20vw"
                        /*第二列是用来放按钮 */
                        ,
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtButton */ "a"], {
                          type: "primary",
                          circle: "true",
                          className: "join-button",
                          onClick: this.handleCreateQueue.bind(this),
                          children: "\u6DFB\u52A0"
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                      className: "at-col play-label-position-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                        className: "play-label-info",
                        children: "\u672C\u683C"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                        className: "play-label-info",
                        children: "\u672C\u683C"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                        className: "play-label-info",
                        children: "\u672C\u683C"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                        className: "play-label-info",
                        children: "\u672C\u683C"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                        className: "play-label-info",
                        children: "\u672C\u683C"
                      })]
                    })]
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                  className: "at-row queue-tab-info",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                    className: "at-row play-pic-position-info",
                    style: "width:21vw"
                    /* 这里写的是 每个tab上剧本图片的位置*/
                    ,
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                      className: "play-pic-info",
                      src: _img_image_10_png__WEBPACK_IMPORTED_MODULE_10___default.a,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                        className: "play-pic-label-info",
                        children: "\u672C\u683C"
                      })
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                    className: "at-col play-intro-info"
                    /*这里的信息是每个tab上 剧本的一些文字信息 */
                    ,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                      className: "at-col play-name-position-info",
                      children: this.state.playInfo.play_name
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                      className: "at-row"
                      /* =- 这一部分是这样，两列，第一列有两行文字，第二列用来放按钮 */
                      ,
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                        className: "at-col"
                        /* 第一列 有两行*/
                        ,
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                          className: "play-score-position-info",
                          children: ["\u96BE\u5EA6", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                            style: "display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                              src: _img_scoreActive_png__WEBPACK_IMPORTED_MODULE_13___default.a,
                              className: "play-score-pic-info",
                              style: "position:relative;left:-0px;"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                              src: _img_scoreActive_png__WEBPACK_IMPORTED_MODULE_13___default.a,
                              className: "play-score-pic-info",
                              style: "position:relative;left:-3px;"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                              src: _img_scoreActive_png__WEBPACK_IMPORTED_MODULE_13___default.a,
                              className: "play-score-pic-info",
                              style: "position:relative;left:-6px;"
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                          className: "at-row play-headcount-position-info"
                          /* 这一部分有三列 */
                          ,
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                            className: "play-headcount-info",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])("text", {
                              decode: "{{true}}",
                              children: [this.state.playInfo.play_headcount, "\u4EBA\u672C"]
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                            className: "play-male-position-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                              className: "gender-icon-info",
                              src: _img_male_png__WEBPACK_IMPORTED_MODULE_11___default.a
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                              children: this.state.playInfo.play_male_num
                            })]
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                            className: "play-female-position-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                              className: "gender-icon-info",
                              src: _img_female_png__WEBPACK_IMPORTED_MODULE_12___default.a
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                              children: this.state.playInfo.play_female_num
                            })]
                          })]
                        })]
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                        className: "at-row",
                        style: "width:20vw"
                        /*第二列是用来放按钮 */
                        ,
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtButton */ "a"], {
                          type: "primary",
                          circle: "true",
                          className: "join-button",
                          onClick: this.handleCreateQueue.bind(this),
                          children: "\u6DFB\u52A0"
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                      className: "at-col play-label-position-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                        className: "play-label-info",
                        children: "\u672C\u683C"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                        className: "play-label-info",
                        children: "\u672C\u683C"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                        className: "play-label-info",
                        children: "\u672C\u683C"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                        className: "play-label-info",
                        children: "\u672C\u683C"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                        className: "play-label-info",
                        children: "\u672C\u683C"
                      })]
                    })]
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                  className: "at-row tab-blank"
                }), " "]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtTabsPane */ "g"], {
              current: this.state.current,
              index: 1,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                src: _img_background2_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
                style: "width:100vw;height:100vh;position:absolute;"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                className: "at-col",
                style: "height:150rpx;background-color:#FFFEFFFF;"
                /* 这里是*/

              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* ScrollView */ "j"], {
                className: "scrollviewY",
                scrollY: true,
                scrollWithAnimation: true,
                "show-scrollbar": "false",
                scrollTop: scrollTop,
                style: scrollStyleY,
                lowerThreshold: Threshold,
                upperThreshold: Threshold,
                onScrollToUpper: this.onScrollToUpperY.bind(this) // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
                ,
                onScroll: this.onScrollY,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                  className: "at-row queue-tab-info",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                    className: "at-row play-pic-position-info",
                    style: "width:21vw"
                    /* 这里写的是 每个tab上剧本图片的位置*/
                    ,
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                      className: "play-pic-info",
                      src: _img_image_10_png__WEBPACK_IMPORTED_MODULE_10___default.a,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                        className: "play-pic-label-info",
                        children: "\u672C\u683C"
                      })
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                    className: "at-col play-intro-info"
                    /*这里的信息是每个tab上 剧本的一些文字信息 */
                    ,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                      className: "at-col play-name-position-info",
                      children: this.state.playInfo.play_name
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                      className: "at-row"
                      /* =- 这一部分是这样，两列，第一列有两行文字，第二列用来放按钮 */
                      ,
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                        className: "at-col"
                        /* 第一列 有两行*/
                        ,
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                          className: "play-score-position-info",
                          children: ["\u96BE\u5EA6", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                            style: "display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                              src: _img_scoreActive_png__WEBPACK_IMPORTED_MODULE_13___default.a,
                              className: "play-score-pic-info",
                              style: "position:relative;left:-0px;"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                              src: _img_scoreActive_png__WEBPACK_IMPORTED_MODULE_13___default.a,
                              className: "play-score-pic-info",
                              style: "position:relative;left:-3px;"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                              src: _img_scoreActive_png__WEBPACK_IMPORTED_MODULE_13___default.a,
                              className: "play-score-pic-info",
                              style: "position:relative;left:-6px;"
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                          className: "at-row play-headcount-position-info"
                          /* 这一部分有三列 */
                          ,
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                            className: "play-headcount-info",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])("text", {
                              decode: "{{true}}",
                              children: [this.state.playInfo.play_headcount, "\u4EBA\u672C"]
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                            className: "play-male-position-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                              className: "gender-icon-info",
                              src: _img_male_png__WEBPACK_IMPORTED_MODULE_11___default.a
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                              children: this.state.playInfo.play_male_num
                            })]
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                            className: "play-female-position-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("image", {
                              className: "gender-icon-info",
                              src: _img_female_png__WEBPACK_IMPORTED_MODULE_12___default.a
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                              children: this.state.playInfo.play_female_num
                            })]
                          })]
                        })]
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                        className: "at-row",
                        style: "width:20vw"
                        /*第二列是用来放按钮 */
                        ,
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtButton */ "a"], {
                          type: "primary",
                          circle: "true",
                          className: "join-button",
                          onClick: this.handleCreateQueue.bind(this),
                          children: "\u6DFB\u52A0"
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                      className: "at-col play-label-position-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                        className: "play-label-info",
                        children: "\u672C\u683C"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                        className: "play-label-info",
                        children: "\u672C\u683C"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                        className: "play-label-info",
                        children: "\u672C\u683C"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                        className: "play-label-info",
                        children: "\u672C\u683C"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("text", {
                        className: "play-label-info",
                        children: "\u672C\u683C"
                      })]
                    })]
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                  className: "at-row tab-blank"
                }), " "]
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
            className: "at-col",
            style: {
              height: "150rpx",
              backgroundColor: "#FFFEFFFF",
              position: "absolute",
              top: "".concat(top_height_rpx + 150 + 20, "rpx")
            }
            /* 这里是*/
            ,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtSearchBar */ "e"], {
              className: "search-bar-info",
              showActionButton: true,
              value: this.state.value,
              onChange: this.onChange.bind(this),
              onActionClick: this.onActionClick.bind(this)
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
              className: "at-row",
              style: "margin-top: 2%;margin-bottom: 2%;",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                className: "",
                style: "width:15vw;align-items:flex-end;display:flex;justify-content:flex-end;",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtTag */ "h"], {
                  className: "tag-button-info",
                  name: "ALL",
                  type: "primary",
                  active: this.state.tagActiveNum == 0 ? true : false,
                  circle: true,
                  onClick: this.onTagClick.bind(this, 0),
                  children: "\u5168\u90E8"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* ScrollView */ "j"], (_jsxs2 = {
                className: "scrollview",
                style: "",
                scrollX: true,
                scrollWithAnimation: true,
                "show-scrollbar": "false",
                scrollTop: scrollTop
              }, Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_jsxs2, "style", scrollStyle), Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_jsxs2, "lowerThreshold", Threshold), Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_jsxs2, "upperThreshold", Threshold), Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_jsxs2, "onScrollToUpper", this.onScrollToUpper.bind(this)), Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_jsxs2, "onScroll", this.onScroll), Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_jsxs2, "children", [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtTag */ "h"], {
                className: "tag-num-button-info",
                name: "4p",
                type: "primary",
                active: this.state.tagActiveNum == 4 ? true : false,
                circle: true,
                onClick: this.onTagClick.bind(this, 4),
                children: "4\u4EBA"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtTag */ "h"], {
                className: "tag-num-button-info",
                name: "5p",
                type: "primary",
                active: this.state.tagActiveNum == 5 ? true : false,
                circle: true,
                onClick: this.onTagClick.bind(this, 5),
                children: "5\u4EBA"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtTag */ "h"], {
                className: "tag-num-button-info",
                name: "6p",
                type: "primary",
                active: this.state.tagActiveNum == 6 ? true : false,
                circle: true,
                onClick: this.onTagClick.bind(this, 6),
                children: "6\u4EBA"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtTag */ "h"], {
                className: "tag-num-button-info",
                name: "7p",
                type: "primary",
                active: this.state.tagActiveNum == 7 ? true : false,
                circle: true,
                onClick: this.onTagClick.bind(this, 7),
                children: "7\u4EBA"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtTag */ "h"], {
                className: "tag-num-button-info",
                name: "8p",
                type: "primary",
                active: this.state.tagActiveNum == 8 ? true : false,
                circle: true,
                onClick: this.onTagClick.bind(this, 8),
                children: "8\u4EBA"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtTag */ "h"], {
                className: "tag-num-button-info",
                name: "9p",
                type: "primary",
                active: this.state.tagActiveNum == 9 ? true : false,
                circle: true,
                onClick: this.onTagClick.bind(this, 9),
                children: "9\u4EBA"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtTag */ "h"], {
                className: "tag-num-button-info",
                name: "10p",
                type: "primary",
                active: this.state.tagActiveNum == 10 ? true : false,
                circle: true,
                onClick: this.onTagClick.bind(this, 10),
                children: "10\u4EBA"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtTag */ "h"], {
                className: "tag-num-button-info",
                name: "11p",
                type: "primary",
                active: this.state.tagActiveNum == 11 ? true : false,
                circle: true,
                onClick: this.onTagClick.bind(this, 11),
                children: "11\u4EBA"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtTag */ "h"], {
                className: "tag-num-button-info",
                name: "12p",
                type: "primary",
                active: this.state.tagActiveNum == 12 ? true : false,
                circle: true,
                onClick: this.onTagClick.bind(this, 12),
                children: "12\u4EBA"
              })]), _jsxs2)), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                className: "",
                style: "width:10vw;align-items:flex-end;display:flex;justify-content:center;",
                children: "o"
              })]
            })]
          })]
        })
      });
    }
  }]);

  return Playsearchpage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/img/background2.jpg":
/*!*********************************!*\
  !*** ./src/img/background2.jpg ***!
  \*********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/background2.jpg";

/***/ }),

/***/ "./src/pages/playSearchPage/playSearchPage.jsx":
/*!*****************************************************!*\
  !*** ./src/pages/playSearchPage/playSearchPage.jsx ***!
  \*****************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.1@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_playSearchPage_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!./playSearchPage.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/playSearchPage/playSearchPage.jsx");


var config = {"navigationBarTitleText":"剧本管理","disableScroll":true};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_playSearchPage_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/playSearchPage/playSearchPage', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/playSearchPage/playSearchPage.scss":
/*!******************************************************!*\
  !*** ./src/pages/playSearchPage/playSearchPage.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/playSearchPage/playSearchPage.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=playSearchPage.js.map