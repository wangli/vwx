/*
 * index.js v0.3.0
 * (c) 2017 wangli
 * Released under the MIT License.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Swiper from "./components/swiper/swiper";
import ScrollView from "./components/scroll-view/scroll-view";
import SwitchView from "./components/switch-view/switch-view";
import pickerView from "./components/picker-view/picker-view";

import modal from "./wx/modal";
import wx from "./wx";
import { App, Page } from "./app";
import _ from 'lodash';
var components = [
    Swiper,
    ScrollView,
    SwitchView,
    pickerView
];

const _app = function (_obj,_coms) {
    window.wx = wx;
    Vue.use(VueRouter);
    if(_coms instanceof Array){
        components=components.concat(_coms);
    }
    components.map(component => {
        Vue.component(component.name, component);
    });
    modal.install(Vue);
    App(Vue, VueRouter, _obj);
};
module.exports = {
    v: '0.3',
    Vue:Vue,
    App: _app,
    Page,
    wx,
    Swiper,
    ScrollView,
    SwitchView,
    pickerView
};