// pages/pages/goods_list/goods_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thumb_list:[
      '//m.360buyimg.com/mobilecms/s150x150_jfs/t26707/266/1124578765/416767/27d4333a/5bc1a9b9Na26ec5d2.jpg!q70.jpg.dpg',
      '//img12.360buyimg.com/mobilecms/s200x200_jfs/t13804/159/2066981344/272858/5b9f4558/5a31f5e4N284ce5e1.jpg!q70.dpg',
      '//img14.360buyimg.com/mobilecms/s200x200_jfs/t1/20394/12/2067/225549/5c18b849E9deb61b0/bfa32998fd190d2a.jpg!q70.dpg',
      '//img20.360buyimg.com/mobilecms/s200x200_jfs/t1/28993/24/1285/35071/5c10cab5E62eeefb8/fa660145e3bb5c50.jpg!q70.dpg',
    ],
    showSkeleton: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    setTimeout(() => {
      that.setData({
        showSkeleton: false
      })
    }, 2000)
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