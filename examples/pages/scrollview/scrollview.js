import { Page, App } from "vwx";
import tpl from "./scrollview.html";
module.exports = Page({
    name:"scrollview",
    template: tpl,
    data: {
        list: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20]
    },
    onReady: function () {
    },
    onscroll: function () {
        console.log("ttttttttttt");
    }
});