import _tpl from './loading.html'

module.exports =  {
    name:"loading",
    data: {
        duration: 0,
        show: false,
        title: '加载中...',
        loading: true
    },
    template: _tpl,
};