// pages/news/news.js

import {postList} from "../../data/data.js"
console.log(postList);

Page({

    /**
     * 页面的初始数据
     */
    data: {
        a:"2020LPL夏季赛季后赛观赛指南"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log('onLoad');
        let content =   [{
            title: "2020LPL夏季赛季后赛观赛指南",
            content: "8月9号，LPL常规赛收官之战结束，在事关季后赛轮次的比赛中关键对局中，SN战胜了FPX，为本赛季常规赛画上句号。进入季后赛的战队依次为，TES、JDG、IG、SN、V5、LGD、WE、FPX",
            imgSrc: "/images/lpl.png",
            reading: 102,
            detail: "8月9号，LPL常规赛收官之战结束，在事关季后赛轮次的比赛中关键对局中，SN战胜了FPX，为本赛季常规赛画上句号。进入季后赛的战队依次为，TES、JDG、IG、SN、V5、LGD、WE、FPX。既有传统四强，又有新崛起的黑马。本文主要是从上路的大改动展开，引发对所有其他的影响。牵一发而动全身，上路一旦回归carry上单版本，对野区和中路的影响是显而易见的。而下路在艾希大砍一刀之后，女警的过于强势，使她只能出现在BAN位上，因此主流下路还是会回归功能性下路英雄。由此，可以对应各位选手的英雄池，对应各支战队的战术储备，漫长的季后赛，考验的就是各队适应版本的能力。",
            collection: 92,
            dateTime: "24小时前",
            headImgSrc: "/images/lpl.png",
            author: "猫是猫的猫",
            date: "Nov 20 2020",
            avatar: "/images/avatar/5.png",
            postId: 0
        },{
            date: "Sep 18 2020",
            title: "正是虾肥蟹壮时",
            imgSrc: "/images/post/crab.png",
            avatar: "/images/avatar/1.png",
            content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
            reading: "112",
            collection: "96",
            headImgSrc: "/images/post/crab.png",
            author: "林白衣",
            dateTime: "24小时前",
            detail: "菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的荻芦”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，壳凸红脂块块香”；在《世说新语》里，晋毕卓更是感叹“右手持酒杯，左手持蟹螯，拍浮酒船中，便足了一生矣。”漫漫人生长路，美食与爱岂可辜负？于是作为一个吃货，突然也很想回味一下属于我的味蕾记忆。记忆中的秋蟹，是家人的味道，弥漫着浓浓的亲情。\n\n是谁来自山川湖海，却囿于昼夜，厨房与爱？ 是母亲，深思熟虑，聪明耐心。吃蟹前，总会拿出几件工具，煞有介事而乐此不疲。告诉我们螃蟹至寒，需要佐以姜茶以祛寒，在配备的米醋小碟里，亦添入姜丝与紫苏，前者驱寒后者增香。泡好菊花茶，岁月静好，我们静等。",
            postId: 1
        }]
        this.setData({
            posts:content
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // console.log('onReady');
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // console.log('onShow');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        // console.log('onHide');
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        // console.log('onUnload');
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})