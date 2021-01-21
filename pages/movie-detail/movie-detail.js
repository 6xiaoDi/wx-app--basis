// pages/movie-detail/movie-detail.js
import {convertToCastString} from '../../utils/util.js'
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        movie:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const mid = options.mid
        wx.request({
            url: app.gBaseUrl + 'subject/' + mid,
            success:(res)=>{
                // console.log(res.data)
                this.processMovieData(res.data)
                // this.setData({
                //     movie:res.data
                // })
            }
          })
    },

    onViewPost(event){
        wx.previewImage({
          urls: [this.data.movie.images.large],
        })
    },

    processMovieData(movie){
        const data = {}
        data.directors = convertToCastString(movie.directors)     // 导演
        data.casts = convertToCastString(movie.casts)             // 影人
        data.image = movie.images.large                           // 图片
        data.title = movie.title                                  // 电影名
        data.subtitle = movie.countries[0]+'·'+movie.year         // 电影副标题
        data.wishCount = movie.wish_count                         // 喜欢人数
        data.commentsCount = movie.comments_count                 // 评论数
        data.rating = movie.rating.stars/10                       // 星级
        data.average = movie.rating.average                       // 评分
        data.genres = movie.genres.join('、')                     // 电影类型
        this.setData({
          movie:data
        })
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