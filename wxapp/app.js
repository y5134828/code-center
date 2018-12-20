//app.js

App({
  alert: function (msg) {
    wx.showModal({
      content: msg,
      showCancel: false,
    });
  },
  confirm: function (msg, success) {
    wx.showModal({
      content: msg,
      showCancel: true,
      success: success
    });
  },
  showToast: function (msg, icon) {
    if (!icon) { icon = 'success'; }
    wx.showToast({
      title: msg,
      icon: icon,
      duration: 1000
    })
  },
  //显示加载中
  showloading: function (msg) {
    wx.showLoading({
      title: msg,
      icon: 'loading',
      duration: 800
    })
  },
  //隐藏加载中效果
  hideloading: function (msg) {
    wx.hideLoading()
  },
  config: {
    //接口host
    host: 'https://api.xiaoniaoapp.com/',
    //版本
    version: "1.0",
    //app名称
    channel: '小程序代码库',
    //appid
    key: "wxf04faac101f69793",
    uid: 294 //企业展示类小程序需要修改的参数
  },
  apiList: {
    login: '/api/wxapp/CustomerSell/login',//登录
    sendmobilecode: '/api/wxapp/public/sendmobilecode',//发送短信验证借口
    upload_asset: '/api/wxapp/CustomerSell/upload_asset',//图片上传接口
    find_activity_cases: '/api/wxapp/CustomerSell/find_activity_cases',//查找模版数据
  },
  apiGet: function (url, data, callback) {
    wx.request({
      url: this.config.host + url,
      data: data,
      method: 'GET',
      dataType: 'json',
      header: { 'content-type': 'application/json;charset=UTF-8' },
      success: function (res) {
        callback(res.data)
      },
      fail: function (res) {
      },
      complete: function (res) {
      }
    })
  },
  apiPost: function (url, data, callback) {
    wx.request({
      url: this.config.host + url,
      data: data,
      method: 'POST',
      dataType: 'json',
      header: { 'content-type': 'application/json;charset=UTF-8' },
      success: function (res) {
        callback(res.data)
      },
      fail: function (res) {
      },
      complete: function (res) {
      }
    })
  },
  getUserInfo: function (cb) {
    var that = this;
    var userInfo = wx.getStorageSync('userInfo');
    this.globalData.userInfo = userInfo;
    var token = wx.getStorageSync(this.config.key + '_token');
    var openid_id = wx.getStorageSync(this.config.key + '_openid');
    if (userInfo && token && openid_id) {
      typeof cb == "function" && cb(that.globalData.url)
    } else {
      //调用登录接口
      wx.login({
        fail: function (fail_res) {
          wx.showModal({
            content: "您点击了拒绝授权，将无法正常使用,请稍后再试!",
            showCancel: false
          })
          return false;
        },
        success: function (res1) {
          wx.getUserInfo({
            fail: function (res1) {
              wx.showModal({
                content: "授权失败，请稍后再试!",
                showCancel: false
              })
            },
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              wx.setStorageSync('userInfo', res.userInfo)
              wx.request({
                url: 'https://api.xiaoniaoapp.com/api/wxapp/public/login',
                data: {
                  appId: 'wxf04faac101f69793',
                  appSecret: 'ad90bf213817d1f674e82afeeac047ba',
                  code: res1.code,
                  iv: res.iv,
                  encrypted_data: res.encryptedData,
                  iv: res.iv,
                  raw_data: res.rawData,
                  signature: res.signature
                },
                success: function (res2) {
                  if (res2.data.code == 1) {
                    wx.setStorageSync(that.config.key + '_token', res2.data.data.token)
                    wx.setStorageSync(that.config.key + '_openid', res2.data.data.openid)
                    typeof cb == "function" && cb(that.globalData.url)
                  }

                  // that.globalData.token = res2.data.data.token

                }
              })
            }
          })
        }
      });
    }
  },
  globalData: {
    mobileArr: '',
    usernameArr: ''
  },
})