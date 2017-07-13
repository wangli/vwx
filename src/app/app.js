/*
 * app.js v0.4.1
 * (c) 2017 wangli
 * Released under the MIT License.
 */
/*创建APP根页面*/

var _config, _router, _appView, _onLaunch;
var _app = {
    get config() {
        return _config;
    },
    get view() {
        return _appView;
    },
    get router() {
        return _router;
    }
};

var App = function (Vue, VueRouter, _options) {
    if (_options.pages) {
        _router = new VueRouter({
            routes: _options.pages
        });
        _router.beforeEach((to, from, next) => {
            var _rApp = _router.app;
            if (_rApp.history && _rApp.anim) {
                /*from离开页面处理*/
                var fromChildren = _rApp.$children[0];
                var _sub = _rApp.history.lastIndexOf(to.path);
                if (_sub < 0) {
                    _rApp.history.push(to.path);
                    fromChildren.animName = "animLeft";
                } else {
                    _rApp.history.pop();
                    fromChildren.animName = "animRight";
                }
                setTimeout(() => { next(); }, 1);
            } else {
                next();
            }
        });
        _router.afterEach(to => { });
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
            router:_router,
            template: '<router-view></router-view>',
            data: {
                history: [],
                anim: false
            },
            watch: {
                $route(to, from) {
                    if (this.history == 0) {
                        this.history.push(to.path);
                    }
                }
            },
            created: function () {
                this.history.push(this.$route.path);
                if (_onLaunch) {
                    _onLaunch();
                }
            }
        });
    }
};
if (typeof window !== 'undefined' && typeof window.getApp == 'undefined') {
    window.app = _app;
    window.getApp = function () {
        return _app;
    };
}

module.exports = App;