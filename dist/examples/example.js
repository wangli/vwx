webpackJsonp([0],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vwx = __webpack_require__(1);

var _core = __webpack_require__(2);

var _core2 = _interopRequireDefault(_core);

var _index = __webpack_require__(49);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _vwx.Page)({
    template: _index2.default,
    data: {
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
    },
    onscroll: function onscroll() {
        console.log("ttttttttttt");
    }
});

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

module.exports = "<div id=\"page\">\r\n    <div id=\"swiper\">\r\n        <swiper :indicator-dots=\"true\" class=\"swipercon\">\r\n            <a class=\"swiper-slide blue-slide\"><img src=\"http://img.ukitchenplus.com/2017410122936771C7CD5B7838DE7EE5C562A246C96F8431.png\"></a>\r\n            <a class=\"swiper-slide blue-slide\"><img src=\"http://img.ukitchenplus.com/20174101229517242A88AEC89B92BF404B97A101B7A353AF.png\"></a>\r\n        </swiper>\r\n    </div>\r\n    <div id=\"scroll\">\r\n        <scroll-view ref=\"childTime\" id=\"timelist\" scroll-id=\"#timelist\" class=\"wrapper\">\r\n            <div class=\"weui-cells\">\r\n                <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" v-for=\"(val,i) in list\" @click=\"closed\">\r\n                    <div class=\"weui-cell__bd\">\r\n                        <p>{{val}}{{pv}}</p>\r\n                    </div>\r\n                    <div class=\"weui-cell__ft\">\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </scroll-view>\r\n    </div>\r\n    <div id=\"scroll2\">\r\n        <scroll-view ref=\"child2\" id=\"timelist2\" scroll-id=\"#timelist2\"  :scroll-x=\"true\" :scroll-y=\"false\" class=\"wrapper\">\r\n            <a class=\"weui-cell\" v-for=\"(val,i) in list\" @click=\"closed\">\r\n                {{val}}{{pv}}\r\n            </a>\r\n        </scroll-view>\r\n    </div>\r\n    <div><p>ss</p><p>ss</p><p>ss</p><p>ss</p><p>ss</p><p>ss</p><p>ss</p></div>\r\n</div>";

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vwx = __webpack_require__(1);

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(17);

__webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _vwx.App)({
    pages: [{ path: '/index', component: _index2.default }]
});

/***/ })

},[53]);