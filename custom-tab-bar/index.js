Component({
  properties: {
  },
  data: {
    currentIndex: "",//当前选择的tabbar标识
    slectedColor: "rgb(252, 126, 67)",//当前选择的tab颜色
    color: "#ccc",//未选择的tab颜色
    leftIconUrl: "/assets/icon/left.png",//左未选择的tab颜色
    leftSlectIconUrl: "/assets/icon/left_select.png",//左已选中的tab颜色
    rightIconUrl: "/assets/icon/right.png",//右未选颜色
    rightSlectIconUrl: "/assets/icon/right_select.png"//右已选颜色
  },
  attached() {},
  methods: {
    switchTab(e) {

      console.log(e.currentTarget.dataset)
      if (e.currentTarget.dataset.postion == "left") {
        wx.switchTab({
          url: '/pages/index/index',
        })


      }
      if (e.currentTarget.dataset.postion == "right") {

        wx.switchTab({
          url: '/pages/order/order',
        })

      }
      this.setData({
        currentIndex: e.currentTarget.dataset.postion
      })
    },
    scan() {
      // 扫码

      wx.scanCode({
        onlyFromCamera: true,
        success(res) {
          console.log(res)
          wx.navigateTo({
            url: '/pages/choiceGame/choiceGame?machineNum='+res.result
          })
        }
      })
    }
  }

})