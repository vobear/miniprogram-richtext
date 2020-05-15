
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  onEditorReady() {
    wx.createSelectorQuery().select('#editor').context(res => {
      this.editorCtx = res.context;
      this.editorCtx.setContents({
        html: app.data.richTextContents,
        success: res => {
          console.log('[setContents success]')
        }
      })
    }).exec()
  }
})