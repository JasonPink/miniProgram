// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    msg: 'world',
    userInfo: {
      nickName: '',
      avatarUrl: ''
    },
    sex: 1,
    list: [
      {
        value: 1,
        label: 'Javascript'
      },
      {
        value: 2,
        label: 'HTML'
      },
      {
        value: 3,
        label: 'Css'
      }
    ],
    objectArray: [
      {id: 5, unique: 'unique_5'},
      {id: 4, unique: 'unique_4'},
      {id: 3, unique: 'unique_3'},
      {id: 2, unique: 'unique_2'},
      {id: 1, unique: 'unique_1'},
      {id: 0, unique: 'unique_0'},
    ]
  },
  switch: function(e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function(e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{id: length, unique: 'unique_' + length}].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  send() {
    wx.showToast({ // 显示Toast

      title: '已发送',

      icon: 'success',

      duration: 1500

    })
  },
  model() {
    wx.showModal({

      title: '标题',

      content: '告知当前状态，信息和解决方法',

      confirmText: '主操作',

      cancelText: '次要操作',

      success: function(res) {

        if (res.confirm) {

          console.log('用户点击主操作')

        } else if (res.cancel) {

          console.log('用户点击次要操作')

        }

      }

    })
  },
  onPullDownRefresh: function() { //下拉刷新

    // 用户触发了下拉刷新操作

    // 拉取新数据重新渲染界面

    // wx.stopPullDownRefresh() // 可以停止当前页面的下拉刷新。

  },

  onReachBottom: function() { //上拉触底

    // 当界面的下方距离页面底部距离小于100像素时触发回调

  },
  tapLogin: function() {

    wx.login({

      success: function(res) {

        if (res.code) {

          wx.request({

            url: 'https://test.com/login',

            data: {

              username: 'zhangsan', // 用户输入的账号

              password: 'pwd123456', // 用户输入的密码

              code: res.code

            },

            success: function(res) {

              // 登录成功

              if (res.statusCode === 200) {

               console.log(res.data.sessionId)// 服务器回包内容

              }

            }

          })

        } else {

          console.log('获取用户登录态失败！' + res.errMsg)

        }

      }

    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({

    //   url: 'https://test.com/getinfo',
    
    //   success: function(res) {
    
    //     console.log(res)// 服务器回包信息
    
    //   }
    
    // });
    let self = this;
    // 查看是否授权
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
  bindGetUserInfo (e) {
    console.log(e.detail.userInfo)
  },
  scan() { //微信扫一扫
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  show() {
    wx.previewImage({
      current: 'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
      urls: [ // 所有图片的URL列表，数组格式
        'https://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg',
        'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
        'https://img1.gtimg.com/10/1048/104857/10485729_980x1200_0.jpg'
      ],
      success: function(res) {
        console.log(res)
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