// miniprogram/pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: 'hello world',
    userInfo: {
      nickName: '',
      avatarUrl: ''
    },
    tabs: [
      {
        icon: 'iconyouhuiquan',
        text: '优惠券'
      },
      {
        icon: 'iconyouhuiquan',
        text: '联系客服'
      },
      {
        icon: 'iconyouhuiquan',
        text: '我的权益'
      },
      {
        icon: 'iconyouhuiquan',
        text: '我的积分'
      },
      {
        icon: 'iconyouhuiquan',
        text: '积分商城'
      },
      {
        icon: 'iconyouhuiquan',
        text: '抽奖记录'
      },
      {
        icon: 'iconyouhuiquan',
        text: '检测报告'
      },
      {
        icon: 'iconyouhuiquan',
        text: '相关协议'
      },
      {
        icon: 'iconyouhuiquan',
        text: '隐私政策'
      },
      {
        icon: 'iconyouhuiquan',
        text: '关于我们'
      },
      {
        icon: 'iconyouhuiquan',
        text: '历史记录'
      },
    ]
  },
  login() {
    let self = this;
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo);
              self.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  goTo(options) {
    console.log('options',options);
    let url = options.target.dataset.url;
    wx.navigateTo({
      url: `../../pages/child/index?url=${url}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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