import Vue from  './libs/vue';

var pageOption = {
    data: { list: [], page: 0, size: 0, total: 0 },
    watch: {},
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
    },
    onReady: function () {
        // 生命周期函数--监听页面初次渲染完成
    },
    onShow: function () {
        // 生命周期函数--监听页面显示
    },
    onHide: function () {
        // 生命周期函数--监听页面隐藏
    },
    onUnload: function () {
        // 生命周期函数--监听页面卸载
    },
    onPullDownRefresh: function () {
        // 页面相关事件处理函数--监听用户下拉动作
    },
    onReachBottom: function () {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        //用户点击右上角分享
    },
    setData: function (_obj) {
        var _this = this;
        _.each(_obj, function (val, key) {
            _this[key] = val;
        });
    }
};
/**
 * Weix继承自vue
 * @param {Object} 基本的配置
 * @example
 * @returns {Object} uview对象
 */
var Weix = Vue.extend({
    methods: {
        openChild: function () { },
        changeVas: function () { },
        goBack: function () { }
    },
    /*在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。*/
    beforeCreate: function () {
        _.extend(this, pageOption);
    },
    /*实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。*/
    created: function () {
        this.onLoad();
    },
    /*在挂载开始之前被调用：相关的 render 函数首次被调用。*/
    beforeMount: function () {
        this.onReady();
    },
    /*el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。*/
    mounted: function () {
        this.onShow();
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
    beforeDestroy: function () {
        this.onHide();
    },
    /*Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。*/
    destroyed: function () {
        this.onUnload();
    }
});
var _page = function (_option) {
    if (typeof _option != "undefined") _.extend(pageOption, _option);
    var methodArr = ["onLoad", "onReady", "onShow", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "setData"];
    var methods = {};
    for (var k in pageOption) {
        if (_.indexOf(methodArr, k) == -1) {
            methods[k] = pageOption[k];
        }
    }
    return new Weix({
        template: pageOption.template,
        data: pageOption.data,
        watch: pageOption.watch,
        methods: methods
    });
};
export default _page;