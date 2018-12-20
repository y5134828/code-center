// pages/component/tab/tab.js
var app = getApp();
Component({
  options:{
    multipleSlots:true
  },
  properties:{
    tabs:{
      type: Object,
      value: []
    },
    url:{
      type:'String',
      value:''
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    currentTabsIndex:0
  },
  methods:{
    //外部方法 
    changetype:function(){
      let that = this
      let type = this.data.type
      return type;
      // 暂无法解决 请求并回调执行顺序问题 
      // let url = this.data.url
      // app.apiGet(app.apiList[url], { type: type},function(res){
      //   if(res.code){
      //     return res;
      //   }else{
      //     return res;
      //   }
      // })
    },
    //内部方法，改变点击的值
    _onTabChange:function(e){
      this.setData({
        currentTabsIndex: e.currentTarget.dataset.index,
        type: e.currentTarget.dataset.type
      })
      this.triggerEvent("onTabChange")// 在父组件中调用 bind:onTabChange 触发  _onTabChange 方法
    }
  }
})