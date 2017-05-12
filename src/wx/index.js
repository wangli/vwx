/*
 * v0.2.0
 * (c) 2017 wangli
 * Released under the MIT License.
 */
/*wx接口*/
import request from "./request";
import { setStorage, setStorageSync, getStorage, getStorageSync } from "./storage";
import { showToast, hideToast } from "./modals";
module.exports = {
    v: 0.1,
    request,
    setStorage,
    setStorageSync,
    getStorage,
    getStorageSync,
    showToast,
    hideToast,
};