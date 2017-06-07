webpackJsonp([0],{

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vwx = __webpack_require__(1);

var _index = __webpack_require__(64);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _vwx.Page)({
    name: "index",
    template: _index2.default,
    data: {
        list: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20],
        isover: false,
        wait: false
    },
    onLoad: function onLoad() {},
    onReady: function onReady() {
        wx.request({
            url: 'http://apiqa.ukitchenplus.com/v3/gclass/classlist?page=1&pagesize=30',
            success: function success(data) {}
        });

        app.config.accompany = wx.user.accompany();
    },
    onShow: function onShow() {},
    additem: function additem() {
        var that = this;
        this.wait = true;
        setTimeout(function () {
            that.list.push(99);
            that.wait = false;
        }, 11000);
    },
    onscrolltolower: function onscrolltolower() {
        var that = this;
        this.wait = true;
        setTimeout(function () {
            that.list.push(99);
            that.wait = false;
        }, 2000);
    },
    onscrolltoupper: function onscrolltoupper() {
        console.log("onscrolltoupper");
        var that = this;
        this.wait = true;
        setTimeout(function () {
            that.list.shift();
            that.wait = false;
        }, 2000);
    }
});

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vwx = __webpack_require__(1);

var _modal = __webpack_require__(65);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _vwx.Page)({
    name: "modal_ep",
    template: _modal2.default,
    onLoad: function onLoad() {},
    onReady: function onReady() {},
    onShow: function onShow() {},
    showModal: function showModal(val) {
        switch (val) {
            case 1:
                wx.showModal({
                    title: '提示',
                    showCancel: false,
                    content: '这是一个模态弹窗',
                    success: function success(res) {}
                });
                break;
            case 2:
                wx.showModal({
                    title: '提示',
                    showCancel: true,
                    content: '这是一个模态弹窗',
                    success: function success(res) {
                        if (res.confirm) {
                            console.log('用户点击确定');
                        } else if (res.cancel) {
                            console.log('用户点击取消');
                        }
                    }
                });
                break;
        }
    }
});

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vwx = __webpack_require__(1);

var _scrollview = __webpack_require__(66);

var _scrollview2 = _interopRequireDefault(_scrollview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _vwx.Page)({
    name: "scrollview",
    template: _scrollview2.default,
    data: {
        list: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20]
    },
    onReady: function onReady() {},
    onscroll: function onscroll() {
        console.log("ttttttttttt");
    }
});

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vwx = __webpack_require__(1);

var _swiper = __webpack_require__(67);

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _vwx.Page)({
    name: "swiper_ep",
    template: _swiper2.default,
    data: {
        isover: false
    },
    onLoad: function onLoad() {},
    onReady: function onReady() {},
    onShow: function onShow() {}
});

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

module.exports = "<div id=\"page\">\r\n    <div class=\"weui-cells page__category-content\">\r\n        <a class=\"weui-cell weui-cell_access js_item\" data-id=\"article\" href=\"#/swiper\">\r\n            <div class=\"weui-cell__bd\">\r\n                <p>swiper</p>\r\n            </div>\r\n            <div class=\"weui-cell__ft\"></div>\r\n        </a>\r\n        <a class=\"weui-cell weui-cell_access js_item\" data-id=\"article\" href=\"#/scrollview\">\r\n            <div class=\"weui-cell__bd\">\r\n                <p>scrollview</p>\r\n            </div>\r\n            <div class=\"weui-cell__ft\"></div>\r\n        </a>\r\n        <a class=\"weui-cell weui-cell_access js_item\" data-id=\"article\" href=\"#/modal\">\r\n            <div class=\"weui-cell__bd\">\r\n                <p>modal</p>\r\n            </div>\r\n            <div class=\"weui-cell__ft\"></div>\r\n        </a>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 22px;\">\r\n    <div class=\"page dialog js_show\">\r\n        <div class=\"page__hd\" style=\"padding: 22px 0;\">\r\n            <p class=\"page__desc\">对话框</p>\r\n        </div>\r\n        <div class=\"page__bd page__bd_spacing\">\r\n            <a href=\"javascript:;\" class=\"weui-btn weui-btn_default\" @click=\"showModal(1)\">showModal A</a>\r\n            <a href=\"javascript:;\" class=\"weui-btn weui-btn_default\" @click=\"showModal(2)\">showModal B</a>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

module.exports = "<div id=\"page\">\r\n    <div id=\"scroll\">\r\n        <scroll-view ref=\"childTime\" id=\"timelist\" scroll-id=\"#timelist\" class=\"wrapper\">\r\n            <div class=\"weui-cells\">\r\n                <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" v-for=\"(val,i) in list\">\r\n                    <div class=\"weui-cell__bd\">\r\n                        <p>{{val}}</p>\r\n                    </div>\r\n                    <div class=\"weui-cell__ft\">\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </scroll-view>\r\n    </div>\r\n    <div id=\"scroll2\">\r\n        <scroll-view ref=\"child2\" id=\"timelist2\" scroll-id=\"#timelist2\"  :scroll-x=\"true\" :scroll-y=\"false\" class=\"wrapper\">\r\n            <a class=\"weui-btn weui-btn_plain-primary\" v-for=\"(val,i) in list\" >\r\n                {{val}}\r\n            </a>\r\n        </scroll-view>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

module.exports = "<div id=\"swiper\">\r\n    <swiper :indicator-dots=\"true\" class=\"swipercon\" swiperId=\"sssid\">\r\n        <a class=\"swiper-slide blue-slide\"><img src=\"http://img.ukitchenplus.com/2017410122936771C7CD5B7838DE7EE5C562A246C96F8431.png\"></a>\r\n        <a class=\"swiper-slide blue-slide\"><img src=\"http://img.ukitchenplus.com/20174101229517242A88AEC89B92BF404B97A101B7A353AF.png\"></a>\r\n    </swiper>\r\n</div>";

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vwx = __webpack_require__(1);

var _index = __webpack_require__(18);

var _index2 = _interopRequireDefault(_index);

var _modal = __webpack_require__(19);

var _modal2 = _interopRequireDefault(_modal);

var _swiper = __webpack_require__(21);

var _swiper2 = _interopRequireDefault(_swiper);

var _scrollview = __webpack_require__(20);

var _scrollview2 = _interopRequireDefault(_scrollview);

__webpack_require__(25);

__webpack_require__(24);

__webpack_require__(23);

__webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _vwx.App)({
    config: {
        host: "http://apiqa.ukitchenplus.com",
        accompany: ""
    },
    pages: [{ path: '/', component: _index2.default }, { path: '/index', component: _index2.default }, { path: '/modal', component: _modal2.default }, { path: '/swiper', component: _swiper2.default }, { path: '/scrollview', component: _scrollview2.default }]
});

/***/ })

},[75]);