import _tpl from './switch-v.html';

export default {
    template: _tpl,
    props : {
        checked    : Boolean,
        bindchange : Function,
        color      : null
    },
    onReady: function () {
        let nowColor;

        if( typeof this.checked != 'boolean') {
            throw new Error('checked请传入ture或false');
        }

        //创建colors保存颜色
        if(!this.color) {
            this.colors = '#04BE02';//赋予默认颜色
        }else {
            this.colors = this.color;//否则获取颜色
        }

        //初始化颜色
        if(this.checked) {
            nowColor = this.colors;
        }else {
            nowColor = '#DFDFDF';
        }

        //添加check属性和iColor属性
        this.check = this.checked;
        this.iColor = {
            backgroundColor : nowColor,
            borderColor     : nowColor
        };

    },
    watch: {
        check : function () {

            //响应事件
            this.$emit('bindchange');

            if(this.check) {
                this.iColor.backgroundColor = this.colors;
            }else{
                this.iColor.backgroundColor = '#DFDFDF';
            }
            this.iColor.borderColor  = this.iColor.backgroundColor
        }
    },
    methods: {
        refresh: function () {

        }
    }
};
