import _tpl from './modal.html'

export default {
    name: "modal",
    data: {
        show: false,
        title: '',
        content: '',
        showCancel: false,
        cancelText: "取消",
        confirmText: "知道了"
    },
    template: _tpl,
    methods: {
        wxsuccess: function(res) {
            this.show = false;
            if (res.confirm) {
                this.complete(res);
                this.success(res);
            }
        },
        success: function(res) {},
        fail: function() {},
        complete: function() {}
    }
};