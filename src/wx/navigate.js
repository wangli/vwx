module.exports = {
    navigateTo: function (_obj) {
        if (_obj.url) {
            app.router.push(_obj.url);
        }
    },
    redirectTo: function (_obj) {
        if (_obj.url) {
            app.router.replace(_obj.url);
        }
    },
    navigateBack: function (_obj) {
        if (_obj) {
            if (_obj.delta) app.router.go(_obj.delta);
        } else {
            app.router.go(-1);
        }
    }
}