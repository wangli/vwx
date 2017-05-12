import Axios from 'axios';
import _ from 'lodash';
var count = 0;
export default function (_obj) {

    /*默认参数配置*/
    var _defObj = {};
    _defObj.url = '';
    _defObj.wait = true;
    _defObj.method = 'get';
    _defObj.dataType = 'json';
    _defObj.headers = { 'Content-Type': 'application/json;charset=utf-8' };
    _defObj.success = function (data) { };
    _defObj.fail = function (err) { };
    _defObj.complete = function (a) { };
    /*发送参数处理*/
    var _reqObj = _.clone(_defObj);
    if (_.has(_obj, 'dataType')) {
        _obj.responseType = _obj.dataType;
    }
    _.extend(_reqObj, _obj);
    /*发送数据*/
    Axios(_reqObj).then(function (res) {
        _reqObj.success(res.data);
        _reqObj.complete(res.data);
    }).catch(function (err) {
        if (err.response) {
            _reqObj.fail(err);
            _reqObj.complete(err);
        }
    });
};