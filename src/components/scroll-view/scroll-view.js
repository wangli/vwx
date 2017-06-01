import IScroll from 'iscroll';
import _tpl from './scroll_view.html';

export default {
    name: "scroll-view",
    template: _tpl,
    data: function() {
        return {
            lowerY: 1,
            scrollTop: 0,
            readyRen: false,
            vScroll: null,
            waitBottom: false,
            waitTop: false
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
        isover: {
            type: Boolean,
            default: false
        },
        wait: {
            type: Boolean,
            default: false
        },
        scrollId: {
            default: ".scrollView"
        }
    },
    watch: {
        wait: function(val, oldVal) {
            if (val) {
                if (this.scrollTop >= 0) {
                    this.waitTop = true;
                    this.waitBottom = false;
                    setTimeout(() => {
                        this.refresh();
                        this.vScroll.scrollTo(0, 0, 200);
                    }, 1);
                } else if (this.lowerY <= 0) {
                    this.waitTop = false;
                    this.waitBottom = true;
                    setTimeout(() => {
                        this.refresh();
                        this.vScroll.scrollTo(0, this.vScroll.maxScrollY, 200);
                    }, 1);
                }
            } else {
                this.waitTop = false;
                this.waitBottom = false;
            }
        }
    },
    mounted: function() {
        let that = this;
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
            if (this.y == this.maxScrollY) {
                that.vbindscrolltolower(this);
            } else if (this.y == 0) {
                that.vbindscrolltoupper(this);
            }
        });
        //滚动监听
        this.vScroll.on('scroll', function() {
            that.vbindscroll(this);
        });
        if (window.document) {
            document.querySelector(this.scrollId).addEventListener("DOMNodeInserted", that.refresh, false);
            document.querySelector(this.scrollId).addEventListener("DOMNodeRemoved", that.refresh, false);
        }
    },
    methods: {
        vbindscrollstart: function(evt) {
            if (this.lowerY <= 0) {
                this.readyRen = true;
            } else {
                this.readyRen = false;
            }
            this.$emit('bindscrollstart', evt);
        },
        vbindscrollend: function(evt) {
            this.$emit('bindscrollend', evt);
        },
        vbindscrolltoupper: function(evt) {
            this.$emit('bindscrolltoupper', evt);
        },
        vbindscrolltolower: function(evt) {
            this.$emit('bindscrolltolower', evt);
        },
        vbindscroll: function(evt) {
            this.scrollTop = parseInt(evt.y);
            this.lowerY = parseInt(evt.y - evt.maxScrollY);
            this.$emit('bindscroll', evt);
        },
        refresh: function(evt) {
            this.vScroll.refresh();
        }
    }
};