(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/formPage/index"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/formPage/index.jsx":
/*!******************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/formPage/index.jsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Formpage; });
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
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "./src/pages/formPage/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dayjs */ "./node_modules/_dayjs@1.10.4@dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs/locale/zh-cn */ "./node_modules/_dayjs@1.10.4@dayjs/locale/zh-cn.js");
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_image_13_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/image-13.png */ "./src/img/image-13.png");
/* harmony import */ var _img_image_13_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_image_13_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../service/api */ "./src/service/api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
















var Formpage = /*#__PURE__*/function (_Component) {
  Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Formpage, _Component);

  var _super = Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Formpage);

  function Formpage() {
    var _this2;

    Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Formpage);

    _this2 = _super.apply(this, arguments);
    _this2.state = {
      showSteps: false,
      adminStoreInfo: {
        name: '',
        idCard: '',
        phone: ''
      },
      adminInfo: {},
      validate_code: ['', '', '', '', '', ''],
      validate_code_focus: 9,
      server_validate_code: '111111',
      countDownStart: 59,
      countDownNum: 0,
      pageKind: 0,
      imgFile: [],
      imgUploadIcon: true
    };
    return _this2;
  }

  Object(C_Users_JackBang_Desktop_PZZ_project_ownerversionfrontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Formpage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var pages = getCurrentPages();
      var currentPage = pages[pages.length - 1];
      var pages_option = currentPage.options;
      var pageKind = pages_option.page;

      if (pageKind == "0") {
        this.state.adminInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getStorageSync('admin_info');
        var tempAdminStoreInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getStorageSync('adminStoreInfo');

        if (tempAdminStoreInfo) {
          this.state.adminStoreInfo = tempAdminStoreInfo;
        }

        console.log('phone Numbers');
        this.setState({
          pageKind: pageKind
        });
      } else if (pageKind == "1") {
        this.setState({
          pageKind: pageKind
        });
      } else if (pageKind == "2") {} else if (pageKind == "3") {}
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "handleCountDoun",
    value: function handleCountDoun(end) {
      var _this3 = this;

      this.timer = setInterval(function () {
        if (end - dayjs__WEBPACK_IMPORTED_MODULE_9___default()().unix() >= 0) {
          _this3.setState({
            countDownNum: end - dayjs__WEBPACK_IMPORTED_MODULE_9___default()().unix()
          });
        } else {
          clearInterval(_this3.timer);
        }
      }, 500);
    }
  }, {
    key: "handleSendSMS",
    value: function handleSendSMS() {
      this.setState({
        countDownNum: 60
      });
      this.handleCountDoun(dayjs__WEBPACK_IMPORTED_MODULE_9___default()().unix() + 60);
      var admin_data = {
        adminId: this.state.adminInfo.adminId,
        sessionId: this.state.adminInfo.sessionId,
        phone: this.state.adminStoreInfo.phone,
        watermark: {
          appId: wx.getAccountInfoSync().miniProgram.appId,
          token: (dayjs__WEBPACK_IMPORTED_MODULE_9___default()().unix() + 1000) * 2
        }
      };
      console.log(admin_data);

      if (this.state.adminStoreInfo.phone.length !== 11) {
        console.log('phone num length is not 11');
      } else {
        var _this = this;

        Object(_service_api__WEBPACK_IMPORTED_MODULE_12__[/* test_send_sms */ "a"])(admin_data).then(function (res) {
          var validCode = res.data.data.token - 1000 >> 1;
          _this.state.server_validate_code = validCode;
          _this.state.adminInfo.sessionId = res.data.data.sessionId;
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.setStorage({
            key: 'admin_info',
            data: _this.state.adminInfo
          });
        });
        console.log(this.state.server_validate_code);
      }
    }
  }, {
    key: "handleNavBack",
    value: function handleNavBack() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.navigateBack();
    }
  }, {
    key: "handleChange",
    value: function handleChange(type, value) {
      if (type == 'adminStoreInfo_name') {
        this.setState({
          adminStoreInfo: {
            name: value,
            idCard: this.state.adminStoreInfo.idCard,
            phone: this.state.adminStoreInfo.phone
          }
        });
      } else if (type == 'adminStoreInfo_idCard') {
        this.setState({
          adminStoreInfo: {
            name: this.state.adminStoreInfo.name,
            idCard: value,
            phone: this.state.adminStoreInfo.phone
          }
        });
      } else if (type == 'adminStoreInfo_phone') {
        this.setState({
          adminStoreInfo: {
            name: this.state.adminStoreInfo.name,
            idCard: this.state.adminStoreInfo.idCard,
            phone: value
          }
        });
      }
    }
  }, {
    key: "handleNextStep",
    value: function handleNextStep() {
      if (this.state.pageKind == "0") {
        if (this.state.adminStoreInfo.name.length == 0) {
          console.log('name length is 0');
        }

        if (this.state.adminStoreInfo.idCard.length !== 18) {
          console.log('id card length is not 18');
        }

        if (this.state.adminStoreInfo.phone.length !== 11) {
          console.log('phone num length is not 11');
        }

        var input_code = this.state.validate_code[0] * 100000 + this.state.validate_code[1] * 10000 + this.state.validate_code[2] * 1000 + this.state.validate_code[3] * 100 + this.state.validate_code[4] * 10 + this.state.validate_code[5] * 1;
        console.log(this.state.validate_code);
        console.log(input_code);
        console.log(this.state.server_validate_code);

        if (this.state.server_validate_code !== input_code) {
          console.log('valid code is wrong');
        }

        if (this.state.adminStoreInfo.name.length !== 0 & this.state.adminStoreInfo.idCard.length == 18 & this.state.adminStoreInfo.phone.length == 11 & this.state.server_validate_code == input_code) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.setStorage({
            key: 'adminStoreInfo',
            data: this.state.adminStoreInfo
          });
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.navigateTo({
            url: "index?page=1"
          });
        }
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

      console.log('focus: ' + this.state.validate_code_focus);
    }
  }, {
    key: "handleEmpty",
    value: function handleEmpty() {}
  }, {
    key: "onImgChange",
    value: function onImgChange(files, operationType, index) {
      if (operationType == 'add') {
        this.setState({
          imgFile: files,
          imgUploadIcon: false
        });
      } else if (operationType == 'remove') {
        this.setState({
          imgFile: files,
          imgUploadIcon: true
        });
      }
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
      var stepsBar = [];
      var formContent = [];

      if (this.state.pageKind == "0") {
        stepsBar.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
          style: "height:70rpx;width:100%;background:#FEFFFF;border-radius:8px 8px 0px 0px;display:flex;align-items:flex-start;justify-content:center;padding-top:30rpx;",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #FCA62F;margin-bottom:10rpx;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("text", {
              style: "font-size:12px;",
              children: "\u5B9E\u540D\u6CE8\u518C"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "height:7.5rpx;width:28%;position:absolute;left:21%;border: 0px solid #A5A5A5;border-bottom-width:1px;"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #A5A5A5;margin-bottom:10rpx;background:#A5A5A5;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("text", {
              style: "font-size:12px;",
              children: "\u8865\u5145\u5E97\u94FA\u4FE1\u606F"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "height:7.5rpx;width:28%;position:absolute;right:21%;border: 0px solid #A5A5A5;border-bottom-width:1px;"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #A5A5A5;margin-bottom:10rpx;background:#A5A5A5;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("text", {
              style: "font-size:12px;",
              children: "\u8BA4\u8BC1\u5E97\u94FA"
            })]
          })]
        }));
        formContent.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
          style: "height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "height:20rpx;"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("text", {
            style: "font-size:20px;font-weight:530;margin-left:5%;",
            children: "\u751F\u6210\u81EA\u5DF1\u4E13\u5C5E\u5E97\u94FA"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("text", {
            style: "font-size:14px;color:#A5A5A5;margin-left:5%;margin-top:5rpx;",
            children: "\u586B\u5199\u4EE5\u4E0B\u4FE1\u606F\uFF0C\u4E00\u5206\u949F\u5FEB\u901F\u6CE8\u518C"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtInput */ "c"], {
              name: "value0",
              title: "\u59D3\u540D",
              type: "text",
              placeholder: "\u4FEE\u6539",
              value: this.state.adminStoreInfo.name,
              onChange: this.handleChange.bind(this, 'adminStoreInfo_name'),
              className: "name-input-css"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtInput */ "c"], {
              name: "value1",
              title: "\u8EAB\u4EFD\u8BC1\u53F7",
              type: "idcard",
              placeholder: "\u4FEE\u6539",
              value: this.state.adminStoreInfo.idCard,
              onChange: this.handleChange.bind(this, 'adminStoreInfo_idCard'),
              className: "name-input-css"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtInput */ "c"], {
              name: "value2",
              title: "\u624B\u673A\u53F7",
              type: "phone",
              placeholder: "\u4FEE\u6539",
              value: this.state.adminStoreInfo.phone,
              onChange: this.handleChange.bind(this, 'adminStoreInfo_phone'),
              className: "name-input-css"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "width:80%;height:20rpx;margin-left:10%;"
          })]
        }));
        var reSendSMS = [];
        console.log(this.state.countDownNum);
        reSendSMS.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("text", {
          style: {
            fontSize: "14px",
            color: this.state.countDownNum <= 0 ? '#5394ff' : '#A5A5A5',
            marginTop: "5rpx",
            position: "absolute",
            right: "60rpx"
          },
          onClick: this.state.countDownNum <= 0 ? this.handleSendSMS.bind(this) : this.handleEmpty,
          children: this.state.countDownNum <= 0 ? '发送验证码' : this.state.countDownNum + 's'
        }));
        formContent.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
          style: "height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "height:20rpx;"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("text", {
            style: "font-size:20px;font-weight:530;margin-left:5%;",
            children: "\u77ED\u4FE1\u9A8C\u8BC1"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "width:100%;",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("text", {
              style: "font-size:14px;color:#A5A5A5;margin-left:5%;margin-top:5rpx;",
              children: "\u9A8C\u8BC1\u7801\u53D1\u9001\u81F3"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("text", {
              style: "font-size:14px;color:#FCA62F;margin-top:5rpx;",
              children: this.state.adminStoreInfo.phone
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("text", {
              style: "font-size:14px;color:#A5A5A5;margin-top:5rpx;",
              children: "\uFF0C\u8BF7\u67E5\u6536"
            }), reSendSMS]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "height:75rpx;width:90%;margin-left:5%;margin-top:30rpx;border: 0px solid #97979755;display:flex;align-items:center;justify-content:flex-start;padding-bottom:30rpx",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Input */ "d"], {
              value: this.state.validate_code[0],
              onInput: this.handleInput.bind(this, 0),
              type: "number",
              placeholder: "",
              maxlength: "6",
              style: "width:80rpx;height:80rpx;border:1px solid #979797;border-radius:3px;display:flex;justify-content:center;align-items:center;text-align:center;",
              focus: this.state.validate_code_focus == 0 ? true : false
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "height:1px;width:40rpx;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Input */ "d"], {
              value: this.state.validate_code[1],
              onInput: this.handleInput.bind(this, 1),
              type: "number",
              placeholder: "",
              maxlength: "1",
              style: "width:80rpx;height:80rpx;border:1px solid #979797;border-radius:3px;display:flex;justify-content:center;align-items:center;text-align:center;",
              focus: this.state.validate_code_focus == 1 ? true : false
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "height:1px;width:40rpx;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Input */ "d"], {
              value: this.state.validate_code[2],
              onInput: this.handleInput.bind(this, 2),
              type: "number",
              placeholder: "",
              maxlength: "1",
              style: "width:80rpx;height:80rpx;border:1px solid #979797;border-radius:3px;display:flex;justify-content:center;align-items:center;text-align:center;",
              focus: this.state.validate_code_focus == 2 ? true : false
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "height:1px;width:40rpx;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Input */ "d"], {
              value: this.state.validate_code[3],
              onInput: this.handleInput.bind(this, 3),
              type: "number",
              placeholder: "",
              maxlength: "1",
              style: "width:80rpx;height:80rpx;border:1px solid #979797;border-radius:3px;display:flex;justify-content:center;align-items:center;text-align:center;",
              focus: this.state.validate_code_focus == 3 ? true : false
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "height:1px;width:40rpx;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Input */ "d"], {
              value: this.state.validate_code[4],
              onInput: this.handleInput.bind(this, 4),
              type: "number",
              placeholder: "",
              maxlength: "1",
              style: "width:80rpx;height:80rpx;border:1px solid #979797;border-radius:3px;display:flex;justify-content:center;align-items:center;text-align:center;",
              focus: this.state.validate_code_focus == 4 ? true : false
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "height:1px;width:40rpx;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Input */ "d"], {
              value: this.state.validate_code[5],
              onInput: this.handleInput.bind(this, 5),
              type: "number",
              placeholder: "",
              maxlength: "1",
              style: "width:80rpx;height:80rpx;border:1px solid #979797;border-radius:3px;display:flex;justify-content:center;align-items:center;text-align:center;",
              focus: this.state.validate_code_focus == 5 ? true : false
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "width:80%;height:130rpx;margin-left:10%;",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtButton */ "a"], {
              type: "primary",
              circle: "true",
              className: "confirm-button",
              onClick: this.handleNextStep.bind(this),
              children: "\u4E0B\u4E00\u6B65"
            })
          })]
        }));
      } else if (this.state.pageKind == "1") {
        stepsBar.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
          style: "height:70rpx;width:100%;background:#FEFFFF;border-radius:8px 8px 0px 0px;display:flex;align-items:flex-start;justify-content:center;padding-top:30rpx;",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #FCA62F;margin-bottom:10rpx;background:#FCA62F;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("text", {
              style: "font-size:12px;",
              children: "\u5B9E\u540D\u6CE8\u518C"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "height:7.5rpx;width:28%;position:absolute;left:21%;border: 0px solid #FCA62F;border-bottom-width:1px;"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #FCA62F;margin-bottom:10rpx;background:#A5A5A500;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("text", {
              style: "font-size:12px;",
              children: "\u8865\u5145\u5E97\u94FA\u4FE1\u606F"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "height:7.5rpx;width:28%;position:absolute;right:21%;border: 0px solid #A5A5A5;border-bottom-width:1px;"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #A5A5A5;margin-bottom:10rpx;background:#A5A5A500;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("text", {
              style: "font-size:12px;",
              children: "\u8BA4\u8BC1\u5E97\u94FA"
            })]
          })]
        }));
        formContent.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
          style: "height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "height:20rpx;"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("text", {
            style: "font-size:20px;font-weight:530;margin-left:5%;",
            children: "\u5E97\u94FA\u4FE1\u606F"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "height:150rpx;width:90%;margin-left:5.5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("text", {
              style: "font-size:15px;width:70%;",
              children: "\u5E97\u94FA\u5934\u50CF"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "height:100%;width:150rpx;",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtImagePicker */ "b"], {
                length: 1,
                files: this.state.imgFile,
                onChange: this.onImgChange.bind(this),
                mode: "scaleToFill",
                count: 1,
                showAddBtn: this.state.imgUploadIcon
              })
            })]
          })]
        }));
      }

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
        className: "formPage",
        style: {
          height: "100vh",
          display: "flex",
          flexDirection: "column"
        },
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("image", {
          src: _img_image_13_png__WEBPACK_IMPORTED_MODULE_11___default.a,
          style: "width:100vw;height:100vh;position:absolute"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
          style: {
            padding: "".concat(top_height, "px 0px 0px 0px"),
            position: 'relative',
            top: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'flex-start'
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtNavBar */ "d"], {
            className: "nav-bar-info",
            onClickLeftIcon: this.handleNavBack.bind(this),
            color: "#ffff",
            leftIconType: "chevron-left",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
              style: "color:#fff;font-size:18px"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
            style: "height:83vh;width:90%;background:#F9F9F9;border-radius:8px;margin-top:50rpx;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;",
            children: [stepsBar, formContent]
          })]
        })]
      });
    }
  }]);

  return Formpage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/pages/formPage/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/formPage/index.jsx ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.1@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!./index.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/formPage/index.jsx");


var config = {"navigationBarTitleText":"首页","disableScroll":true};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/formPage/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/formPage/index.scss":
/*!***************************************!*\
  !*** ./src/pages/formPage/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/formPage/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map