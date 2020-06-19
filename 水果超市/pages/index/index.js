//index.js
//获取应用实例

Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3500,
    duration: 1200,
    circular: true,
    news: {
      autoplay: true,
      interval: 4000,
      duration: 1000,
      circular: true,
      vertical: false,
      content: [
        '第一天', '第二天', '第三天'
      ],
      image: '../icon/TransformationIcon/新闻.png'
    },
    ShowCommodity: {
       CommodityID:[123,124,125,126],
      image: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
      title: ["大苏打萨达世界各地","465","489","撒打发撒发达"],
       SelfOperatedMark:[false,true,true,false],
       commodityActivity:[0,1,2,3]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  show: function(e) {
    console.log(e.target.dataset.src);
  },
  search: function(e) {
    console.log(e);
  },
  searchText: () => {
    console.log('获取焦点');
  }
})