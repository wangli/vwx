webpackJsonp([0],{

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vwx = __webpack_require__(1);

var _vwx2 = _interopRequireDefault(_vwx);

var _core = __webpack_require__(4);

var _core2 = _interopRequireDefault(_core);

var _index = __webpack_require__(46);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _vwx2.default.App.Page({
    template: _index2.default,
    data: {
        pv: 2999999,
        list: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20]
    },
    onReady: function onReady() {
        wx.request({
            url: 'http://apiqa.ukitchenplus.com/v3/gclass/packagelist?page=1&pagesize=30',
            complete: function complete(data) {
                _core2.default.forEach(data, function (val, key) {
                    console.log(key);
                    //this[key] = val;
                });
            }
        });
    },
    closed: function closed() {
        this.show = false;
    }
});

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = "<div id=\"page\">\r\n    <div id=\"swiper\">\r\n        <swiper :indicator-dots=\"true\" class=\"swipercon\">\r\n            <a class=\"swiper-slide blue-slide\"><img src=\"http://img.ukitchenplus.com/2017410122936771C7CD5B7838DE7EE5C562A246C96F8431.png\"></a>\r\n            <a class=\"swiper-slide blue-slide\"><img src=\"http://img.ukitchenplus.com/20174101229517242A88AEC89B92BF404B97A101B7A353AF.png\"></a>\r\n        </swiper>\r\n    </div>\r\n    <div id=\"scroll\">\r\n        <scroll-view ref=\"childTime\" id=\"timelist\" scroll-x=\"true\" scroll-y=\"false\" class=\"wrapper\">\r\n            <div class=\"weui-cells\">\r\n                <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" v-for=\"(val,i) in list\" @click=\"closed\">\r\n                    <div class=\"weui-cell__bd\">\r\n                        <p>{{val}}{{pv}}</p>\r\n                    </div>\r\n                    <div class=\"weui-cell__ft\">\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </scroll-view>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

var _vwx = __webpack_require__(1);

var _vwx2 = _interopRequireDefault(_vwx);

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(16);

__webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vwx2.default.install(_vue2.default);
console.log(_vwx2.default.App.v);

var _p = new _vue2.default({
    el: '#app',
    template: "<vwp-index></vwp-index>",
    components: {
        'vwp-index': _index2.default
    }
});

/***/ })

},[50]);