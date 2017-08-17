/*
 * v0.2.1
 * (c) 2017 wangli
 * Released under the MIT License.
 */
/*用户交互操作*/
import _toast from '../components/modal/toast';
import _actionSheet from '../components/modal/actionSheet';
import _modal from '../components/modal/modal';
import _loading from '../components/modal/loading';
import _ from 'lodash';

var toast, modal, actionSheet, loading;
var install = function (Vue, options) {
    loading = new Vue(_loading);
    toast = new Vue(_toast);
    modal = new Vue(_modal);
    actionSheet = new Vue(_actionSheet);
    if (document.body) {
        addModal();
    } else {
        window.addEventListener("load", addModal, false);
    }
}
var addModal = function () {
    document.body.appendChild(loading.$mount().$el);
    document.body.appendChild(toast.$mount().$el);
    document.body.appendChild(modal.$mount().$el);
    document.body.appendChild(actionSheet.$mount().$el);
};
var showToast = function (_obj) {
    if (!toast.show) {
        toast.title = '......';
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
var showLoading = function (_obj) {
    if (!loading.show) {
        loading.title = '加载中...';
        var _o = _.clone(_obj);
        /*对象处理*/
        for (var k in _o) {
            //数据对象转换
            loading[k] = _o[k];
        }
        loading.show = true;
    } else if (_.has(_obj, "title")) {
        loading.title = _obj.title;
    }
}
var hideLoading = function () {
    if (loading.show) {
        loading.show = false;
    }
}
var showModal = function (_obj) {
    if (!modal.show) {
        modal.title='';
        modal.content='';
        modal.showCancel=false;
        modal.cancelText='取消';
        modal.confirmText='知道了';

        var _o = _.clone(_obj);
        /*对象处理*/
        for (var k in _o) {
            //数据对象转换
            modal[k] = _o[k];
        }
        modal.show = true;
    }
}
var showActionSheet = function (_obj) {
    _.extend(actionSheet, _obj);
    actionSheet.show = true;
    setTimeout(function () {
        actionSheet.open = true;
    }, 10);
}
module.exports = {
    showToast,
    hideToast,
    showLoading,
    hideLoading,
    showModal,
    showActionSheet,
    install
};