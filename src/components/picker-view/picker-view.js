import _tpl from './picker-view.html';
import weui from "weui.js";

export default {
    name: 'picker-view',
    template: _tpl,
    props : {

        //选择器
        mode : {
            type : String,
            default : 'selector'
        },
        //普通选择器
        range : {
            type : Array,
            default : function () {
                return [];
            }
        },

        // data 特有,选择器颗粒
        fields : {
            type : String,
            default : 'day'

        },
        //开始时间 time和data
        start : {
            type : String,
            default : function () {
                let type;
                switch (this.mode) {
                    case 'time' :
                        type = '00:00';//开始默认时间
                        break;
                    case 'date' :
                        type = '1977-01-01';//开始默认日期
                        break;
                }
                return type;
            }
        },
        end : {
            type : String,
            default : function () {
                let type,now = new Date();

                switch (this.mode) {
                    case 'time' :
                        type = '23:59';//截至默认时间
                        break;
                    case 'date' :
                        type = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();//截至默认日期
                        break;
                }
                return type;
            }
        },

        //3者默认
        value : {
            type : [Number, String],
            default : function () {
                let type,now = new Date();
                switch (this.mode) {
                    case 'selector' :
                        type = 0;//下标
                        break;
                    case 'time' :
                        type = '0:0';//选中的时间
                        break;
                    case 'date' :
                        type = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate(); //选中的日期
                        break;
                }
                return type;
            }
        },
        disabled : {
            type : Boolean,
            default : false
        }

    },
    data  : function () {

        return {

            //mode方法
            funMode : {
                'selector' : this.openSelector,
                'time'     : this.openTime,
                'date'     : this.openDate
            }
        }
    },
    methods : {
        thisCall : function () {
            this.funMode[this.mode]();
        },
        openSelector : function () {

            let that = this;

            //是否禁用
            if(!this.display) {

                weui.picker( that.range, {

                    defaultValue: [that.value], //默认选择项
                    onChange: function (result) {
                    },
                    onConfirm: function (result) {
                        that.$emit('bindchange', result);//响应回调函数
                    }
                });
            }

        },
        openTime : function () {

            //是否禁用
            if(!this.display) {

                let TimeArr   = [], //小时数组
                    that      = this,
                    TimeStart = {   // 开始时间
                        hour  : parseInt(this.start.split(':')[0], 10),
                        min   : parseInt(this.start.split(':')[1], 10)
                    },
                    TimeEnd   = {   // 结束时间
                        hour : parseInt(this.end.split(':')[0], 10),
                        min   : parseInt(this.end.split(':')[1], 10)
                    };

                /*
                 *  i 开始小时
                 *  j 记录当前index
                 */
                for(let i = TimeStart.hour; i<=TimeEnd.hour; i++) {

                    let Min = [];

                    //如果起始小时 == 结束小时
                    if( TimeStart.hour == TimeEnd.hour ) {

                        // 起止分钟 到 结束分钟
                        Min = this.forTime( TimeStart.min, TimeEnd.min );
                    }else {

                        //如果当前小时 = 起始小时
                        if( i == TimeStart.hour ) {

                            Min = this.forTime( TimeStart.min, 59 );
                        }else if( i == TimeEnd.hour ){

                            //如果当前小时 = 结束小时
                            Min = this.forTime( 0, TimeEnd.min );
                        }else {
                            Min = this.forTime( 0, 59 );
                        }
                    }

                    TimeArr.push({
                        label : i+'时',
                        value : i,
                        children : Min
                    })
                }

                //默认时间参数
                let defaultHouse = parseInt( this.value.split(':')[0], 10),
                    defaultMin   = parseInt( this.value.split(':')[1], 10);

                weui.picker(TimeArr, {
                    depth: 2,
                    defaultValue: [defaultHouse, defaultMin],
                    onChange: function (result) {
                    },
                    onConfirm: function (result) {
                        that.$emit('bindchange', result);//响应回调函数
                    },
                    id: 'timeId'
                });
            }// end 禁用 display


        },
        openDate : function () {

            //是否禁用
            if(!this.display) {

                let that     = this,
                    TS       = { // 起始日期
                        Year : parseInt( this.start.split('-')[0] ),
                        Mon  : parseInt( this.start.split('-')[1] ),
                        Day  : parseInt( this.start.split('-')[2] )
                    },
                    TE       = { // 结束日期
                        Year : parseInt( this.end.split('-')[0] ),
                        Mon  : parseInt( this.end.split('-')[1] ),
                        Day  : parseInt( this.end.split('-')[2] )
                    },
                    YearArr  = [], // 用于储存结果集
                    Field    = { //用于取fields等级
                        'day'   : 3,
                        'month' : 2,
                        'year'  : 1
                    };

                // i = 当前年
                for(let i = TS.Year; i <= TE.Year; i++) {
                    let MonArr = []; // 用于储存月份，月份在下一集合中添加日

                    //至少为月
                    if( Field[this.fields] > 1 ) {
                        MonArr = this.forMonth( i, TS, TE);
                    }

                    YearArr.push({
                        label    : i+'年',
                        value    : i,
                        children : MonArr
                    })
                }

                weui.picker(YearArr, {
                    depth: 3,
                    defaultValue: [this.value.split('-')[0], this.value.split('-')[1], this.value.split('-')[2]],
                    onChange: function (result) {
                    },
                    onConfirm: function (result) {
                        that.$emit('bindchange', result);//响应回调函数
                    },
                    id: 'dateId'
                });
            }// end display

        },
        forMonth : function (year, start, end) {
            let Mon    = [],
                before = 1, // 起始月
                after  = 12, // 截至月
                Field    = { //用于取fields等级
                    'day'   : 3,
                    'month' : 2,
                    'year'  : 1
                };

            //0.0 如果起始年 = 截至年, 起始月到截至月
            if(start.Year == end.Year) {
                before = start.Mon;
                after  = end.Mon;
            }else {

                //1.0 当前年 = 起始年
                if(year == start.Year) {
                    before = start.Mon;
                    after  = 12;
                }
                //2.0 当前年 = 截至年
                else if(year == end.Year ) {
                    before = 1;
                    after  = end.Mon;
                }
                //3.0 year位于 起始年与截至年之间
                else {
                    before = 1;
                    after  = 12;
                }
            }

            // i 当期月
            for(let i = before; i <= after; i++) {
                let DayArr = [];

                //至少为day
                if( Field[this.fields] > 2 ) {
                    DayArr = this.forDay(i, year, start, end)
                }

                Mon.push({
                    label    : i+'月',
                    value    : i,
                    children : DayArr
                })
            }
            return Mon;
        },
        forDay : function (mon ,year, start, end) {
            let largMon  = [1, 3, 5, 7, 8, 10, 12], // 31天
                smallMon = [4, 6, 9, 11],
                DayArr   = [],
                largeDay = 31,
                smallDay = 1;

            //设置最大日期
            if(largMon.indexOf(mon) == -1) {

                if(smallMon.indexOf(mon) == -1) {

                    // 2月
                    if(year%4 == 0) {
                        largeDay = 29
                    }else {
                        largeDay = 28
                    }
                }else {
                    largeDay = 30;
                }
            }

            // 就一年
            if( start.Year == end.Year) {
                console.log('就一年');

                // 起始月 = 结束月
                if(start.Mon == end.Mon){
                    smallDay = start.Day;
                    largeDay = end.Day;
                }
                else if(mon == start.Mon) {
                    console.log('其实月'+start.Day);
                    smallDay = start.Day;

                    // 结束月
                }else if(mon == end.Mon) {
                    console.log('结束'+end.Day);
                    largeDay = end.Day;
                }


                // 不仅仅一年
            }else {

                // 判断 今年 是否起始年
                if(year == start.Year) {

                    //是否 起始年的 起始月
                    if(mon == start.Mon) {
                        smallDay = start.Day
                    }

                    // 判断 今年 是否截至年
                }else if (year == end.Year) {

                    //是否 截至年的 截至月
                    if(mon == end.Mon) {
                        largeDay = end.Day
                    }
                }
            }

            for(let i = smallDay; i <= largeDay; i++) {
                DayArr.push({
                    label    : i+'日',
                    value    : i
                })
            }

            return DayArr;
        },
        forTime : function (start, end) {
            let Min = [];
            for (let i = start; i <= end; i++ ) {
                Min.push({
                    label : i+'分',
                    value : i
                })
            }
            return Min;
        }

    }
};
