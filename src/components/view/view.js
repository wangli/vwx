import _tpl from './view.html';

var mySwiper = null;
var autoplay = 0;
var indicatorDots = false;
var interval = 3000;
var swiperId = ".swiper";
/**
 * Weix继承自vue
 * @param {Object} 基本的配置
 * @example
 * @returns {Object} uview对象
 */
var v = {
    template: _tpl,
    props: ['autoplay', 'indicator-dots', 'interval'],
    /*在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。*/
    beforeCreate: function () {
    },
    /*实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。*/
    created: function () {
    },
    /*在挂载开始之前被调用：相关的 render 函数首次被调用。*/
    beforeMount: function () {
    },
    /*el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。*/
    mounted: function () {
        var that = this;
        if (typeof that.autoplay != "undefined") autoplay = that.autoplay;
        if (typeof that.indicatorDots != "undefined") indicatorDots = that.indicatorDots;
        if (typeof that.interval != "undefined") interval = that.interval;
        //创建滚动
        mySwiper = new Swiper(swiperId, {
            loop: false,
            autoplay: autoplay
        });
    },
    /*数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。*/
    beforeUpdate: function () { },
    /*由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新*/
    updated: function () { },
    /*keep-alive 组件激活时调用*/
    activated: function () { },
    /*keep-alive 组件停用时调用*/
    deactivated: function () { },
    /*实例销毁之前调用。在这一步，实例仍然完全可用。*/
    beforeDestroy: function () { },
    /*Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。*/
    destroyed: function () { },
    methods: {
        refresh: function () {
            mySwiper.update();
        }
    }
};
export default v;