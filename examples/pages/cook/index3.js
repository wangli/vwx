import { Page, App } from "vwx";
import _ from 'lodash/core';
import tpl from "./index3.html";
module.exports = Page({
    name:"cook3",
    template: tpl,
    data: {
        list: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20]
    },
    onReady: function () {
        wx.request({
            url: 'http://apiqa.ukitchenplus.com/v3/gclass/packagelist?page=1&pagesize=30',
            complete: function (data) {
                _.forEach(data, (val, key) => {
                    
                    //this[key] = val;
                });
            }
        })
    },
    closed: function () {
        this.show = false;
    },
    onscroll: function () {
        console.log("ttttttttttt");
    }
});