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
        _postsCollected:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const postData = postList[options.pid]
        this.data._pid = options.pid
        const postCollected = wx.getStorageSync('posts_collected')
        this.data._postsCollected = postCollected;
        let collected = postCollected[this.data._pid]

        if (collected === undefined) {
            collected = false;
        }

        this.setData({
            postData,
            collected
        })
    },

    async onShare(event) {
        let res = await wx.showActionSheet({
          itemList: ['分享到QQ','分享到微信','分享到微博'],
        })
        console.log(res);
    },

    async onCollect(event) {
        // 默认未收藏
        // const postsCollected = this.data._postsCollected;
        // postsCollected[this.data._pid] = !this.data.collected;
        // this.setData({
        //     collected:!this.data.collected
        // })

        // wx.setStorageSync('posts_collected', postsCollected);

        // wx.showToast({
        //   title: this.data.collected? '收藏成功' : '取消收藏',
        //   duration:3000
        // })

        const res = await wx.showModal({
          title:"这是一个提示框",
          //   cancelText:'A',
          //   confirmText:'B'
            //   success(res) {
            //       console.log(res)
            //   }
        })

        if (res.confirm) {
            const postsCollected = this.data._postsCollected;
            postsCollected[this.data._pid] = !this.data.collected;
            this.setData({
                collected:!this.data.collected
            })
    
            wx.setStorageSync('posts_collected', postsCollected);
        }
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