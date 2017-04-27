import Vue from 'vue';
import VueRouter from 'vue-router';
import _ from 'lodash/core';

var routes = [];
var _app;

var App = function (_obj) {
    if (typeof _app == "undefined") {
        console.log("initApp");
        Vue.component(VueRouter);
        _.extend(routes, _obj.pages);
        var router = new VueRouter({ routes: routes });
        console.log(routes);
        var _app = new Vue({
            router
        }).$mount('#app');
    }
};

if (typeof window !== 'undefined' && window.getApp) {
    window.getApp = function () {
        return _app;
    };
}

module.exports = App;
