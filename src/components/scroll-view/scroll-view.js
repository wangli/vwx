/*
 * scroll-view.js v0.2.3
 * (c) 2017 wangli
 * Released under the MIT License.
 */
import IScroll from 'iscroll';
import _tpl from './scroll_view.html';

export default {
    name: "scroll-view",
    template: _tpl,
    data: function() {
        return {
            lowerY: 1,
            scroll_top: 0,
            vScroll: null,
            waitBottom: false,
            waitTop: false,
            threshold:false
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
        scrollTop: {
            type: Number,
            default: 0
        },
        upperThreshold: {
            type: Number,
            default: 50
        },
        lowerThreshold: {
            type: Number,
            default: 50
        },
        isover: {
            type: Boolean,
            default: false
        },
        wait: {
            type: Boolean,
            default: false
        },
        more: {
            type: Boolean,
            default: false
        },
        scrollId: {
            default: ".scrollView"
        }
    },
    watch: {
        wait: function (val, oldVal) {
            if(!val){
                this.waitBottom=this.waitTop=false;
            }
        }
    },
    mounted: function() {
        let that = this;
        this.scroll_top=this.scrollTop;
        //创建滚动
        this.vScroll = new IScroll(this.scrollId, {
            scrollX: that.scrollX,
            scrollY: that.scrollY,
            probeType: 3,
            mouseWheel: true,
            disableTouch: false,
            disableMouse: true,
            disablePointer: true,
            eventPassthrough: that.scrollX,
            click: true,
            tap: true
        });
        //滚动监听
        this.vScroll.on('scrollStart', function() {
            that.vbindscrollstart(this);
        });
        //滚动监听
        this.vScroll.on('scrollEnd', function() {
            that.vbindscrollend(this);
        });
        if(this.more){
            //滚动监听
            this.vScroll.on('scroll', function() {
                that.vbindscroll(this);
            });
        }
        if (window.document) {
            document.querySelector(this.scrollId).addEventListener("DOMNodeInserted", that.refresh, false);
            document.querySelector(this.scrollId).addEventListener("DOMNodeRemoved", that.refresh, false);
        }
    },
    methods: {
        vbindscrollstart: function(evt) {
            this.$emit('bindscrollstart', evt);
        },
        vbindscrollend: function(evt) {
            this.threshold=false;
            this.$emit('bindscrollend', evt);
            this.refresh();
        },
        vbindscrolltoupper: function(evt) {
            this.$emit('bindscrolltoupper', evt);
        },
        vbindscrolltolower: function(evt) {
            this.$emit('bindscrolltolower', evt);
        },
        vbindscroll: function(evt) {
            this.scroll_top = parseInt(evt.y);
            this.lowerY = parseInt(evt.y - evt.maxScrollY);

            if(this.scroll_top<0){
                this.waitTop=false;
            }else if(this.lowerY>(-this.lowerThreshold)){
                this.waitBottom=false;
            }

            if (this.lowerY <= (-this.lowerThreshold)&&!this.threshold&&!this.waitBottom) {
                this.waitBottom=true;
                this.threshold=true;
                this.vbindscrolltolower(this);
            } else if (this.scroll_top >=this.upperThreshold&&!this.threshold&&!this.waitTop) {
                this.waitTop=true;
                this.threshold=true;
                this.vbindscrolltoupper(this);
            }
            this.$emit('bindscroll', evt);
        },
        refresh: function(evt) {
            this.vScroll.refresh();
        }
    }
};