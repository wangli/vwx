import _toast from '../components/modal/toast';
import _actionSheet from '../components/modal/actionSheet';
import _modal from '../components/modal/modal';
import _ from 'lodash';

var toast, modal, actionSheet;
var install = function(Vue, options) {
    toast = new Vue(_toast);
    modal = new Vue(_modal);
    actionSheet = new Vue(_actionSheet);
    if (document.body) {
        document.body.appendChild(toast.$mount().$el);
        document.body.appendChild(modal.$mount().$el);
        document.body.appendChild(actionSheet.$mount().$el);
    } else {
        window.addEventListener("load", function() {
            document.body.appendChild(toast.$mount().$el);
            document.body.appendChild(modal.$mount().$el);
            document.body.appendChild(actionSheet.$mount().$el);
        }, false);
    }
}
var showToast = function(_obj) {
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
            setTimeout(function() {
                wx.hideToast()
            }, toast.duration);
        }
    } else if (_obj) {
        _.extend(toast, _obj);
    }
}
var hideToast = function() {
    if (toast.show) {
        toast.show = false;
    }
}
var showModal = function(_obj) {
    if (!modal.show) {
        var _o = _.clone(_obj);
        /*对象处理*/
        for (var k in _o) {
            //数据对象转换
            modal[k] = _o[k];
        }
        modal.show = true;
    }
}
var showActionSheet = function(_obj) {
    _.extend(actionSheet, _obj);
    actionSheet.show = true;
    setTimeout(function() {
        actionSheet.open = true;
    }, 10);
}
module.exports = {
    showToast,
    hideToast,
    showModal,
    showActionSheet,
    install
};