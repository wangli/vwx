/*
 * vwx.js v0.1.2
 * (c) 2017 wangli
 * Released under the MIT License.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Swiper from "./components/swiper/swiper";
import ScrollView from "./components/scroll-view/scroll-view";
import wx from "./wx";
import { App, Page } from "./app";
import _ from 'lodash/core';
const components = [
    Swiper,
    ScrollView
]
const install = function (_Vue, _VueRouter) {
    _Vue.use(_VueRouter);
    components.map(component => {
        _Vue.component(component.name, component);
    });
    window.wx = wx;
};
const _app = function (_obj) {
    var routes = [];
    install(Vue, VueRouter);
    _.extend(routes, _obj.pages);
    var router = new VueRouter({ routes: routes });
    App(Vue, router);

};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue, VueRouter);
}
module.exports = {
    v: '0.1',
    App: _app,
    Page: Page,
    wx,
    Swiper,
    ScrollView
};