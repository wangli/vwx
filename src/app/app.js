/*
 * app.js v0.1.3
 * (c) 2017 wangli
 * Released under the MIT License.
 */
/*创建APP根页面*/
var _app;

var App = function (Vue, router) {
    if (typeof _app == "undefined") {
        var _app = new Vue({
            name: "App",
            el: '#app',
            router,
            template: '<router-view></router-view>',
            data: {
                history: []
            },
            watch: {
                $route(to, from) {
                    var nChildren = this.$children[0];
                    var i = (this.history.length > 1) ? this.history.length - 2 : 0;
                    if (this.history[i] != to.path) {
                        this.history.push(to.path);
                    } else {
                        this.history.pop();
                    }
                }
            },
            created: function () {
                this.history.push(this.$route.path);
            }
        });
    }
};

if (typeof window !== 'undefined' && window.getApp) {
    window.getApp = function () {
        return _app;
    };
}

module.exports = App;
