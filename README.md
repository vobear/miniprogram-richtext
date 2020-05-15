# miniprogram-richtext

#### 开始之前
>使用此组件需要依赖小程序基础库 2.7.0 以上版本，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。


#### 安装教程

1.  下载源码

```
git https://github.com/vobear/miniprogram-richtext.git
```


#### 使用说明

1.  在下载源码中找到组件目录：components/richText，将 richText 整个文件夹复制到你的项目中。
2.  在page.json中引入组件

```
"usingComponents": {
    "richText":"../../components/richText/richText"
},
```
3.  在page.wxml中使用组件

```
<richText 
  id='richText' 
  readOnly='{{readOnly}}'
  placeholder='{{placeholder}}' 
  formatDate='YY/MM/DD'
  buttonTxt='保存'
  bind:clearEvent='clearEvent'
  bind:clearSuccess='clearSuccess'
  bind:undo='undo'
  bind:restore='restore'
  bind:onEditorReady='onEditorReady' 
  bind:bindfocus='bindfocus' 
  bind:bindblur='bindblur' 
  bind:bindinput='bindinput' 
  bind:insertImageEvent='insertImageEvent' 
  bind:getEditorContent='getEditorContent'></richText>
```
### 演示
1.  你可以用 [微信web开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html) 打开项目 miniprogram-richtext 查看完整演示。

2.  效果截图  
![效果截图](https://images.gitee.com/uploads/images/2020/0515/155231_09025a5b_1486634.png)

### 讨论组

有问题可进群（192713488）找群主。

#### 参与贡献

1.  有任何意见或建议欢迎提 [issue](https://github.com/vobear/miniprogram-richtext/issues)。

