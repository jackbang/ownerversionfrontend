(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/regenerator/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.0@@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/index/index.jsx":
/*!***************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/index/index.jsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.1@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_plugin-platform-weapp@3.2.1@@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! taro-ui */ "./node_modules/_taro-ui@3.0.0-alpha.10@taro-ui/dist/index.esm.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! dayjs */ "./node_modules/_dayjs@1.10.4@dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! dayjs/locale/zh-cn */ "./node_modules/_dayjs@1.10.4@dayjs/locale/zh-cn.js");
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_image_13_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/image-13.png */ "./src/img/image-13.png");
/* harmony import */ var _img_image_13_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_image_13_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../service/api */ "./src/service/api.js");
/* harmony import */ var _service_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../service/config */ "./src/service/config.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);



















var Index = /*#__PURE__*/function (_Component) {
  Object(C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Index, _Component);

  var _super = Object(C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Index);

  function Index() {
    var _this2;

    Object(C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Index);

    _this2 = _super.apply(this, arguments);
    _this2.state = {
      adminInfo: {},
      pageKind: 0,
      //0 login, 1 phone number input, 2 phone number valid, 3 select store
      validate_code: ['', '', '', '', '', ''],
      validate_code_focus: 9,
      server_validate_code: '111111',
      countDownStart: 59,
      countDownNum: 0,
      storeList: [],
      selectStoreId: 0,
      showInput: false,
      isLogin: false,
      infoLoading: true
    };
    return _this2;
  }

  Object(C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      console.log('reShow');
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "getStoreList",
    value: function getStoreList(that) {
      var upload_data = {
        adminId: that.state.adminInfo.adminId,
        sessionId: that.state.adminInfo.sessionId,
        phone: that.state.adminInfo.phoneNumber,
        appId: wx.getAccountInfoSync().miniProgram.appId,
        token: (dayjs__WEBPACK_IMPORTED_MODULE_11___default()().unix() + 1000) * 2
      };
      Object(_service_api__WEBPACK_IMPORTED_MODULE_14__[/* test_get_store_list */ "f"])(upload_data).then(function (res) {
        console.log(res.data.data);
        that.state.storeList = res.data.data;

        if (that.state.storeList.length == 0) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.navigateTo({
            url: '../formPage/index?page=0'
          });
        } else {
          that.setState({
            pageKind: 3
          });
        }
      });
    }
  }, {
    key: "handleLogin",
    value: function () {
      var _handleLogin = Object(C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this3 = this;

        var code, adminInfo;
        return C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(wx.getSystemInfoSync());
                wx.getUserProfile({
                  desc: '用于注册',
                  success: function success(res) {
                    console.log(res);
                    var timeToken = (dayjs__WEBPACK_IMPORTED_MODULE_11___default()().unix() + 1000) * 2;

                    if (code) {
                      adminInfo = {
                        encryptedData: res.encryptedData,
                        iv: res.iv,
                        rawData: res.rawData,
                        signature: res.signature,
                        code: code,
                        adminInfo: res.userInfo,
                        systemInfo: wx.getSystemInfoSync(),
                        watermark: {
                          appId: wx.getAccountInfoSync().miniProgram.appId,
                          token: timeToken
                        }
                      };
                      console.log(adminInfo);
                      Object(_service_api__WEBPACK_IMPORTED_MODULE_14__[/* test_wechat_login */ "l"])(adminInfo).then(function (result) {
                        console.log(result.data);
                        _this3.state.adminInfo = adminInfo.adminInfo;
                        _this3.state.adminInfo['sessionId'] = result.data.data.sessionId;
                        _this3.state.adminInfo['adminId'] = result.data.data.adminId;
                        _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorage({
                          key: "admin_info",
                          data: _this3.state.adminInfo,
                          success: _this3.setState({
                            isLogin: true,
                            pageKind: 1
                          })
                        });
                        /*
                        if (result.data.data.newAdmin==1) { 
                          console.log('new admin')
                          Taro.navigateTo({url: '../formPage/index?page=0'})
                        } else {
                          console.log('not the new admin')
                          this.setState({
                            pageKind: 1
                          })
                        }
                        */
                      });
                    }
                  }
                });
                wx.login({
                  success: function success(res) {
                    if (res.code) {
                      code = res.code;
                      console.log('data is ' + res.code);
                    } else {
                      console.log('获取用户登录态失败！' + res.errMsg);
                    }
                  }
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function handleLogin() {
        return _handleLogin.apply(this, arguments);
      }

      return handleLogin;
    }()
  }, {
    key: "showPhoneInput",
    value: function showPhoneInput() {}
  }, {
    key: "getPhoneNumber",
    value: function () {
      var _getPhoneNumber = Object(C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
        var _this;

        return C_Users_JackBang_Desktop_WeChatProject_FrontEnd_adminFrontEnd_adminVersion_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (e.detail.iv) {
                  // 同意获取手机号
                  _this = this;
                  wx.checkSession({
                    success: function success() {
                      console.log("登录未过期");
                      var phoneNumInfo = {
                        encryptedData: e.detail.encryptedData,
                        iv: e.detail.iv,
                        user_id: _this.state.adminInfo.adminId,
                        sessionId: _this.state.adminInfo.sessionId,
                        watermark: {
                          appId: wx.getAccountInfoSync().miniProgram.appId,
                          token: (dayjs__WEBPACK_IMPORTED_MODULE_11___default()().unix() + 1000) * 2
                        }
                      };
                      console.log(phoneNumInfo);
                      var temp_storeList;
                      Object(_service_api__WEBPACK_IMPORTED_MODULE_14__[/* test_get_phonenum_info */ "c"])(phoneNumInfo).then(function (res) {
                        console.log(res.data.data);
                        _this.state.adminInfo['phoneNumber'] = res.data.data.phoneNumber;
                        _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorage({
                          key: 'admin_info',
                          data: _this.state.adminInfo
                        });
                        console.log(_this.state);

                        _this.getStoreList(_this);
                      });
                    },
                    fail: function fail() {
                      console.log('验证过期，请重新登录');

                      _this.setState({
                        pageKind: 0
                      }); //请重新登录

                    }
                  });
                } else {
                  this.state.adminInfo['phoneNumber'] = '';
                  this.setState({
                    pageKind: 2
                  });
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getPhoneNumber(_x) {
        return _getPhoneNumber.apply(this, arguments);
      }

      return getPhoneNumber;
    }()
  }, {
    key: "handleCountDoun",
    value: function handleCountDoun(end) {
      var _this4 = this;

      this.timer = setInterval(function () {
        if (end - dayjs__WEBPACK_IMPORTED_MODULE_11___default()().unix() >= 0) {
          _this4.setState({
            countDownNum: end - dayjs__WEBPACK_IMPORTED_MODULE_11___default()().unix()
          });
        } else {
          clearInterval(_this4.timer);
        }
      }, 500);
    }
  }, {
    key: "handleSendSMS",
    value: function handleSendSMS() {
      this.setState({
        countDownNum: 60
      });
      this.handleCountDoun(dayjs__WEBPACK_IMPORTED_MODULE_11___default()().unix() + 60);
      var admin_data = {
        adminId: this.state.adminInfo.adminId,
        sessionId: this.state.adminInfo.sessionId,
        phone: this.state.adminInfo.phoneNumber,
        watermark: {
          appId: wx.getAccountInfoSync().miniProgram.appId,
          token: (dayjs__WEBPACK_IMPORTED_MODULE_11___default()().unix() + 1000) * 2
        }
      };
      console.log(admin_data);

      if (admin_data.phone.length !== 11) {
        console.log('phone num length is not 11');
      } else {
        var _this = this;

        Object(_service_api__WEBPACK_IMPORTED_MODULE_14__[/* test_send_sms */ "h"])(admin_data).then(function (res) {
          var validCode = res.data.data.token - 1000 >> 1;
          _this.state.server_validate_code = validCode;
          _this.state.adminInfo.sessionId = res.data.data.sessionId;
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorage({
            key: 'admin_info',
            data: _this.state.adminInfo
          });

          _this.setState({
            pageKind: 3
          });
        });
        console.log(this.state.server_validate_code);
      }
    }
  }, {
    key: "handleInput",
    value: function handleInput(idx, value) {
      console.log(value.detail.value);
      console.log('state: ' + this.state.validate_code);

      if (idx == 0 & value.detail.value.length == 6) {
        this.state.validate_code[0] = value.detail.value[0];
        this.state.validate_code[1] = value.detail.value[1];
        this.state.validate_code[2] = value.detail.value[2];
        this.state.validate_code[3] = value.detail.value[3];
        this.state.validate_code[4] = value.detail.value[4];
        this.state.validate_code[5] = value.detail.value[5];
        this.setState({
          validate_code_focus: idx + 5
        });
      } else {
        this.state.validate_code[idx] = value.detail.value[0];

        if (value.detail.value.length == 1) {
          this.setState({
            validate_code_focus: idx + 1
          });
        } else {
          this.setState({
            validate_code_focus: idx - 1
          });
        }
      }

      var input_code = this.state.validate_code[0] * 100000 + this.state.validate_code[1] * 10000 + this.state.validate_code[2] * 1000 + this.state.validate_code[3] * 100 + this.state.validate_code[4] * 10 + this.state.validate_code[5] * 1;

      if (input_code == this.state.server_validate_code) {
        console.log(this.state);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorage({
          key: 'admin_info',
          data: this.state.adminInfo
        });
        this.getStoreList(this);
      }

      console.log('focus: ' + this.state.validate_code_focus);
    }
  }, {
    key: "handleInputPhone",
    value: function handleInputPhone(value) {
      this.state.adminInfo.phoneNumber = value.detail.value;
    }
  }, {
    key: "handleEmpty",
    value: function handleEmpty() {}
  }, {
    key: "handleClickStoreTab",
    value: function handleClickStoreTab(id) {
      this.setState({
        selectStoreId: id
      });
    }
  }, {
    key: "openStore",
    value: function openStore() {
      console.log('open the store');
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var formContent = [];

      if (this.state.pageKind == 0) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
          className: "index",
          style: {
            height: "100vh",
            backgroundSize: "auto 100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end"
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
            src: _img_image_13_png__WEBPACK_IMPORTED_MODULE_13___default.a,
            style: "width:100vw;height:100vh;position:absolute;"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_9__[/* AtButton */ "b"], {
            type: "primary",
            circle: "true",
            className: "join-platform-button",
            onClick: this.handleLogin.bind(this),
            children: "\u767B\u5F55"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            style: "padding-bottom: 45%;"
          })]
        });
      } else if (this.state.pageKind == 1) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
          className: "index",
          style: {
            height: "100vh",
            backgroundSize: "auto 100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end"
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
            src: _img_image_13_png__WEBPACK_IMPORTED_MODULE_13___default.a,
            style: "width:100vw;height:100vh;position:absolute;"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_9__[/* AtButton */ "b"], {
            type: "primary",
            circle: "true",
            className: "join-platform-button",
            onClick: this.showPhoneInput.bind(this),
            openType: "getPhoneNumber",
            onGetPhoneNumber: this.getPhoneNumber.bind(this),
            children: "\u83B7\u53D6\u624B\u673A\u53F7"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            style: "padding-bottom: 45%;"
          })]
        });
      } else if (this.state.pageKind == 2) {
        var reSendSMS = [];
        console.log(this.state.countDownNum);
        reSendSMS.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
          style: {
            fontSize: "16px",
            color: this.state.countDownNum <= 0 ? '#5394ff' : '#A5A5A5',
            marginTop: "5rpx",
            position: "absolute",
            right: "60rpx"
          },
          onClick: this.state.countDownNum <= 0 ? this.handleSendSMS.bind(this) : this.handleEmpty,
          children: this.state.countDownNum <= 0 ? '发送验证码' : this.state.countDownNum + 's'
        }));
        formContent.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
          style: "height:auto;width:100%;background:#FEFFFF80;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;border-radius:20px;",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            style: "height:20rpx;"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
            style: "font-size:20px;font-weight:530;margin-left:5%;margin-bottom:10rpx;",
            children: "\u77ED\u4FE1\u9A8C\u8BC1"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            style: "width:100%;margin-left:5%;display:flex;align-items:center;justify-content:flex-start;",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Input */ "d"], {
              value: this.state.adminInfo.phoneNumber,
              onInput: this.handleInputPhone.bind(this),
              type: "number",
              placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
              maxlength: "11",
              style: "width:400rpx;height:80rpx;border:1px solid #979797;border-radius:40px;display:flex;justify-content:center;align-items:center;text-align:flex-start;",
              focus: this.state.validate_code_focus == 0 ? true : false
            }), reSendSMS]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            style: "height:75rpx;width:90%;margin-left:5%;margin-top:30rpx;border: 0px solid #97979755;display:flex;align-items:center;justify-content:flex-start;padding-bottom:30rpx",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Input */ "d"], {
              value: this.state.validate_code[0],
              onInput: this.handleInput.bind(this, 0),
              type: "number",
              placeholder: "",
              maxlength: "6",
              style: "width:80rpx;height:80rpx;border:1px solid #979797;border-radius:3px;display:flex;justify-content:center;align-items:center;text-align:center;",
              focus: this.state.validate_code_focus == 0 ? true : false
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              style: "height:1px;width:40rpx;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Input */ "d"], {
              value: this.state.validate_code[1],
              onInput: this.handleInput.bind(this, 1),
              type: "number",
              placeholder: "",
              maxlength: "1",
              style: "width:80rpx;height:80rpx;border:1px solid #979797;border-radius:3px;display:flex;justify-content:center;align-items:center;text-align:center;",
              focus: this.state.validate_code_focus == 1 ? true : false
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              style: "height:1px;width:40rpx;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Input */ "d"], {
              value: this.state.validate_code[2],
              onInput: this.handleInput.bind(this, 2),
              type: "number",
              placeholder: "",
              maxlength: "1",
              style: "width:80rpx;height:80rpx;border:1px solid #979797;border-radius:3px;display:flex;justify-content:center;align-items:center;text-align:center;",
              focus: this.state.validate_code_focus == 2 ? true : false
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              style: "height:1px;width:40rpx;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Input */ "d"], {
              value: this.state.validate_code[3],
              onInput: this.handleInput.bind(this, 3),
              type: "number",
              placeholder: "",
              maxlength: "1",
              style: "width:80rpx;height:80rpx;border:1px solid #979797;border-radius:3px;display:flex;justify-content:center;align-items:center;text-align:center;",
              focus: this.state.validate_code_focus == 3 ? true : false
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              style: "height:1px;width:40rpx;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Input */ "d"], {
              value: this.state.validate_code[4],
              onInput: this.handleInput.bind(this, 4),
              type: "number",
              placeholder: "",
              maxlength: "1",
              style: "width:80rpx;height:80rpx;border:1px solid #979797;border-radius:3px;display:flex;justify-content:center;align-items:center;text-align:center;",
              focus: this.state.validate_code_focus == 4 ? true : false
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              style: "height:1px;width:40rpx;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Input */ "d"], {
              value: this.state.validate_code[5],
              onInput: this.handleInput.bind(this, 5),
              type: "number",
              placeholder: "",
              maxlength: "1",
              style: "width:80rpx;height:80rpx;border:1px solid #979797;border-radius:3px;display:flex;justify-content:center;align-items:center;text-align:center;",
              focus: this.state.validate_code_focus == 5 ? true : false
            })]
          })]
        }));
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
          className: "index",
          style: {
            height: "100vh",
            backgroundSize: "auto 100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end"
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
            src: _img_image_13_png__WEBPACK_IMPORTED_MODULE_13___default.a,
            style: "width:100vw;height:100vh;position:absolute;z-index:-1;"
          }), formContent, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            style: "padding-bottom: 45%;"
          })]
        });
      } else if (this.state.pageKind == 3) {
        var storeTabs = [];
        this.state.storeList.map(function (item) {
          storeTabs.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            style: {
              height: "100rpx",
              width: "500rpx",
              marginLeft: "50rpx",
              border: "1px solid ".concat(_this5.state.selectStoreId == item.adminStore_id ? '#FCA62F' : '#A5A5A5'),
              borderRadius: "10rpx",
              marginTop: "20rpx",
              display: "flex"
            },
            onClick: _this5.handleClickStoreTab.bind(_this5, item.adminStore_id),
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
              src: _service_config__WEBPACK_IMPORTED_MODULE_15__[/* base */ "a"] + item.store_logo,
              style: "height:80rpx;width:80rpx;margin-left:10rpx;margin-top:10rpx;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              style: "height:100rpx;width:280rpx;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;margin-left:20rpx;",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                style: "font-size:14px;font-weight:530;overflow:hidden;textOverflow:ellipsis;whiteSpace:nowrap;width:280rpx;",
                children: item.store_name
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
                style: {
                  fontSize: "12px",
                  color: "".concat(item.adminStore_verify == 1 ? '#A5A5A5' : '#FF0101'),
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  width: "280rpx"
                },
                children: item.adminStore_verify == 1 ? item.store_position : '未验证'
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              style: "margin-left:50rpx;margin-top:25rpx;",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_9__[/* AtIcon */ "c"], {
                value: "check-circle",
                size: "20",
                color: _this5.state.selectStoreId == item.adminStore_id ? '#FCA62F' : '#A5A5A5'
              })
            })]
          }));
        });
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
          className: "index",
          style: {
            height: "100vh",
            backgroundSize: "auto 100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end"
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("image", {
            src: _img_image_13_png__WEBPACK_IMPORTED_MODULE_13___default.a,
            style: "width:100vw;height:100vh;position:absolute;filter:brightness(50%);z-index:-1;"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            style: "height:60vh;width:80%;border-radius:20px;background:#FEFFFF;display:flex;flex-direction:column;",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
              style: "font-size:20px;font-weight:550;margin-left:50rpx;margin-top:50rpx;margin-bottom:30rpx;",
              children: "\u60A8\u7684\u5E97\u94FA"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              style: "height:44vh;",
              children: storeTabs
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_9__[/* AtButton */ "b"], {
              type: "primary",
              circle: "true",
              className: "open-store-button",
              onClick: this.openStore.bind(this),
              children: "\u8FDB\u5165\u5E97\u94FA"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("text", {
              style: "font-size:14px;color:#FCA62F;width:100%;text-align:center;text-decoration:underline;",
              children: "\u5165\u9A7B\u5206\u5E97"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            style: "height:20vh;"
          })]
        });
      }
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime-module.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime-module.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.1@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!./index.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/index/index.jsx");


var config = {"navigationBarTitleText":"首页","disableScroll":true};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/index/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map