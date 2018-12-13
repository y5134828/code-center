// pages/component/model/model.js
Component({
  options:{ 
    multipleSlots:true //允许多组件
  },
  properties:{  //父组件中可以传值
    title:{
      type:String,
      value:'标题'
    },
    content:{
      type: String,
      value: '弹窗内容'
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    confirmText: {
      type: String,
      value: '确定'
    }
  },
  data: {  //组件中默认的数据
    isShow:false
  },
  methods:{
    onLoad(){
     
    },
    hideDialog(){
      this.setData({
        isShow:!this.data.isShow
      })
    },
    showDialog(){
      this.setData({
        isShow: !this.data.isShow
      })
    },
    _cancelEvent() { //触发取消回调 
      wx.showToast({
        title: '取消',
        icon:'none'
      })
      this.triggerEvent("cancelEvent")// 在父组件中调用 bind:cancelEvent 触发  _cancelEvent 方法
    },
    _confirmEvent() { //触发成功回调 
      wx.showToast({
        title: '确定',
        icon: 'success'
      })
      this.triggerEvent("confirmEvent");
    } 
  }
})