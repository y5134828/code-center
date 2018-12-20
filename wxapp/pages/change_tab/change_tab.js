// pages/change_tab/change_tab.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      { 'type': 'weihelp', 'name': '助力' },
      { 'type': 'weiprice', 'name': '砍价' },
      { 'type': 'bigwheel', 'name': '转盘' },
      { 'type': 'groupbuy', 'name': '团购' },
      { 'type': 'coupon', 'name': '优惠卷' },
      { 'type': 'cashcoupon', 'name': '代金卷' },
      { 'type': 'coursejoin', 'name': '报名' },
      { 'type': 'fcoursejoin', 'name': '分销报名' },
      { 'type': 'package', 'name': '福包' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.tab = this.selectComponent("#tab");
    this._changetype();
  },
  _changetype:function(e){
    var type = this.tab.changetype();
    if (!type){
      type = this.data.tabs[0]['type']
    } 
    app.apiGet(app.apiList.find_activity_cases, { type: type},function(res){
      if(res.code){
        app.showToast(res.msg)
      }else{
        app.showToast(res.msg, 'none')
      }
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