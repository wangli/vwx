import { Page, App } from "vwx";
import tpl from "./scrollview.html";
module.exports = Page({
    name: "scrollview99",
    template: tpl,
    data: {
        list: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20],
        loading:false
    },
    computed:{
        list2:function(){
            console.log(this);
            return this;
        }
    },
    onReady: function () {
    },
    scrolltop:function(){
        this.loading=true;
        setTimeout(()=>{
            this.loading=false
        },2000)
    },
    onscroll: function () {
        console.log("ttttttttttt");
    },
    goback: function () {
        wx.redirectTo({url:"switchview"});
    }
});