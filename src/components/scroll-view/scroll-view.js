import IScroll from 'iscroll';
import _tpl from './scroll_view.html';

let vScroll = null;
export default {
    name: "scroll-view",
    template: _tpl,
    data: function () {
        return {
            lowerY: 1,
            readyRen: false
        }
    },
    props: {
        scrollX: {
            type: Boolean,
            default: false
        },
        scrollY: {
            type: Boolean,
            default: true
        },
        scrollId: {
            default: ".scrollView"
        }
    },
    mounted: function () {
        let that = this;
        //创建滚动
        vScroll = new IScroll(this.scrollId, {
            scrollX: that.scrollX,
            scrollY: that.scrollY,
            probeType: 3,
            mouseWheel: true,
            disableTouch: false,
            disableMouse: true,
            disablePointer: true,
            eventPassthrough: that.scrollX,
            click: false,
            tap: true
        });
        //滚动监听
        vScroll.on('scrollStart', function () {
            that.bindscrollstart(this);
        });
        //滚动监听
        vScroll.on('scrollEnd', function () {
            that.bindscrollend(this);
            if (this.y == this.maxScrollY) {
                that.bindscrolltolower(this);
            } else if (this.y == 0) {
                that.bindscrolltoupper(this);
            }
        });
        //滚动监听
        vScroll.on('scroll', function () {
            that.bindscroll(this);
        });
    },
    methods: {
        bindscrollstart: function (evt) {
            if (this.lowerY <= 0) {
                this.readyRen = true;
            } else {
                this.readyRen = false;
            }
            this.$emit('bindscrollstart', evt);
        },
        bindscrollend: function (evt) {
            this.$emit('bindscrollend', evt);
        },
        bindscrolltoupper: function (evt) {
            this.$emit('bindscrolltoupper', evt);
        },
        bindscrolltolower: function (evt) {
            this.$emit('bindscrolltolower', evt);
        },
        bindscroll: function (evt) {
            this.lowerY = parseInt(evt.y - evt.maxScrollY);
            this.$emit('bindscroll', evt);
        },
        refresh: function () {
            vScroll.refresh();
        }
    }
};