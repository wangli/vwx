import _tpl from './toast.html'

module.exports =  {
    name:"toast",
    data: {
        duration: 2000,
        show: false,
        title: '......',
        loading: true
    },
    template: _tpl,
};