/*
 * v0.1.0
 * (c) 2017 wangli
 * Released under the MIT License.
 */
import Axios from 'axios';
import _ from 'lodash';

var localData = function () {
    return {
        key: "",
        data: {},
        success: function () { },
        fail: function () { },
        complete: function () { },
        save: function () {
            if (typeof this.key === "string") {
                localStorage.setItem(this.key, JSON.stringify(this.data));
                setTimeout(() => {
                    this.success(this.key, this.data);
                }, 1);
            } else {
                this.fail("key值错误");
            }
            this.complete();
        },
        readData: function () {
            this.data = JSON.parse(localStorage.getItem(this.key));
            if (this.data) {
                this.success(this.key, this.data);
            } else {
                this.fail("获取" + this.key + "失败");
            }
            this.complete();
        },
        toJSON: function () {
            return localStorage.getItem(this.key);
        }
    }
};

var setStorage = function (_obj) {
    var _o = localData();
    _.extend(_o, _obj);
    _o.save();
}
var setStorageSync = function (_key, _data) {
    if (typeof _key === "string") {
        localStorage.setItem(_key, JSON.stringify(_data));
    } else {
        throw "key值请使用字符串";
    }
}
var getStorage = function (_obj) {
    var _o = localData();
    _.extend(_o, _obj);
    _o.readData();
}
var getStorageSync = function (_key) {
    if (typeof _key === "string") {
        var _objDot = _key.split('.');
        var _lg = _objDot.length;
        if (_lg == 1) {
            return JSON.parse(localStorage.getItem(_key));
        } else if (_lg > 1) {
            var data = JSON.parse(localStorage.getItem(_objDot[0]));
            for (var i = 1; i < _lg; i++) {
                data = getKeyData(_objDot[i], data);
            }
            return data;
        }
    } else {
        throw "key值请使用字符串";
    }
}
var getKeyData = function (_key, _data) {
    if (typeof _key === "string") {
        if (_key.match(/\[(\d+)\]/)) {
            var _sub = parseInt(_key.match(/\[(\d+)\]/)[1]);
            var _arr = _key.substring(0, _key.indexOf('['));
            return _data[_arr][_sub];
        } else {
            return _data[_key];
        }
    } else {
        throw "key值请使用字符串";
    }
}


module.exports = { setStorage, setStorageSync, getStorage, getStorageSync };