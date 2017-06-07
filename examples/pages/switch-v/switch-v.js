import { Page } from "vwx";
import _tpl from './switch-v.html';

module.exports = Page({
    name: "switch_V",
    template: _tpl,
    data: {
        isover: false,
    },
    onLoad: function () { },
    onReady: function () {
    },
    onShow: function () { },
    acb : function(data){
        console.log(data);
    }
});