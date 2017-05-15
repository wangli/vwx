import { Page } from "vwx";
import tpl from "./index.html";
module.exports = Page({
    name: "index",
    template: tpl,
    data: {
        list: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20]
    },
    onLoad: function () {
    },
    onReady: function () {
        console.log(App);
        wx.request({
            url: 'http://apiqa.ukitchenplus.com/v3/gclass/classlist?page=1&pagesize=30',
            success: function (data) {
            }
        });
        wx.login({
            method: "POST",
            data: {
                type: 1,
                account: "13567486258",
                pwd: "123456"
            }
        });
        App.config.accompany = wx.user.accompany();
    },
    onShow: function () {
    },
    closed: function () {
        this.show = false;
    },
    onscroll: function () {
        console.log("ttttttttttt");
    }
});