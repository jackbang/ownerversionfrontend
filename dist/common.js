(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/const/status.js":
/*!*****************************!*\
  !*** ./src/const/status.js ***!
  \*****************************/
/*! exports provided: HTTP_STATUS, SUCCESS, FAIL, COMPLETE, PROMISE_STATUS, RESULT_STATUS */
/*! exports used: HTTP_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTP_STATUS; });
/* unused harmony export SUCCESS */
/* unused harmony export FAIL */
/* unused harmony export COMPLETE */
/* unused harmony export PROMISE_STATUS */
/* unused harmony export RESULT_STATUS */
var HTTP_STATUS = {
  SUCCESS: 200,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
}; // promise status

var SUCCESS = {
  success: 'success'
};
var FAIL = {
  fail: 'fail'
};
var COMPLETE = {
  complete: 'complete'
};
var PROMISE_STATUS = {
  success: 'success',
  fail: 'fail',
  complete: 'complete'
};
var RESULT_STATUS = {
  SUCCESS: 0,
  SIGNATURE_FAILED: 1000 // 签名失败

};

/***/ }),

/***/ "./src/img/female.png":
/*!****************************!*\
  !*** ./src/img/female.png ***!
  \****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/female.png";

/***/ }),

/***/ "./src/img/image-10.png":
/*!******************************!*\
  !*** ./src/img/image-10.png ***!
  \******************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image-10.png";

/***/ }),

/***/ "./src/img/image-13.png":
/*!******************************!*\
  !*** ./src/img/image-13.png ***!
  \******************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image-13.png";

/***/ }),

/***/ "./src/img/image-8.png":
/*!*****************************!*\
  !*** ./src/img/image-8.png ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image-8.png";

/***/ }),

/***/ "./src/img/male.png":
/*!**************************!*\
  !*** ./src/img/male.png ***!
  \**************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/male.png";

/***/ }),

/***/ "./src/img/queueinfobk.png":
/*!*********************************!*\
  !*** ./src/img/queueinfobk.png ***!
  \*********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/queueinfobk.png";

/***/ }),

/***/ "./src/img/scoreActive.png":
/*!*********************************!*\
  !*** ./src/img/scoreActive.png ***!
  \*********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/scoreActive.png";

/***/ }),

/***/ "./src/service/api.js":
/*!****************************!*\
  !*** ./src/service/api.js ***!
  \****************************/
/*! exports provided: test_wechat_login, test_send_sms, test_get_queues, test_total_plays_search, test_store_plays_search, test_delete_plays_search, test_upload_play */
/*! exports used: test_delete_plays_search, test_get_queues, test_send_sms, test_store_plays_search, test_total_plays_search, test_upload_play, test_wechat_login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return test_wechat_login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return test_send_sms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return test_get_queues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return test_total_plays_search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return test_store_plays_search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return test_delete_plays_search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return test_upload_play; });
/* harmony import */ var _tarojs_taro_3_2_1_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! _@tarojs_taro@3.2.1@@tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.1@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro_3_2_1_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro_3_2_1_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ "./src/service/request.js");


var test_wechat_login = function test_wechat_login(user_data) {
  //let url = `/test/onlogin?code=${code_data}`
  var url = '/test/adminLogin';
  return _request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post(url, user_data, 'application/json');
};
var test_send_sms = function test_send_sms(admin_data) {
  var url = '/test/adminSendSMS';
  return _request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post(url, admin_data, 'application/json');
};
var test_get_queues = function test_get_queues(store_id) {
  var url = "/test/stores/".concat(store_id, "/queues/");
  return _request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get(url, '');
};
var test_total_plays_search = function test_total_plays_search(body, params) {
  var url = "/test/total/search?" + params;
  return _request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get(url, body);
};
var test_store_plays_search = function test_store_plays_search(body, params) {
  var url = "/test/store/search?" + params;
  return _request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get(url, body);
};
var test_delete_plays_search = function test_delete_plays_search(body) {
  var url = "/test/store/delete";
  return _request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get(url, body);
};
var test_upload_play = function test_upload_play(play_data) {
  var url = '/test/uploadPlay';
  return _request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post(url, play_data, 'application/json');
};

/***/ }),

/***/ "./src/service/config.js":
/*!*******************************!*\
  !*** ./src/service/config.js ***!
  \*******************************/
/*! exports provided: base, map_KEY */
/*! exports used: base, map_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return map_KEY; });
//export const base = "http://121.4.174.114";
var base = "https://api.ecou.com.cn";
var map_KEY = "5Z7BZ-62GRX-YGF4I-ZUAQM-SI4JZ-WFF4G";

/***/ }),

/***/ "./src/service/request.js":
/*!********************************!*\
  !*** ./src/service/request.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.1@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const/status */ "./src/const/status.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/service/config.js");



var token = '';
/* harmony default export */ __webpack_exports__["a"] = ({
  baseOptions: function baseOptions(params, method) {
    var url = params.url,
        data = params.data; // let token = getApp().globalData.token
    // if (!token) login()

    var contentType = 'application/json';
    contentType = params.contentType || contentType;
    var option = {
      isShowLoading: false,
      loadingText: '正在加载',
      url: _config__WEBPACK_IMPORTED_MODULE_2__[/* base */ "a"] + url,
      data: data,
      method: method,
      dataType: "json",
      header: {
        'content-type': contentType
      },
      success: function success(res) {
        if (res.statusCode === _const_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].NOT_FOUND) {
          return Promise.reject({
            desc: '请求资源不存在'
          });
        } else if (res.statusCode === _const_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].BAD_GATEWAY) {
          return Promise.reject({
            desc: "服务端出现了问题"
          });
        } else if (res.statusCode === _const_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].FORBIDDEN) {
          return Promise.reject({
            desc: "没有权限访问"
          });
        } else if (res.statusCode === _const_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].SUCCESS) {
          console.log(res.data);
          return res.data;
        }
      },
      fail: function fail(res) {
        console.log('HTTP request failed!');
      }
    };
    console.log('options: ', option);
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.request(option);
  },
  get: function get(url, data) {
    var option = {
      url: url,
      data: data
    };
    return this.baseOptions(option, 'GET');
  },
  post: function post(url, data, contentType) {
    var params = {
      url: url,
      data: data,
      contentType: contentType
    };
    return this.baseOptions(params, "POST");
  }
});

/***/ })

}]);
//# sourceMappingURL=common.js.map