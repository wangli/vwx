import { App } from "vwx";
import index from './pages/index/index.js';
import modal from './pages/modal/modal.js';
import swiper from './pages/swiper/swiper.js';
import scrollview from './pages/scrollview/scrollview.js';
import switchview from './pages/switchview/switchview.js';
import pickerview from './pages/pickerview/pickerview.js';

import './css/weui.min.css';
import './css/wc.css';
import './css/vwx.css';
import './css/examples.css';

var coms=[{name: "com-footbar",template: "<div>out coms</div>"}]

App({
    config: {
        host: "http://apiqa.ukitchenplus.com",
        accompany: ""
    },
    pages: [
        { path: '/', component: index },
        { path: '/index', component: index },
        { path: '/modal', component: modal },
        { path: '/swiper', component: swiper },
        { path: '/scrollview', component: scrollview },
        { path: '/switchview', component: switchview },
        { path: '/pickerview', component: pickerview },
    ],
    rBefore:function(){
        
    }
},coms);