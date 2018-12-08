// pages/upload_img/upload_img.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    upload_thumbs: [],//活动图片
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 上传活动图
   */
  upload_img: function (e) {
    let that = this;
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        for (var i = 0; i < tempFilePaths.length; i++) {
          wx.uploadFile({
            url: app.config.host + app.apiList.upload_asset,
            filePath: tempFilePaths[i],
            name: 'file',
            formData: {
              'user': 'test'
            },
            success: function (res1) {
              // debugger;
              // console.log(res1);
              var res1 = JSON.parse(res1.data)
              if (res1.code) {
                if (that.data.upload_thumbs.length < 5) {
                  let activity_photo = that.data.upload_thumbs;
                  activity_photo = activity_photo.concat(res1.data.preview_url);
                  that.setData({ upload_thumbs: activity_photo });
                } else {
                  app.showToast('最多允许五张图片', 'none');
                  return false;
                }
              }
              console.log(that.data.upload_thumbs)
            }
          })
        }
      }
    })
  },
  /**
   * 上传封面图
   */
  upload_thumb: function () {
    let that = this;
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: app.config.host + app.apiList.upload_asset,
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res1) {
            var res1 = JSON.parse(res1.data)
            if (res1.code) {
              that.setData({ thumb: res1.data.preview_url });
            }
          }
        })
      }
    })
  },
  /*删除图片 */
  splice: function (e) {
    var img = this.data.upload_thumbs;
    var number = e.currentTarget.dataset.number;
    img.splice(number, 1);
    this.setData({
      upload_thumbs: img,
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