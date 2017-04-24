import $ from '../libs/jquery.min';
import Vue from '../libs/vue';


/*提示文字*/
var toast = new Vue({
    data: { duration: 0, show: false, title: '加载中...', loading: true },
    template: '<transition name="fade" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"><div class="o_load" v-if="show"><div class="loading08"><div class="loader" v-if="loading"></div><div class="loadtxt">{{title}}</div></div></div></transition>',
    mounted: function () {

    }
});
/*弹窗模态框*/
var modal = new Vue({
    data: {
        show: false,
        title: '',
        content: '',
        showCancel: false,
        cancelText: "取消",
        confirmText: "知道了"
    },
    template: '<div class="js_dialog" v-if="show"><div class="weui-mask"></div><div class="weui-dialog"><div class="weui-dialog__hd" v-if="title!=\'\'"><strong class="weui-dialog__title">{{ title }}</strong></div><div class="weui-dialog__bd" v-html="content"></div><div class="weui-dialog__ft"><a href="javascript:;" @click="wxsuccess({confirm:false})" class="weui-dialog__btn weui-dialog__btn_default" v-if="showCancel">{{ cancelText }}</a> <a href="javascript:;" @click="wxsuccess({confirm:true})" class="weui-dialog__btn weui-dialog__btn_primary">{{ confirmText }}</a></div></div></div>',
    methods: {
        wxsuccess: function (res) {
            this.show = false;
            if (res.confirm) {
                this.success(res);
            }
        },
        success: function (res) {
        },
        fail: function () { },
        complete: function () { }
    }
});
/*选择数据列表*/
var actionSheet = new Vue({
    data: {
        show: false,
        open: false,
        itemList: []
    },
    template: '<div id="iosActionsheet" v-if="show"><div class="weui-mask" @click="cancel"></div><div class="weui-actionsheet" :class="{\'weui-actionsheet_toggle\':open}"><div class="weui-actionsheet__menu"><template v-for="(val,i) in itemList"><div class="weui-actionsheet__cell" @click="selected({tapIndex:i})">{{val}}</div></template></div><div class="weui-actionsheet__action"><div class="weui-actionsheet__cell" @click="cancel">取消</div></div></div></div>',
    methods: {
        selected: function (res) {
            var that = this;
            this.open = false;
            that.show = false;
            this.complete(res);
            this.success(res);
        },
        cancel: function () {
            var that = this;
            this.open = false;
            this.show = false;
            this.complete();
        },
        success: function () {
        },
        complete: function () {
        }
    }
});
document.body.appendChild(toast.$mount().$el);
document.body.appendChild(modal.$mount().$el);
document.body.appendChild(actionSheet.$mount().$el);

var debug = function (_val, _type) {
    var App = getApp();
    if (App.debug) {
        var _d = new Date();
        var _tm = _d.getDate() + "" + _d.getHours() + "" + _d.getMinutes();
        _tm += "" + _d.getSeconds() + "" + _d.getMilliseconds();
        App.debug.push(_tm, _val, _type);
    }
};
var localData = function () {
    return {
        key: "",
        data: {},
        success: function () { },
        fail: function () { },
        complete: function () { },
        save: function () {
            localStorage.setItem(this.key, JSON.stringify(this.data));
        },
        set: function (_key, _val) {
            if (typeof _key === "string") {
                var _objDot = _key.split('.');
                this.setDotVal(this.data, _objDot, _val);
            } else if (typeof _key === "object") {
                for (var k in _key) {
                    this.data[k] = _key[k];
                }
            } else {
                return this
            }
        },
        get: function (_key) {
            if (typeof _key === "string") {
                var _objDot = _key.split('.');
                if (_objDot.length < 2) {
                    if (_key.match(/\[(\d+)\]/)) {
                        var _sub = parseInt(_key.match(/\[(\d+)\]/)[1]);
                        var _arr = _key.substring(0, _key.indexOf('['));
                        return this.data[_arr][_sub];
                    } else {
                        return this.data[_key];
                    }
                }
            } else {
                throw "key值请使用字符串获取";
            }
        },
        setDotVal: function (_db, _objDotArr, _val) {
            var _key = _objDotArr.shift();
            if (_key.match(/\[(\d+)\]/)) {
                var _sub = parseInt(_key.match(/\[(\d+)\]/)[1]);
                var _arr = _key.substring(0, _key.indexOf('['));
                if (_db[_arr] instanceof Array) {
                    if (_objDotArr.length > 0) {
                        this.setDotVal(_db[_arr][_sub], _objDotArr, _val);
                    } else {
                        _db[_arr][_sub] = _val;
                    }
                } else {
                    throw "没有" + _arr + "数组对象";
                }
            } else if (_.has(_db, _key)) {
                if (_objDotArr.length > 0) {
                    this.setDotVal(_db[_key], _objDotArr, _val);
                } else {
                    _db[_key] = _val;
                }
            } else {
                _db[_key] = _val;
            }
        },
        readData: function () {
            this.data = JSON.parse(localStorage.getItem(this.key));
        },
        toJSON: function () {
            return localStorage.getItem(this.key);
        }
    }
};

