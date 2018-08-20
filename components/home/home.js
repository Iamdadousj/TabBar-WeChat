// components/home/home.js
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
    swiperCon: {
      imgUrls: [
        'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
        'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg',
        'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'
      ],
      indicatorDots: true, //是否显示面板指示点
      indicatorColor: "rgba(0, 0, 0, .3)", //指示点颜色
      indicatorActiveColor: "#007aff", //当前选中的指示点颜色
      circular: true, //是否采用衔接滑动
      interval: 5000, //自动切换时间间隔
      duration: 1000, //滑动动画时
      currentSwiper: 0,
      autoplay: true
    }

  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperChange: function (e) {
      var currentSwiper=swiperCon.currentSwiper
      this.setData({
        currentSwiper: e.detail.current
      })
    },
    onShow: function() {
      let self = this;
      wx.createSelectorQuery().select('.static-news').boundingClientRect(function(rect) {
        self.setData({
          fixTop: rect.top,
        })
      }).exec()
    },
    scroll: function(e) {
      let self = this;
      let top = e.detail.scrollTop;
      self.setData({
        scrollTop: top
      });
    },
  }
})