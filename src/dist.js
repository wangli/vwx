/*
 * vwx.js v0.1.5
 * (c) 2017 wangli
 * Released under the MIT License.
 */

import Swiper from "./components/swiper/swiper";
import ScrollView from "./components/scroll-view/scroll-view";
import modal from "./wx/modal";
import wx from "./wx";
import { Page } from "./app";
import _ from 'lodash/core';
const components = [
    Swiper,
    ScrollView
]
const install = function (Vue) {
    components.map(component => {
        Vue.component(component.name, component);
    });
    modal.install(Vue);
    window.wx = wx;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
    window.Page = Page;
}
module.exports = {
    v: '0.2',
    Page: Page,
    wx,
    Swiper,
    ScrollView
};