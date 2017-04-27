import request from './request';
import _ from 'lodash/core';
import { App, getApp } from '../app/app';
export default function (_obj) {
    var _App = getApp();
    var _url = _App.config.urlPath + "/user/userinfo?" + _App.config.accompany;
    var obj = {
        url: _url,
        success: function (data) {
            if (data.state == 1) {
                _App.user.info = data.result;
            }
        }
    };
    _.extend(obj, _obj);
    request(obj);
};