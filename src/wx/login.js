import request from './request';
import _ from 'lodash';
import user from './userInfo';
export default function (_obj) {
    var obj = {
        url: App.config.host + "/account/login?" + App.config.accompany,
        success: function (data) {
            if (data.state == 1) {
                user.uid = data.result.uid;
                user.token = data.result.token;
            }
        }
    };
    _.extend(obj, _obj);
    request(obj);
};