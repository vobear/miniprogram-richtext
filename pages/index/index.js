const app = getApp();
let richText = null;  //富文本编辑器实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    readOnly: false, //编辑器是否只读
    placeholder: '开始编辑吧...',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  // 编辑器初始化完成时触发，可以获取组件实例
  onEditorReady() {
    console.log('[onEditorReady callback]')
    richText = this.selectComponent('#richText'); //获取组件实例
  },

  //设置富文本内容
  setContents(rechtext) {
    this.editorCtx.setContents({
      html: rechtext,
      success: res => {
        console.log('[setContents success]', res)
      }
    })
  },

  //撤销
  undo() {
    console.log('[undo callback]')
  },

  //恢复
  restore() {
    console.log('[restore callback]')
  },

  //清空编辑器内容
  clear() {
    this.editorCtx.clear({
      success: res => {
        console.log("[clear success]", res)
      }
    })
  },

  //清空编辑器事件
  clearEvent(){
    console.log('[clearEvent callback]')
    wx.showModal({
      cancelText: '取消',
      confirmText: '确认',
      content: '确认清空编辑器内容吗？',
      success: (result) => {
        if(result.confirm){
          richText.clear();
        }
      },
      fail: (res) => {},
    })
  },

  //清空编辑器成功回调
  clearSuccess(){
    console.log('[clearSuccess callback]')
  },

  //清除当前选区的样式
  removeFormat() {
    this.editorCtx.removeFormat();
  },

  //插入图片
  insertImageEvent() {
    wx.chooseImage({
      count: 1,
      success: res => {
        let path = res.tempFilePaths[0];
        richText.insertImageMethod(path).then(res => {
          console.log('[insert image success callback]=>', res)
        }).catch(res => {
          console.log('[insert image fail callback]=>', res)
        });
      }
    })
  },

  //保存，获取编辑器内容
  getEditorContent(res) {
    let {
      value
    } = res.detail;
    wx.showToast({
      title: '获取编辑器内容成功',
      icon: 'none',
    })
    console.log('[getEditorContent callback]=>', value)
  },

  //show文本工具栏
  showTextTool() {
    this.setData({
      textTool: !this.data.textTool
    })
  },

  //编辑器聚焦时触发
  bindfocus(res) {
    let {
      value
    } = res.detail;
    // console.log('[bindfocus callback]=>', value)
  },

  //编辑器失去焦点时触发
  bindblur(res) {
    let {
      value
    } = res.detail;
    // console.log('[bindblur callback]=>', value)
  },

  //编辑器输入中时触发
  bindinput(res) {
    let {
      value
    } = res.detail;
    // console.log('[bindinput callback]=>', value)
    app.data.richTextContents = value.detail.html;
  },

  //预览富文本
  preview(){
    wx.navigateTo({
      url: `../preview/preview`,
    })
  }
})