/*
 * index.js v0.1.11
 * (c) 2017 wangli
 * Released under the MIT License.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Swiper from "./components/swiper/swiper";
import ScrollView from "./components/scroll-view/scroll-view";
import modal from "./wx/modal";
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
    modal.install(Vue);
    App(Vue, VueRouter, _obj);
};
module.exports = {
    v: '0.2',
    App: _app,
    Page,
    wx,
    Swiper,
    ScrollView
};