import _tpl from './switch-v.html';

export default {
    name: 'switch-v',
    template: _tpl,
    props : {
        checked    : {
            type   : Boolean,
            default: false
        },
        color      : {
            type   : String,
            default: '#04BE02'
        }
    },
    data:function () {
        let nowColor;

        if(this.checked) {
            nowColor = this.color;
        }else {
            nowColor = '#DFDFDF';
        }

        return {
            check  : this.checked,
            iColor : {
                backgroundColor : nowColor,
                borderColor     : nowColor
            }
        };
    },
    watch: {
        check : function () {

            //响应事件
            this.$emit('bindchange',this);

            if(this.check) {
                this.iColor.backgroundColor = this.color;
            }else{
                this.iColor.backgroundColor = '#DFDFDF';
            }
            this.iColor.borderColor  = this.iColor.backgroundColor
        }
    }
};
