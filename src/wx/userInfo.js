
var _token = "";
var _uid = 0;
var _rt = "web";
var _info = "web";
var p = {
    v: "3.0",
    notice: null,//提示信息
    login: false,//是否登陆
    accompany: function () {
        var _str = "v=" + this.v;
        _str += "&token=" + this.token;
        _str += "&rt=" + this.rt;
        _str += "&uid=" + this.uid;
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
        if (_val == "") {
            localStorage.removeItem("token");
        } else {
            localStorage.token = _val;
        }
        this.accompany();
    }
});
module.exports = p;