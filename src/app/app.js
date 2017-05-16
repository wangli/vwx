/*
 * app.js v0.2.0
 * (c) 2017 wangli
 * Released under the MIT License.
 */
/*创建APP根页面*/

var _config, router, _appView, _onLaunch;
var _app = {
    get config() {
        return _config;
    },
    get view() {
        return _appView;
    }
};

var App = function(Vue, VueRouter, _options) {
    Object.defineProperty(window, "app", {
        get: function() {
            return _app;
        }
    });
    if (_options.pages) {
        router = new VueRouter({
            routes: _options.pages
        });
    }
    if (_options.config) {
        _config = _options.config;
    }
    if (_options.onLaunch) {
        _onLaunch = _options.onLaunch;
    }

    for (var key in _options) {
        if (key != 'pages' && key != 'config' && key != 'onLaunch' && key != 'view') {
            _app[key] = _options[key];
        }
    }

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
            created: function() {
                this.history.push(this.$route.path);
                if (_onLaunch) {
                    _onLaunch();
                }
            }
        });
    }
};
if (typeof window !== 'undefined' && typeof window.getApp == 'undefined') {
    window.getApp = function() {
        return _app;
    };
}

module.exports = App;