//app.js
var api = require('./utils/api.js')

App({
      api: api,
      onLaunch: function() {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
      },
      login: function() {
          wx.login({
                success: res => {
                  if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
      
                      success: res => {
                        // 可以将 res 发送给后台解码出 unionId
                        this.globalData.userInfo = res.userInfo

                        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                        // 所以此处加入 callback 以防止这种情况
                        if (this.userInfoReadyCallback) {
                          this.userInfoReadyCallback(res)
                        }
                      },
                      fail: function() {
                        //获取用户信息失败后。请跳转授权页面
                        wx.showModal({
                          title: '警告',
                          content: '尚未进行授权，请点击确定跳转到授权页面进行授权。',
                          success: res => {
                            if (res.confirm) {
                              console.log('用户点击确定')
                              wx.navigateTo({
                                url: '../tear/index'
                              })
                            }
                          }
                        })
                        // 弹窗
                      }
                      // fail
                    })
                  }
                  }, fail: err => {
                    console.log(err)
                  }
                })
      }
  })
  