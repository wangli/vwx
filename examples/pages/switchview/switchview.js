import { Page } from "vwx";
import _tpl from './switchview.html';

module.exports = Page({
    name: "switchview",
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