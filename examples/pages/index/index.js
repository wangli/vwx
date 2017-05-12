import { Page, App } from "vwx";
import _ from 'lodash';
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
        wx.request({
            url: 'http://apiqa.ukitchenplus.com/v3/gclass/packagelist?page=1&pagesize=30',
            complete: function (data) {
                _.forEach(data, (val, key) => {

                    //this[key] = val;
                });
            }
        });
        wx.setStorage({
            key: "user", data: "good job", success: function (_key, _data) {
                console.log(_key);
                console.log(_data);
            },
            fail: function (err) {
                console.log(err);
            }
        });
    },
    closed: function () {
        this.show = false;
    },
    onscroll: function () {
        console.log("ttttttttttt");
    }
});