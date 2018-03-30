import { App } from "vwx";
import index from './pages/index/index.js';
import modal from './pages/modal/modal.js';
import swiper from './pages/swiper/swiper.js';
import scrollview from './pages/scrollview/scrollview.js';
const switchview = () => import('./pages/switchview/switchview.js');
const pickerview = () => import('./pages/pickerview/pickerview.js');
//import switchview from './pages/switchview/switchview.js';
//import pickerview from './pages/pickerview/pickerview.js';

import './css/weui.min.css';
import './css/wc.css';
import './css/vwx.css';
import './css/examples.css';

var coms=[{name: "com-footbar",template: "<div>out coms 9999999</div>"}]

App({
    config: {
        host: "http://apiqa.ukitchenplus.com",
        accompany: ""
    },
    pages: [
        { path: '/', component: index,name:"index" },
        { path: '/index', component: index,name:"index2" },
        { path: '/index/:sub', component: index,name:"index3" },
        { path: '/modal', component: modal,name:"modal2" },
        { path: '/swiper', component: swiper,name:"swiper2" },
        { path: '/scrollview', component: scrollview,name:"scrollview2" },
        { path: '/switchview', component: switchview,name:"switchview2" },
        { path: '/pickerview', component: pickerview,name:"pickerview2" },
    ],
    rBefore:function(){
        
    }
},coms);