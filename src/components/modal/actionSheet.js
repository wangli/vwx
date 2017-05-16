import _tpl from './actionSheet.html'

export default {
    name: "actionSheet",
    data: {
        show: false,
        open: false,
        itemList: []
    },
    template: _tpl,
    methods: {
        selected: function(res) {
            var that = this;
            this.open = false;
            that.show = false;
            this.complete(res);
            this.success(res);
        },
        cancel: function() {
            var that = this;
            this.open = false;
            this.show = false;
            this.complete();
        },
        success: function() {},
        complete: function() {}
    }
};