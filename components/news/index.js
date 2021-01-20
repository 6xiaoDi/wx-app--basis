Component({
    /**
     * 组件的属性列表
     */
    properties: {
        res:Object
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        onToDetail:function (event){
            const pid = event.currentTarget.dataset.postId
            wx.navigateTo({
              url: '/pages/news-detail/news-detail?pid=' + pid,
            })
        },
    }
})
