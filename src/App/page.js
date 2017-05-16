/*
 * app.js v0.1.9
 * (c) 2017 wangli
 * Released under the MIT License.
 */
/*创建APP页面*/
import Axios from 'axios';
import _ from 'lodash';

var _vueConfig = {
    name: "page",
    data: {
        animName: "",
        show: true,
        hlg: 0,
    },
    watch: {},
    computed: {},
    /*在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。*/
    beforeCreate: function () { },
    /*实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。*/
    created: function () {
        if(this.$parent){
            this.hlg = this.$parent.history.length;
        }
    },
    /*在挂载开始之前被调用：相关的 render 函数首次被调用。*/
    beforeMount: function () { },
    /*el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。*/
    mounted: function () { },
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
    },
    /*Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。*/
    destroyed: function () { }
};

var _weixConfig = {
    name: "page",
    template: "<div><slot></slot></div>",
    data: {},
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
        var that = this;
        _.each(_obj, function (val, key) {
            that[key] = val;
        });
    },
    /*过渡动画页面进入后*/
    enterCancelled: function () { },
    /*页面离开过渡动画之前*/
    leaveBefore: function () { },
    /*过渡动画页面离开后*/
    leaveCancelled: function () { },
};

export default function (_option) {
    var _vueCfg = _.cloneDeep(_vueConfig);
    var _wxCfg = _.cloneDeep(_weixConfig);
    if (typeof _option != "undefined") {
        _.extend(_wxCfg, _option);
    }
    //提取所有非微信方法到methods对象
    var unMethodArr = ["onLoad", "onReady", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "data", "watch"];
    var methods = {};
    for (var k in _wxCfg) {
        if (_.indexOf(unMethodArr, k) == -1) {
            methods[k] = _wxCfg[k];
        }
    }
    var _vueCfgData = _.cloneDeep(_vueCfg.data);
    _.extend(_vueCfgData, _wxCfg.data);
    //处理计算数据data对象
    _vueCfg.data = function () {
        return _vueCfgData;
    }
    //模板处理
    var _template = "";
    _template += "<div class='cxPage animated' v-if='show'><slot>";
    _template += _wxCfg.template;
    _template += "</slot></div>";
    _template += "";
    _vueCfg.template = _template;

    _vueCfg.computed = {
        name: function () {
            return _wxCfg.name;
        }
    }
    _vueCfg.name = _wxCfg.name;
    _vueCfg.beforeMount = _wxCfg.onLoad;
    _vueCfg.mounted = _wxCfg.onReady;
    _vueCfg.destroyed = _wxCfg.onUnload;
    _.assign(_vueCfg.watch, _wxCfg.watch);
    _vueCfg.methods = methods;
    return _vueCfg;
};