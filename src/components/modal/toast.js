import _tpl from './toast.html'

export default {
    name:"toast",
    data: {
        duration: 0,
        show: false,
        title: '加载中...',
        loading: true
    },
    template: _tpl,
};