var orignalSetItem = localStorage.setItem;
var orignalGetItem = localStorage.getItem;
var changeStorage = function () { };
localStorage.setItem = function (key, newValue) {
    var setItemEvent = new Event("storage");
    setItemEvent.newValue = newValue;
    window.dispatchEvent(setItemEvent);
    orignalSetItem.apply(this, arguments);
}
window.addEventListener('storage', function (e) {
    changeStorage({ data: JSON.parse(e.newValue) });
});
wx = {
    /*数据请求*/
    request: function (_obj) {
        var App = getApp();
        var _o = _.clone(_obj);
        /*对象赋值*/
        var obj = {};
        obj.url = "";
        obj.method = "POST";
        obj.dataType = "json";
        obj.contentType = 'application/json;charset=utf-8';
        obj.header = {};
        obj.success = function (data) {
            debug("------read------<br/>" + this.url + "<br/>" + JSON.stringify(data), 2);
            if (data.state == 0) {
                if (data.errordes == "请先登录" && App.isWeixin()) {
                    wx.showToast({ title: "跳转登陆" });
                    localStorage.tokenWeixin = "";
                    App.autoWeixin();
                } else if (data.errordes == "请先登录") {
                    wx.showModal({
                        content: data.errordes, showCancel: true, success: function () {
                            window.location.href = "/login.html";
                        }
                    });
                } else {
                    wx.showModal({ content: data.errordes });
                }
            }
            this.cxSuccess(data);
        };
        obj.cxSuccess = function (data) { };
        obj.error = function (a, b, c) {
            debug("------read-error------<br/>" + this.url + "<br/>" + JSON.stringify(a), 2);
            wx.hideToast();
            wx.showModal({ content: a });
            this.fail(a, b, c);
        };
        obj.fail = function (a, b, c) { };
        obj.complete = function (a) { };
        /*对象处理*/
        for (var k in _obj) {
            //数据对象转换
            switch (k) {
                case "method":
                    obj["type"] = _obj[k];
                    break;
                case "header":
                    obj["headers"] = _obj[k];
                    break;
                case "success":
                    obj["cxSuccess"] = _obj[k];
                    break;
                case "error":
                    obj["fail"] = _obj[k];
                    break;
                case "data":
                    obj["data"] = JSON.stringify(_obj[k]);
                    break;
                default:
                    obj[k] = _obj[k];
            }
        }
        debug("------create------<br/>" + obj.url + "<br/>" + obj.data, 1);
        $.ajax(obj);
    },
    showToast: function (_obj) {
        if (!toast.show) {
            toast.duration = 0;
            toast.title = '加载中...';
            var _o = _.clone(_obj);
            /*对象处理*/
            for (var k in _o) {
                //数据对象转换
                toast[k] = _o[k];
            }
            toast.show = true;
            if (toast.duration != 0) {
                setTimeout(function () {
                    wx.hideToast()
                }, toast.duration);
            }
        } else if (_obj) {
            _.extend(toast, _obj);
        }
    },
    hideToast: function () {
        if (toast.show) {
            toast.show = false;
        }
    },
    showModal: function (_obj) {
        if (!modal.show) {
            var _o = _.clone(_obj);
            /*对象处理*/
            for (var k in _o) {
                //数据对象转换
                modal[k] = _o[k];
            }
            modal.show = true;
        }
    },
    /*用户选择列表*/
    showActionSheet: function (_obj) {
        _.extend(actionSheet, _obj);
        actionSheet.show = true;
        setTimeout(function () {
            actionSheet.open = true;
        }, 10);
    },
    /*获取用户数据*/
    getUserInfo: function (_obj) {
        var App = getApp();
        var that = this;
        var _url = App.config.urlPath + "/user/userinfo?" + App.config.accompany;
        var obj = {
            url: _url,
            success: function (data) {
                if (data.state == 1) {
                    App.user.info = data.result;
                }
            }
        };
        _.extend(obj, _obj);
        wx.request(obj);
    },
    /*异步存储数据对象*/
    setStorage: function (_obj) {
        var _o = localData();
        _.extend(_o, _obj);
        changeStorage = _o.success;
        var _objDot = _o.key.split('.');
        if (_objDot.length > 1) {
            _o.key = _objDot.shift();
            var _db = _.clone(_o.data);
            _o.data = {};
            _o.set(_objDot.join("."), _db);
            _o.save();
        } else if (_objDot.length == 1) {
            _o.save();
        }
    },
    /*异步返回数据对象*/
    getStorage: function (_obj) {
        var _o = localData();
        _.extend(_o, _obj);
        _o.readData();
        _o.success({ "data": _o.data });
    },
    getStorageSync: function (_key) {
        return JSON.parse(localStorage[_key]);
    },
    /*验证token*/
    verifytoken: function (_obj) {
        var App = getApp();
        var _o = {
            url: App.config.urlPath + "/account/verifytoken?" + App.config.accompany,
            success: function (data) {
                if (data.state == 1) {
                    if (data.result.valid) {
                        App.user.login = true;
                    }
                }
            }
        };
        _.extend(_o, _obj);
        wx.request(_o);
    }
};
export default wx;