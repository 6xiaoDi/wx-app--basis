// pages/news/news.js

import {postList} from '../../data/data.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        a:"2020LPL夏季赛季后赛观赛指南"
    },

    onMaxImage:function (event) {
        console.log('onMaxImage');
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            postList
        });
    },

    onToDetail:function (event){
        const pid = event.currentTarget.dataset.postId
        wx.navigateTo({
          url: '/pages/news-detail/news-detail?pid=' + pid,
        })
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