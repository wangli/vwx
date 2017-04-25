import _tpl from './view.html';

var mySwiper = null;
var autoplay = 0;
var indicatorDots = false;
var interval = 3000;
var swiperId = ".swiper";

var v = {
    template: _tpl,
    props: {
        hover: {
            default: false //是否启用点击态
        },
        hoverClass: {
            default: "hoverAct" //指定按下去的样式类。当 hover-class="none" 时，没有点击态效果
        },
        hoverStartTime: {
            default: 50 //按住后多久出现点击态，单位毫秒
        },
        hoverStayTime: {
            default: 400 //手指松开后点击态保留时间，单位毫秒
        }
    },
    mounted: function () {
        var that = this;

    },
    methods: {
        refresh: function () {

        }
    }
};
export default v;