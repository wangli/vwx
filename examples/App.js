import { App } from "vwx";
import index from './pages/index/index.js';
import cook from './pages/cook/index.js';
import cook2 from './pages/cook/index2.js';
import './css/weui.min.css';
import './css/vwx.css';

App({
    pages: [
        { path: '/index', component: index },
        { path: '/cook', component: cook },
        { path: '/cook2', component: cook2 }
    ]
});