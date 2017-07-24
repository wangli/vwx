/*
 * v0.1.3
 * (c) 2017 wangli
 * Released under the MIT License.
 */
import Axios from 'axios';
import _ from 'lodash';

var _o = {};
var _success = function () {

};
var _fail = function () {

};
var onBridgeReady = function () {
    if (typeof WeixinJSBridge != "undefined") {
        WeixinJSBridge.invoke('getBrandWCPayRequest', _o, function (res) {
            if (res.err_msg == "get_brand_wcpay_request:ok") {
                _success(res);
            } else {
                _fail(res);
            }
        });
    } else {
        alert("打开微信支付失败");
        _fail();
    }
}
var requestPayment = function (_obj) {
    _o = {};
    var _oclone = _.clone(_obj);
    for (var k in _oclone) {
        if (k == "success") {
            _success = _oclone[k];
        } else if (k == "fail") {
            _fail = _oclone[k];
        } else {
            _o[k] = _oclone[k];
        }
    }

    if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
    } else {
        onBridgeReady();
    }
}
module.exports = requestPayment;