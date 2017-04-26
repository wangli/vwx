import Vue from 'vue';
import Vwx from "vwx";
import _ from 'lodash/core';
import tpl from "./tpl/index.html";
import './css/weui.min.css';
import './css/vwx.css';
Vwx.install(Vue);

var _p = new Vue({
    el: '#app',
    template: tpl,
    data: {
        show: false,
        list: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20]
    },
    mounted: function () {
        wx.request({
            url: 'http://apiqa.ukitchenplus.com/v3/gclass/packagelist?page=1&pagesize=30',
            complete: function (data) {
                console.log(data);
                _.forEach(data, (val, key) => {
                    console.log(key);
                    //this[key] = val;
                });
            }
        })
    }
});