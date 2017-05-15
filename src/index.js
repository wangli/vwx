/*
 * index.js v0.1.9
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
    var _data = { history: [] };
    var _methods = {};
    for (var key in routes) {
        if (!_.has(routes[key], 'pages')) {
            if (typeof routes[key] == "function") {
                _methods[key] = routes[key];
            } else if (typeof routes[key] == "object") {
                _data[key] = routes[key];
            }
        }
    }
    //_.extend(routes, _obj.pages);
    var router = new VueRouter({ routes });
    App(Vue, router, _data, _methods);
};
module.exports = {
    v: '0.2',
    App: _app,
    Page,
    wx,
    Swiper,
    ScrollView
};