import Vue from 'vue';
import Vwx from "vwx";
import index from './index'
import './css/weui.min.css';
import './css/vwx.css';
Vwx.install(Vue);
console.log(Vwx.App.v);

var _p = new Vue({
    el: '#app',
    template: "<vwp-index></vwp-index>",
    components: {
        'vwp-index': index
    }
});