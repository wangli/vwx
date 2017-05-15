/*
 * app.js v0.1.7
 * (c) 2017 wangli
 * Released under the MIT License.
 */
/*创建APP根页面*/
var _app;
var _appView;
var App = function (Vue, router, _config) {
    _app = _config;
    Object.defineProperty(window, "App", {
        get: function () {
            return _app;
        }
    });
    if (typeof _appView == "undefined") {
        _appView = new Vue({
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

        _app.view = _appView;
    }
};
if (typeof window !== 'undefined' && typeof window.getApp == 'undefined') {
    window.getApp = function () {
        return _app;
    };
}

module.exports = App;
