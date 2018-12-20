//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  
  },
  onLoad: function () {

  },
  /****案例DEMO */
  /**
   * 上传图片案例
   */
  upload_img:function(){
    wx.navigateTo({
      url: '../../pages/upload_img/upload_img',
    })
  },
  /****组件 */
  click_model:function(){
    wx.navigateTo({
      url: '../../pages/click_model/click_model',
    })
  },
  change_tab: function () {
    wx.navigateTo({
      url: '../../pages/change_tab/change_tab',
    })
  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
