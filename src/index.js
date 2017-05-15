/*
 * index.js v0.1.10
 * (c) 2017 wangli
 * Released under the MIT License.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Swiper from "./components/swiper/swiper";
import ScrollView from "./components/scroll-view/scroll-view";
import wx from "./wx";
import { App, Page } from "./app";
import _ from 'lodash';
const components = [
    Swiper,
    ScrollView
];

const _app = function (_obj) {
    window.wx = wx;
    Vue.use(VueRouter);
    components.map(component => {
        Vue.component(component.name, component);
    });
    var routes = _obj.pages;
    var _appConfig = {};
    for (var key in _obj) {
        if (key !== 'pages') {
            _appConfig[key] = _obj[key];
        }
    }
    //_.extend(routes, _obj.pages);
    var router = new VueRouter({ routes });
    App(Vue, router, _appConfig);
};
module.exports = {
    v: '0.2',
    App: _app,
    Page,
    wx,
    Swiper,
    ScrollView
};