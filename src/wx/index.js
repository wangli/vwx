/*
 * v0.2.2
 * (c) 2017 wangli
 * Released under the MIT License.
 */
/*wx接口*/
import request from "./request";
import { setStorage, setStorageSync, getStorage, getStorageSync } from "./storage";
import { showToast, hideToast } from "./modals";
import login from "./login";
import user from "./userInfo";
import requestPayment from "./requestPayment"
module.exports = {
    v: "0.2.2",
    request,
    setStorage,
    setStorageSync,
    getStorage,
    getStorageSync,
    showToast,
    hideToast,
    login,
    user,
    requestPayment
};