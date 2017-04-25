import Vue from 'vue';
import Vx from "vx";
import tpl from "./tpl/index.html";
import './css/weui.min.css';
import './css/vx.css';
Vx.install(Vue);
var _p = new Vue({
    el: '#app',
    template: tpl,
    data: {
        show: false,
        list: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20]
    }
});