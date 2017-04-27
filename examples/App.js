import Vue from 'vue';
import Vwx from "vwx";
import index from './pages/index/index.js'
import './css/weui.min.css';
import './css/vwx.css';
Vwx.install(Vue);
var App = Vwx.App;
App({
    pages: [
        { path: '/index', component: index }
    ]
});