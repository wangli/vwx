/*
 * v0.3.0
 * (c) 2017 wangli
 * Released under the MIT License.
 */
/*wx接口*/
import request from "./request";
import { setStorage, setStorageSync, getStorage, getStorageSync } from "./storage";
import { showToast, hideToast, showLoading, hideLoading, showModal, showActionSheet } from "./modal";
import login from "./login";
import user from "./userInfo";
import requestPayment from "./requestPayment";
import { navigateTo, redirectTo, navigateBack } from "./navigate";
module.exports = {
    v: "0.2.3",
    request,
    setStorage,
    setStorageSync,
    getStorage,
    getStorageSync,
    showToast,
    hideToast,
    showLoading,
    hideLoading,
    showModal,
    showActionSheet,
    login,
    user,
    requestPayment,
    navigateTo,
    redirectTo,
    navigateBack
};