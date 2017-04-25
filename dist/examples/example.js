webpackJsonp([0],{

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _vx = __webpack_require__(0);

var _vx2 = _interopRequireDefault(_vx);

var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(4);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vx2.default.install(_vue2.default);
var _p = new _vue2.default({
    el: '#app',
    template: _index2.default,
    data: {
        show: false,
        list: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20]
    }
});

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = "<div id=\"page\">\r\n    <div id=\"swiper\">\r\n        <swiper :indicator-dots=\"true\" class=\"swipercon\">\r\n            <a class=\"swiper-slide blue-slide\"><img src=\"http://img.ukitchenplus.com/2017410122936771C7CD5B7838DE7EE5C562A246C96F8431.png\"></a>\r\n            <a class=\"swiper-slide blue-slide\"><img src=\"http://img.ukitchenplus.com/20174101229517242A88AEC89B92BF404B97A101B7A353AF.png\"></a>\r\n        </swiper>\r\n    </div>\r\n    <div id=\"scroll\">\r\n        <scroll-view ref=\"childTime\" id=\"timelist\" scroll-x=\"true\" scroll-y=\"false\" class=\"wrapper\">\r\n            <div class=\"weui-cells\">\r\n                <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" v-for=\"(val,i) in list\">\r\n                    <div class=\"weui-cell__bd\">\r\n                        <p>{{val}}</p>\r\n                    </div>\r\n                    <div class=\"weui-cell__ft\">\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </scroll-view>\r\n    </div>\r\n</div>";

/***/ })

},[18]);