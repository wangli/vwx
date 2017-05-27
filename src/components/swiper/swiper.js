/*
 * swiper.js v0.1.4
 * (c) 2017 wangli
 * Released under the MIT License.
 */
import Swiper from 'swiper';
import _tpl from './swiper.html';
import 'swiper/dist/css/swiper.css';
var vSwiper = null;
export default {
    name: 'swiper',
    template: _tpl,
    props: {
        indicatorDots: {
            type: Boolean,
            default: function () {
                return false
            }
        },
        autoplay: {
            type: Boolean,
            default: function () {
                return false
            }
        },
        current: {
            type: Number,
            default: function () {
                return 0
            }
        },
        interval: {
            type: Number,
            default: function () {
                return 300
            }
        },
        duration: {
            type: Number,
            default: function () {
                return 500
            }
        },
        circular: {
            type: Boolean,
            default: function () {
                return false
            }
        },
        swiperId: {
            default: ".swiper"
        }
    },
    computed: {
        pagination: function () {
            return (this.indicatorDots) ? ".swiper-pagination" : "";
        },
        intval: function () {
            return (this.autoplay) ? this.interval : 0;
        },
        swid: function () {
            if (this.swiperId.indexOf('.') == 0) {
                return this.swiperId;
            } else {
                return "#" + this.swiperId;
            }
        }
    },
    mounted: function () {
        //创建滚动
        vSwiper = new Swiper(this.swid, {
            autoplay: this.intval,
            pagination: this.pagination,
            speed: this.duration,
            initialSlide: this.current,
            loop: this.circular,
        });
    },
    methods: {
        refresh: function () {
            if (vSwiper) {
                vSwiper.update();
            }
        }
    }
};
