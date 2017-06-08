import { Page } from "vwx";
import tpl from "./index.html";
import wi from "weui.js";
module.exports = Page({
    name: "index",
    template: tpl,
    data: {
        list: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20],
        isover: false,
        wait: false,
    },
    onLoad: function () { },
    onReady: function () {
        wx.request({
            url: 'http://apiqa.ukitchenplus.com/v3/gclass/classlist?page=1&pagesize=30',
            success: function (data) { }
        });

        app.config.accompany = wx.user.accompany();
    },
    onShow: function () { },
    additem: function () {
        var that = this;
        this.wait = true;
        setTimeout(function () {
            that.list.push(99);
            that.wait = false;
        }, 11000);
    },
    onscrolltolower: function () {
        var that = this;
        this.wait = true;
        setTimeout(function () {
            that.list.push(99);
            that.wait = false;
        }, 2000);
    },
    onscrolltoupper: function () {
        console.log("onscrolltoupper");
        var that = this;
        this.wait = true;
        setTimeout(function () {
            that.list.shift();
            that.wait = false;
        }, 2000);
    },
    pickerop: function () {
        wi.picker([{
            label: '飞机票',
            value: 0
        }, {
            label: '火车票(disabled)',
            disabled: true,
            value: 1
        }, {
            label: '的士票(disabled)',
            disabled: true,
            value: 2
        }, {
            label: '住宿费',
            value: 3
        }, {
            label: '礼品费',
            value: 4
        }, {
            label: '活动费',
            value: 5
        }, {
            label: '通讯费',
            value: 6
        }, {
            label: '补助',
            value: 7
        }, {
            label: '通讯费',
            value: 8
        }, {
            label: '其他',
            value: 9
        }], {
                defaultValue: [8],
                className: 'custom-classname',
                onChange: function (result) {
                    //console.log(item, index);
                    console.log(result);
                },
                onConfirm: function (result) {
                    console.log(result);
                },
                id: 'picker'
            });
    }
});