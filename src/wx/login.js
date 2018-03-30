import request from './request';
import _ from 'lodash';
import user from './userInfo';
module.exports =  function (_obj) {
    var obj = {
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