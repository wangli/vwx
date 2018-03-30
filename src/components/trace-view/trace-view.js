/*
 * trace-view.js v0.1.4
 * (c) 2017 wangli
 * Released under the MIT License.
 */
import _tpl from './trace-view.html';
var vSwiper = null;
module.exports =  {
    name: 'trace-view',
    template: _tpl,
    props: {
        current: {
            type: Number,
            default: function () {
                return 0
            }
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
        
    },
    methods: {
        refresh: function () {
            if (vSwiper) {
                vSwiper.update();
            }
        }
    }
};
