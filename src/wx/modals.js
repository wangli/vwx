import Vue from 'vue';
import _ from 'lodash';
/*提示文字*/
var toast = new Vue({
    name:"toast",
    data: {
        duration: 0,
        show: false,
        title: '加载中...',
        loading: true
    },
    template: '<transition name="fade" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"><div class="o_load" v-if="show"><div class="loading08"><div class="loader" v-if="loading"></div><div class="loadtxt">{{title}}</div></div></div></transition>',
});
document.body.appendChild(toast.$mount().$el);
var showToast = function (_obj) {
    if (!toast.show) {
        toast.duration = 0;
        toast.title = '加载中...';
        var _o = _.clone(_obj);
        /*对象处理*/
        for (var k in _o) {
            //数据对象转换
            toast[k] = _o[k];
        }
        toast.show = true;
        if (toast.duration != 0) {
            setTimeout(function () {
                wx.hideToast()
            }, toast.duration);
        }
    } else if (_obj) {
        _.extend(toast, _obj);
    }
}
var hideToast = function () {
    if (toast.show) {
        toast.show = false;
    }
}
module.exports = { showToast, hideToast };