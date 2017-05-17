import _tpl from './loading.html'

export default {
    name:"loading",
    data: {
        duration: 0,
        show: false,
        title: '加载中...',
        loading: true
    },
    template: _tpl,
};