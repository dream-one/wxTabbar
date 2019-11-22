最近接了个需求，要在小程序的底部tabbar上放置扫码的按钮，原生的没法用了，只能自定义了。

### 预览
![自定义tabbar](https://github.com/dream-one/wxTabbar/blob/master/tabbar.png)

### 使用方法 
第一步：在app.json文件中添加如下代码
```
{
  "tabBar": {
    "custom": true,
    "color": "#000000",
    "selectedColor": "#000000",
    "backgroundColor": "#000000",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "设备"
      },
      {
        "pagePath": "pages/order/order",
        "text": "我的"
      }
    ]
  }
   "usingComponents": {}
 }
```
第二步：下载custom-tab-bar文件夹，放到项目根目录中（和app.json同级）
>现在这个tabbar就已经开始工作了
>接下来就根据需求自己修改样式

### Q
1. 自定义tabbar切换时会有闪动问题，这个问题官方目前无解。民间目前较好的解决办法是把页面封装成组件，点击tabbar时切换组件
