import {Page} from "vwx";
import tpl from "./index.html";
module.exports = Page({
    name: "index",
    template: tpl,
    data: {
        list: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20]
    },
    onLoad: function() {},
    onReady: function() {
        wx.request({
            url: 'http://apiqa.ukitchenplus.com/v3/gclass/classlist?page=1&pagesize=30',
            success: function(data) {}
        });

        app.config.accompany = wx.user.accompany();
        wx.showToast();
    },
    onShow: function() {},
    closed: function() {
        this.show = false;
    },
    onscroll: function() {

    }
});