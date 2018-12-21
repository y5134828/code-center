//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  
  },
  onLoad: function () {

  },
  /****常用布局 */
  /**
   * 商品列表
   */
  goods_list: function () {
    wx.navigateTo({
      url: '../pages/goods_list/goods_list',
    })
  },
  /****案例DEMO */
  /**
   * 上传图片案例
   */
  upload_img:function(){
    wx.navigateTo({
      url: '../demo/upload_img/upload_img',
    })
  },
  /****组件 */
  click_model:function(){
    wx.navigateTo({
      url: '../demo/click_model/click_model',
    })
  },
  change_tab: function () {
    wx.navigateTo({
      url: '../demo/change_tab/change_tab',
    })
  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
