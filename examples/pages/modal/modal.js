import { Page } from "vwx";
import tpl from "./modal.html";
module.exports = Page({
    name: "modal_ep",
    template: tpl,
    onLoad: function () { },
    onReady: function () { },
    onShow: function () { },
    showModal: function (val) {
        switch (val) {
            case 1:
                wx.showModal({
                    title: '提示',
                    showCancel: false,
                    content: '这是一个模态弹窗',
                    success: function (res) {
                    }
                })
                break;
            case 2:
                wx.showModal({
                    title: '提示',
                    showCancel: true,
                    content: '这是一个模态弹窗',
                    success: function (res) {
                        if (res.confirm) {
                            console.log('用户点击确定')
                        } else if (res.cancel) {
                            console.log('用户点击取消')
                        }
                    }
                })
                break;
        }
    },
    actionSheet: function () {
        wx.showActionSheet({
            itemList: ['A', 'B', 'C'],
            success: function (res) {
                console.log(res.tapIndex)
            },
            fail: function (res) {
                console.log(res.errMsg)
            }
        })
    }
});