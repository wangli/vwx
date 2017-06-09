import { Page } from "vwx";
import _tpl from './pickerview.html';

module.exports = Page({
    name: "pickerview",
    template: _tpl,
    data: {
        range : [{
            label: '飞机票',
            value: 0
        }, {
            label: '火车票(disabled)',
            disabled: true,//是否禁选
            value: 1
        },{
            label: '飞机票',
            value: 2
        }]
    },
    onLoad: function () { },
    onReady: function () {
    },
    onShow: function () { },
    acb : function(data){
        console.log(data);
    }
});