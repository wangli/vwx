import $ from '../libs/jquery.min';
import _ from '../libs/underscore-min';
import Director from '../libs/director.min';

var parameter = function () {
    _app.arguments = arguments;
    _app.parameter = arguments[0];
};
var router = new Router({ '/:p1': parameter, '/:p1/:p2': parameter, '/:p1/:p2/:p3': parameter, '/:p1/:p2/:p3/:p4': parameter });
router.configure({
    on: function (evtstr) { },
    before: function (a) { }
});
var _app = {
    v: "0.0.0",
    config: {
        urlPath: "http://api.ukitchenplus.com",
        accompany: '', //跟随发送数据的附属
    },
    user: {
        uid: "",
        token: ""
    },
    router: router,
    parameter: null
};
_app.getCookie = function (name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
};
_app.removeCookie = function (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = _app.getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};
/*是否微信登陆用户*/
_app.isWeixin = function (n) {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
};
/*微信用户自动登陆*/
_app.autoWeixin = function () {
    var _href = window.location.href;
    if (_href.indexOf("#") > -1) _href = _href.substr(_href.indexOf("#") + 1);
    if (_href == "") _href = "ucenter";
    _href = "ftpara_act_" + window.location.pathname;
    wx.request({
        url: _app.config.urlPath + "/user/bindingweixin?",
        data: {
            type: 1,
            state: _href
        },
        success: function (data) {
            if (data.state == 1) {
                _app.user.login = true;
                if (localStorage.tokenWeixin != "true") {
                    localStorage.tokenWeixin = "true";
                    //微信自动登陆跳转
                    if (_app.getCookie('UserLogin')) {
                        _app.user.token = _app.getCookie('UserLogin');
                    }
                    window.location.href = data.result.info;
                } else {
                    localStorage.tokenWeixin = "";
                    window.location.href = "index.html";
                }
            } else {
                wx.showModal({
                    content: "用户登陆错误",
                    confirmText: "知道了"
                });
            }
        }
    });
};
_app.user = (function () {
    var _token = "";
    var _uid = 0;
    var _rt = "web";
    var _info = "web";
    var p = {
        notice: null,//提示信息
        login: false,//是否登陆
        v: _app.v,
        accompany: function () {
            var _str = "v=" + this.v;
            _str += "&token=" + this.token;
            _str += "&rt=" + this.rt;
            _str += "&uid=" + this.uid;
            _app.config.accompany = _str;
            return _str;
        }
    };
    //用户信息
    Object.defineProperty(p, "info", {
        get: function () {
            if (localStorage.uinfo) {
                _info = JSON.parse(localStorage.uinfo);
            }
            return _info;
        },
        set: function (_val) {
            _info = _val;
            localStorage.uinfo = JSON.stringify(_val);
        }
    });
    Object.defineProperty(p, "uid", {
        get: function () {
            if (localStorage.uid) {
                _token = localStorage.uid;
            }
            return _uid;
        },
        set: function (_val) {
            _uid = _val;
            localStorage.uid = _val;
            this.accompany();
        }
    });
    Object.defineProperty(p, "rt", {
        get: function () {
            return _rt;
        },
        set: function (_val) {
            _rt = _val;
            this.accompany();
        }
    });
    Object.defineProperty(p, "token", {
        get: function () {
            if (localStorage.token) {
                _token = localStorage.token;
            }
            return _token;
        },
        set: function (_val) {
            _app.config.token = _token = _val;
            if (_val == "") {
                localStorage.removeItem("token");
                _app.user.login = false;
            } else {
                _app.user.login = true;
                localStorage.token = _val;
            }
            this.accompany();
        }
    });

    if (_app.getCookie("UserLogin")) {
        p.token = _app.getCookie("UserLogin");
    }
    return p;
}());

var _debug = {
    state: 0,
    show: false,
    asyncData: [],
    $dbgStBtn: $("<div id='dbgStBtn'></div>"),
    $console: $("<div id='dbgConsole'></div>"),
    push: function (_date, _val, _type) {
        if (typeof _type == "undefined") _type = 1;
        var _of = _val.indexOf("?");
        var _st = _val.lastIndexOf("/", _of) + 1;
        var _api = _val.substring(_st, _of);
        this.asyncData.push({
            api: _api,
            date: _date,
            val: _val,
            type: _type
        })
    },
    init: function () {
        this.show = true;
        this.state = 1;
        this.$dbgStBtn.click(function () {
            if (_debug.state == 2) {
                _debug.state = 1;
                _debug.$console.remove();
            } else {
                _debug.state = 2;
                _debug.$console.empty();
                $("body").append(_debug.$console);
                _debug.openConsole();
            }
        });
        $("body").append(this.$dbgStBtn);
    },
    openConsole: function () {
        var _this = this;
        var _lg = this.asyncData.length;
        for (var k = _lg - 1; k >= 0; k--) {
            var _shl = "";
            if (this.asyncData[k].type == 1) {
                _shl += "<span class='dbgSpan weui-btn weui-btn_warn'>";
            } else {
                _shl += "<span class='dbgSpan weui-btn weui-btn_primary'>";
            }
            _shl += this.asyncData[k].api + "<br />" + this.asyncData[k].type + ":" + k + "-";
            _shl += this.asyncData[k].date + "</span>";
            var _$span = $(_shl);

            _$span.click(k, function (_evt) {
                wx.showModal({
                    content: _this.asyncData[_evt.data].val
                });
            });
            _debug.$console.append(_$span);
        }
    },
    open: function () {
        this.$dbgStBtn.show();
        this.show = true;
    },
    close: function () {
        this.$dbgStBtn.hide();
        this.show = false;
    }
}
_app.debug = _debug;
App = function (_obj) {
    _.extend(_app, _obj);
};
getApp = function () {
    _app.user.accompany();
    return _app;
};
export default getApp;
