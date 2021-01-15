// pages/news-detail/news-detail.js

import {postList} from '../../data/data.js'
const app = getApp()
console.log(app);

Page({

    /**
     * 页面的初始数据
     */
    data: {
        postData:{},
        collected:false,
        _pid:null,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const postData = postList[options.pid]
        this.data._pid = options.pid
        const postCollected = wx.getStorageSync('posts_collected')
        const collected = postCollected[this.data._pid]

        this.setData({
            postData,
            collected
        })
    },

    onCollect(event) {
        // 默认未收藏
        const postsCollected = {}
        postsCollected[this.data._pid] = !this.data.collected;
        this.setData({
            collected:!this.data.collected
        })

        wx.setStorageSync('posts_collected', postsCollected);
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

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