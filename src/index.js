/*
 * vwx.js v0.1.1
 * (c) 2017 wangli
 * Released under the MIT License.
 */
import Swiper from "./components/swiper/swiper";
import ScrollView from "./components/scroll-view/scroll-view";
import wx from "./wx";
const components = [
    Swiper,
    ScrollView
]
const install = function (Vue, opts = {}) {
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
    install,
    wx,
    Swiper,
    ScrollView
};