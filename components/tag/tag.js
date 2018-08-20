// components/tag/tag.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    fixTop: '', //区域离顶部的高度
    scrollTop: 0, //滑动条离顶部的距离,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onShow: function () {
      let self = this;
      wx.createSelectorQuery().select('.static-news').boundingClientRect(function (rect) {
        self.setData({
          fixTop: rect.top,
        })
      }).exec()
    },
    scroll: function (e) {
      let self = this;
      let top = e.detail.scrollTop;
      self.setData({
        scrollTop: top
      });
    },
  }
})
