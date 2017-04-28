/*
 * vwx.js v0.1.2
 * (c) 2017 wangli
 * Released under the MIT License.
 */

import Swiper from "./components/swiper/swiper";
import ScrollView from "./components/scroll-view/scroll-view";
import wx from "./wx";
import { App, Page } from "./app";
import _ from 'lodash/core';
const components = [
    Swiper,
    ScrollView
]
const install = function (Vue) {
    components.map(component => {
        Vue.component(component.name, component);
    });
    window.wx = wx;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
module.exports = {
    v: '0.1',
    Page: Page,
    wx,
    Swiper,
    ScrollView
};