/*
 * app.js v0.1.1
 * (c) 2017 wangli
 * Released under the MIT License.
 */
/*创建APP根页面*/
var _app;

var App = function (Vue, router) {
    if (typeof _app == "undefined") {
        var _app = new Vue({
            el: '#app',
            router,
            template: '<router-view></router-view>'
        });
    }
};

if (typeof window !== 'undefined' && window.getApp) {
    window.getApp = function () {
        return _app;
    };
}

module.exports = App;
