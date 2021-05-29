import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, ScrollView } from '@tarojs/components'
import { AtButton, AtTabs, AtTabsPane, AtActivityIndicator, AtIcon, AtNavBar } from 'taro-ui'
import './storeMainPage.scss'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import bk from '../../img/image-13.jpg'
import storebk from '../../img/storeinfobk.png'
import certificationTab from '../../img/image-1.png'
import storeIcon from '../../img/image.png'
import playIcon from '../../img/image-2.png'
import payIcon from '../../img/image-3.png'
import queueIcon from '../../img/image-4.png'
import shareIcon from '../../img/image-5.png'
import storePic from '../../img/image-10.png'
import tabbk from '../../img/queueinfobk.png'
import femalePic from '../../img/female.png'
import malePic from '../../img/male.png'
import closedQueue from '../../img/image-8.png'
import emptyPic from '../../img/empty.svg'
import certIcon from '../../img/certification.svg'


import { test_get_queues, test_get_lockedqueues, test_lock_queue, test_share_store} from '../../service/api'
import { base } from '../../service/config'

export default class Storemainpage extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      adminInfo:{},
      storeInfo:{},
      permission:0,
      queueList: [],
      lockedQueueList: [],
      queueListIdx: [],
      clickButton:false,
      tabLoading: true,
      infoLoading: true
    }
  }

  isInStorage (key_name) {
    var info = Taro.getStorageInfoSync();
    var key_list = info.keys;
    var res = key_list.find(function(elem){
      return elem == key_name;
    })
    return res;
  }

  componentWillMount () { 
    this.state.adminInfo = Taro.getStorageSync(`admin_info`);
    this.state.storeInfo = Taro.getStorageSync(`store_info`);
    this.state.permission = Taro.getStorageSync(`permission`);
    /*
    if (JSON.stringify(this.state.storeInfo) !== '{}' & JSON.stringify(this.state.adminInfo) !== '{}') {
      this.setState({
        infoLoading: false
      })
    } else {
      console.log('false')
    }
    */
    
  }

  componentDidMount () { 
    
  }

  componentWillUnmount () { }

  componentDidShow () { 
    this.setState({
      storeInfo:Taro.getStorageSync('store_info')
    })

    let _this = this;
    test_get_queues(this.state.storeInfo.store_id).then((res) => {
      console.log(res.data.data.play_data);
      res.data.data.play_data.map((item, itemIdx) => {
        if (this.isInStorage(`play_id_${item.play_id}`)){
          console.log('the play is in cache')
        } else {
          Taro.setStorage({key:`play_id_${item.play_id}`, data:item})
        }
      })
      _this.setState({
        queueList: res.data.data.queue_data,
        queueListIdx: res.data.data.queue_num,
        tabLoading: false,
        infoLoading: false
      })
    })

    _this = this;
    let body = {
      showDays: 1
    }
    test_get_lockedqueues(this.state.storeInfo.store_id, body).then((res) => {
      console.log(res.data.data.play_data);
      res.data.data.play_data.map((item, itemIdx) => {
        if (this.isInStorage(`play_id_${item.play_id}`)){
          console.log('the play is in cache')
        } else {
          Taro.setStorage({key:`play_id_${item.play_id}`, data:item})
        }
      })
      _this.setState({
        lockedQueueList: res.data.data.queue_data,
        tabLoading: false,
        infoLoading: false
      })
    })
  }

  componentDidHide () { }

  handleNavBack() {
    Taro.navigateBack()
  }

  handleClick (value) {
    this.setState({
      tabLoading: true
    })
    if (value == 0) {
      let _this = this;
      test_get_queues(this.state.storeInfo.store_id).then((res) => {
        console.log(res.data.data.play_data);
        res.data.data.play_data.map((item, itemIdx) => {
          if (this.isInStorage(`play_id_${item.play_id}`)){
            console.log('the play is in cache')
          } else {
            Taro.setStorage({key:`play_id_${item.play_id}`, data:item})
          }
        })
        _this.setState({
          queueList: res.data.data.queue_data,
          queueListIdx: res.data.data.queue_num,
          tabLoading: false,
          infoLoading: false
        })
      })
    } else if (value == 1) {
      let _this = this;
      let body = {
        showDays: 1
      }
      test_get_lockedqueues(this.state.storeInfo.store_id, body).then((res) => {
        console.log(res.data.data.play_data);
        res.data.data.play_data.map((item, itemIdx) => {
          if (this.isInStorage(`play_id_${item.play_id}`)){
            console.log('the play is in cache')
          } else {
            Taro.setStorage({key:`play_id_${item.play_id}`, data:item})
          }
        })
        _this.setState({
          lockedQueueList: res.data.data.queue_data,
          tabLoading: false,
          infoLoading: false
        })
      })
    }
    this.setState({
      current: value
    })
  }

  handleClickStore() {
    Taro.navigateTo({url: '../formPage/index?page=4'})
  }

  handleClickPlay() {
    Taro.navigateTo({
      url: '../playSearchPage/playSearchPage'
    })
  }

  handleClickQueue() {
    Taro.navigateTo({
      url: '../queueInfoPage/index'
    })
  }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}
  onScroll(e){
    //console.log(e.detail)
  }

  lockTheQueue(id) {
    this.state.clickButton = true;
    let theQueue = this.state.queueList[id];
    let _this = this;
    console.log(theQueue);
    wx.showModal({
      title: '锁定车队',
      content: `确定锁定 ${theQueue.queue_end_time.slice(0,10)+" "+theQueue.queue_end_time.slice(11,-3)} 人数为${theQueue.queue_current_num}人的车队吗？`,
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          let body = {
            adminId: _this.state.adminInfo.adminId,
            sessionId: _this.state.adminInfo.sessionId,
            store_id: _this.state.storeInfo.store_id,
            queue_id: theQueue.queue_id,
            appId: wx.getAccountInfoSync().miniProgram.appId,
            token: (dayjs().unix() + 1000 ) * 2
          };
          test_lock_queue(body).then((result) => {
            if (result.data.code == 1){
              _this.state.queueList[id].queue_status = 1;
              _this.setState({
                queueList: _this.state.queueList,
                clickButton: false
              })
            } else {
              console.log(result.data.data)
            }
          })
        } else if (res.cancel) {
          _this.setState({
            clickButton: false
          })
          console.log('用户点击取消')
        }
      }
    })
  }

  manageQueue (id) {
    console.log('click tab')
    if (this.state.clickButton == true) {
      console.log('click button')
    } else {
      Taro.setStorage({
        key: 'queue_info',
        data: this.state.queueList[id]
      })
  
      Taro.navigateTo({
        url: '../queueManagePage/index'
      })
    }
  }

  manageLockedQueue (id) {
    console.log('click tab')
    if (this.state.clickButton == true) {
      console.log('click button')
    } else {
      Taro.setStorage({
        key: 'queue_info',
        data: this.state.lockedQueueList[id]
      })
  
      Taro.navigateTo({
        url: '../queueManagePage/index'
      })
    }
  }

  handleShare() {
    console.log('share the store')
    let data = {
      adminId: this.state.adminInfo.adminId,
      sessionId: this.state.adminInfo.sessionId,
      store_id: this.state.storeInfo.store_id,
      appId: wx.getAccountInfoSync().miniProgram.appId,
      token: (dayjs().unix() + 1000 ) * 2
    }
    test_share_store(data).then(function(result) {
      console.log(result)
      if (result.data.code == 1){
        wx.getSetting({
          success(res) {
            if (!res.authSetting['scope.writePhotosAlbum']) {
              wx.authorize({
                scope: 'scope.writePhotosAlbum',
                success () {
                  // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                }
              })
            }
          }
        })

        wx.downloadFile({
          url: base+result.data.data,     //仅为示例，并非真实的资源
          success: function (rrr) {
            wx.showToast({
              title: '请等待...',
              icon: 'none'
            })
            // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
            if (rrr.statusCode === 200) {
              wx.saveImageToPhotosAlbum({
                filePath: rrr.tempFilePath,
                success(res) {
                  wx.showToast({
                    title: '已保存图片到相册！',
                    icon: 'none'
                  })
                },
                fail(res) {
                  wx.showToast({
                    title: '保存图片失败！',
                    icon: 'none'
                  })
                }
              })
            }
          }
        })
        
      } else {
        wx.showToast({
          title: result.data.data,
          icon: 'none'
        })
      }
      
    })
  }

  render () {

    var top_height = wx.getSystemInfoSync().statusBarHeight;
    var system_width = wx.getSystemInfoSync().screenWidth/3;

    var screenHeight = wx.getSystemInfoSync().screenHeight;
    var screenWidth = wx.getSystemInfoSync().screenWidth;
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    var screenHeight_rpx = 750*(screenHeight/screenWidth);
    var windowHeight_rpx = 750*(windowHeight/screenWidth);
    var top_height_rpx = 750*(top_height/screenWidth);

    const scrollTop = 0
    const Threshold = 20
    var scrollStyle = {
      height: `${windowHeight_rpx-top_height_rpx-20-170-50-170-180-80}rpx`
    }

    let queuesInfo = [];
    let lockedQueueInfo = [];

    if (this.state.queueList.length == 0 && this.state.lockedQueueList.length==0) {
      queuesInfo.push(
        <View style='display:flex;flex-direction:column;align-items:center;'>
          <image src={emptyPic} style='width:675rpx;'></image>
          <text style='color:#A5A5A5;'>这里空空如也~</text>
        </View>
      )

      lockedQueueInfo.push(
        <View style='display:flex;flex-direction:column;align-items:center;'>
          <image src={emptyPic} style='width:675rpx;'></image>
          <text style='color:#A5A5A5;'>这里空空如也~</text>
        </View>
      )
    } else {
      this.state.lockedQueueList.map((item, itemIdx) => {
        let temp_play_info = Taro.getStorageSync(`play_id_${item.play_id}`);
        // male famale display
        let male_female_display = [];
        if (temp_play_info.play_male_num == 999 | temp_play_info.play_female_num == 999) {
          male_female_display = [];
        } else {
          male_female_display.push(
            <View className='play-male-position-info'>
              <image className='gender-icon-info' src={malePic}></image>
              <text>{item.queue_current_male_num}/{temp_play_info.play_male_num}</text>
            </View>
          )
          male_female_display.push(
            <View className='play-female-position-info'>
              <image className='gender-icon-info' src={femalePic}></image>
              <text>{item.queue_current_female_num}/{temp_play_info.play_female_num}</text>
            </View>
          )
        }
        if (this.state.tabLoading == false ) {
          lockedQueueInfo.push(
            <View className='at-row queue-tab-info' onClick={this.manageLockedQueue.bind(this, itemIdx)}>
              <image src={tabbk} mode='widthFix' style='width:675rpx;z-index:-1;position:absolute;'></image>
  
              <View className='at-row play-pic-position-info' style='width:21vw'>
                <image className='play-pic-info' src={base+temp_play_info.play_img}>
                <text className='play-pic-label-info'>{temp_play_info.play_labels[0]}</text>
                </image>
              </View>
              <View className='at-col play-intro-info'>
                <View className='at-col play-name-position-info'>
                  <text style='text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{temp_play_info.play_name}</text>
                </View>
                <View className='at-row'>
                  <View className='at-col'>
                    <View className='at-row' style='font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;'><text decode="{{true}}">{item.queue_end_time.slice(0,10)+" "+item.queue_end_time.slice(11,-3)}</text></View>
                  </View>
                </View>
                <View className='at-col' style='margin-top:10%;'>
                  <text style='font-size:24rpx;font-weight:550;'>房间：默认</text>
                </View>
              </View>
              <View className='at-row' style='width:20vw;display:flex;align-items:center;'>
  
                <image src={closedQueue} style='height:120rpx;width:120rpx;'></image>
              </View>
            </View>
          )
        } else {
          lockedQueueInfo.push(
            <View className='storeMainPage' style={{height:`300rpx`, display:`flex`, flexDirection:`column`,alignItems:`center`, justifyContent:`flex-start`}}>
              <View><AtActivityIndicator mode='center' size={64} content='Loading...' className='load'></AtActivityIndicator></View>
            </View>
          )
        }

        
      })

      this.state.queueList.map((item, itemIdx) => {
        let temp_play_info = Taro.getStorageSync(`play_id_${item.play_id}`);
        console.log(temp_play_info)
        // male famale display
        let male_female_display = [];
        if (temp_play_info.play_male_num == 999 | temp_play_info.play_female_num == 999) {
          male_female_display = [];
        } else {
          male_female_display.push(
            <View className='play-male-position-info'>
              <image className='gender-icon-info' src={malePic}></image>
              <text>{item.queue_current_male_num}/{temp_play_info.play_male_num}</text>
            </View>
          )
          male_female_display.push(
            <View className='play-female-position-info'>
              <image className='gender-icon-info' src={femalePic}></image>
              <text>{item.queue_current_female_num}/{temp_play_info.play_female_num}</text>
            </View>
          )
        }
        

          // 将item加入锁局中
          /*
          lockedQueueInfo.push(
            <View className='at-row queue-tab-info' >
              <image src={tabbk} mode='widthFix' style='width:675rpx;z-index:-1;position:absolute;'></image>

              <View className='at-row play-pic-position-info' style='width:21vw'>
                <image className='play-pic-info' src={base+temp_play_info.play_img}>
                <text className='play-pic-label-info'>{temp_play_info.play_labels[0]}</text>
                </image>
              </View>
              <View className='at-col play-intro-info'>
                <View className='at-col play-name-position-info'>{temp_play_info.play_name}</View>
                <View className='at-row'>
                  <View className='at-col'>
                    <View className='at-row' style='font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;'><text decode="{{true}}">{item.queue_end_time}</text></View>
                  </View>
                </View>
                <View className='at-col' style='margin-top:10%;'>
                  <text style='font-size:24rpx;font-weight:550;'>房间：默认</text>
                </View>
              </View>
              <View className='at-row' style='width:20vw;display:flex;align-items:center;'>

                <image src={closedQueue} style='height:160rpx;width:160rpx;'></image>
              </View>
            </View>
          )
          */
        if (this.state.tabLoading == false ) {
          if (temp_play_info.play_headcount == item.queue_current_num){
            queuesInfo.push(
              <View className='at-row queue-tab-info' onClick={this.manageQueue.bind(this, itemIdx)}>
                <image src={tabbk} mode='widthFix' style='width:675rpx;z-index:-1;position:absolute;'></image>
                {/*  每个tab上信息显示 */}
                <text style='background-color:rgba(252, 95, 47, 0.5);position:absolute;right:37.5rpx;;font-size:24rpx;padding:10rpx;border-radius:0 20rpx 0 20rpx;'>已拼满</text>
                <View className='at-row play-pic-position-info' style='width:21vw'>
                  <image className='play-pic-info' src={base+temp_play_info.play_img}>
                  <text className='play-pic-label-info'>{temp_play_info.play_labels[0]}</text>
                  </image>
                </View>
                <View className='at-col play-intro-info'>
                  <View className='at-col play-name-position-info'>
                    <text style='text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{temp_play_info.play_name}</text>
                  </View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row play-time-position-info'><text decode="{{true}}">{item.queue_end_time.slice(0,10)+" "+item.queue_end_time.slice(11,-3)}</text></View>
                      <View className='at-row play-headcount-position-info'>
                        <View className='play-headcount-info'><text decode="{{true}}">人数：{item.queue_current_num}/{temp_play_info.play_headcount}</text></View>
                        {male_female_display}
                      </View>
                    </View>
                    <View className='at-row' style='width:20vw;margin-right:20rpx;'>
                      {/* Button */}
                      <AtButton type='primary' circle='true' className='confirm-button' disabled={item.queue_status==1? true:false} onClick={this.lockTheQueue.bind(this, itemIdx)}>确认锁局</AtButton>
                    </View>
                  </View>
                  <View className='at-col' style='margin-top:2%;'>
                    <text style='font-size:24rpx;font-weight:550;'>房间：默认</text>
                  </View>
                </View>
              </View>
            )
          } else {
            queuesInfo.push(
              <View className='at-row queue-tab-info' onClick={this.manageQueue.bind(this, itemIdx)}>
                <image src={tabbk} mode='widthFix' style='width:675rpx;z-index:-1;position:absolute;'></image>
                {/*  每个tab上信息显示 */}
                <text style='background-color:rgba(252, 166, 47, 0.5);position:absolute;right:37.5rpx;;font-size:24rpx;padding:10rpx;border-radius:0 20rpx 0 20rpx;'>未拼满</text>
                <View className='at-row play-pic-position-info' style='width:21vw'>
                  <image className='play-pic-info' src={base+temp_play_info.play_img}>
                  <text className='play-pic-label-info'>{temp_play_info.play_labels[0]}</text>
                  </image>
                </View>
                <View className='at-col play-intro-info'>
                  <View className='at-col play-name-position-info'>
                    <text style='text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{temp_play_info.play_name}</text>
                  </View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row play-time-position-info'><text decode="{{true}}">{item.queue_end_time.slice(0,10)+" "+item.queue_end_time.slice(11,-3)}</text></View>
                      <View className='at-row play-headcount-position-info'>
                        <View className='play-headcount-info'><text decode="{{true}}">人数：{item.queue_current_num}/{temp_play_info.play_headcount}</text></View>
                        {male_female_display}
                      </View>
                    </View>
                    <View className='at-row' style='width:20vw;margin-right:20rpx;'>
                      {/* Button */}
                      <AtButton type='primary' circle='true' className='confirm-button' disabled={item.queue_status==1? true:false} onClick={this.lockTheQueue.bind(this, itemIdx)}>确认锁局</AtButton>
                    </View>
                  </View>
                  <View className='at-col' style='margin-top:2%;'>
                    <text style='font-size:24rpx;font-weight:550;'>房间：默认</text>
                  </View>
                </View>
              </View>
            )
          }
        } else {
          queuesInfo.push(
            <View className='storeMainPage' style={{height:`300rpx`, display:`flex`, flexDirection:`column`,alignItems:`center`, justifyContent:`flex-start`}}>
              <View><AtActivityIndicator mode='center' size={64} content='Loading...' className='load'></AtActivityIndicator></View>
            </View>
          )
        }
      })
      

      if (lockedQueueInfo.length == 0){
        lockedQueueInfo.push(
          <View style='display:flex;flex-direction:column;align-items:center;'>
            <image src={emptyPic} style='width:675rpx;'></image>
            <text style='color:#A5A5A5;'>这里空空如也~</text>
          </View>
        )
      }
      if (queuesInfo.length == 0) {
        queuesInfo.push(
          <View style='display:flex;flex-direction:column;align-items:center;'>
            <image src={emptyPic} style='width:675rpx;'></image>
            <text style='color:#A5A5A5;'>这里空空如也~</text>
          </View>
        )
      }
    }

    if (this.state.infoLoading == true) {
      //这里处理加载，主要是从storage读取store admin info
      return (
        <View className='storeMainPage' style={{height:`100vh`, display:`flex`, flexDirection:`column`,alignItems:`center`, justifyContent:`flex-start`}}>
            <image src={bk} style='width:100vw;height:100vh;position:absolute;size:100%;z-index:-1;'></image>
            <View><AtActivityIndicator mode='center' size={64} content='Loading...' className='load'></AtActivityIndicator></View>
        </View>
      )
    } else {
      return (
        <View className='storeMainPage' style={{height:`100vh`, display:`flex`, flexDirection:`column`,alignItems:`center`, justifyContent:`flex-start`}}>
          <image src={bk} style='width:100vw;height:100vh;position:absolute;size:100%;z-index:-1;'></image>
          <View style={{paddingTop:`${top_height_rpx}rpx`, height:`70rpx`, width:`100vw`}}>
            <AtNavBar className='nav-bar-info'
              onClickLeftIcon={this.handleNavBack.bind(this)}
              color='#ffff'
              leftIconType='chevron-left'
            ><View style='color:#fff;font-size:18px'>首页</View></AtNavBar>
          </View>
            
          <View style='padding-top:20rpx;height:150rpx;width:100vw;'>
            <image mode='heightFix' src={storebk} style='height:300rpx;width:660rpx;position:relative;left:45rpx;'></image>
            <View style='height:200rpx;width:600rpx;position:relative;top:-260rpx;left:75rpx;display:flex;align-items:flex-start;justify-content:flex-start'>
              <image src={base+this.state.storeInfo.store_logo} style='height:200rpx;width:200rpx;border-radius:20rpx;'></image>
              <View style='display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-left:20rpx;'>
                <text style='height:50rpx;width:360rpx;font-size:36rpx;font-weight:600;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{this.state.storeInfo.store_name}</text>
                <View style='height:60rpx;display:flex;align-items:center;justify-content:flex-start;'>
                  <image src={certIcon} style='height:30rpx;width:30rpx;'></image>
                  <text style='font-size:20rpx;margin-left:5rpx;background:rgba(139, 111, 73, 1);color: rgba(255, 255, 255, 1);padding: 3rpx 5rpx;'>剧本杀店铺</text>
                </View>
                <text style='height:50rpx;width:360rpx;font-size:24rpx;font-weight:530;'>店铺ID：{this.state.storeInfo.store_id}</text>
                <text style='height:50rpx;width:360rpx;font-size:24rpx;font-weight:530;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>管理员：{this.state.adminInfo.nickName}</text>
              </View>
            </View>
          </View>
  
          <View style={{
            width:'100vw', 
            height:`${windowHeight_rpx-top_height_rpx-20-170-50}rpx`, 
            backgroundColor:'#F9F9F9', 
            borderRadius:'10px 10px 0 0', 
            display:`flex`, 
            flexDirection:`column`,
            alignItems:`center`, 
            justifyContent:`flex-start`
            }}>
            {/*
            <View style={{height:`80rpx`, width:`660rpx`, marginTop:`170rpx`}}>
              <image src={certificationTab} mode='widthFix' style='width:660rpx;position:absolute;'></image>
              <View style='height:80rpx;width:660rpx;position:relative;display:flex;align-items:center;justify-content:flex-start;'>
                <image src={certIcon} style='margin-left:20rpx;height:40rpx;width:40rpx;'></image>
                <text style='font-size:16px;font-weight:530;color:#FCA62F;margin-left:10rpx;'>未认证门店</text>
                <View style='position:absolute;right:0;'>
                  <text style='font-size:16px;font-weight:530;color:#FCA62F;margin-left:10rpx;'>去认证</text>
                  <AtIcon value='chevron-right' size='24' color='#FCA62F'></AtIcon>
                </View>
              </View>
            </View>
            */}
  
            <View style={{height:`180rpx`, width:`660rpx`, display:`flex`, alignItems:`center`, justifyContent:`flex-start`, marginTop:`170rpx`}}>
              <View style='display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;' onClick={this.handleClickStore.bind(this)}>
                <View style='background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;'>
                  <image src={storeIcon} style='height:30px;width:30px;'></image>
                </View>
                <text style='font-size:12px;font-weight:400;margin-top:10%;'>店铺管理</text>
              </View>
  
              <View style='width:40rpx;'></View>
  
              <View style='display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;' onClick={this.handleClickPlay.bind(this)}>
                <View style='background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;'>
                  <image src={playIcon} style='height:30px;width:30px;'></image>
                </View>
                <text style='font-size:12px;font-weight:400;margin-top:10%;'>剧本管理</text>
              </View>
  
              <View style='width:40rpx;'></View>
  
              <View style='display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;'>
                <View style='background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;'>
                  <image src={payIcon} style='height:30px;width:30px;'></image>
                </View>
                <text style='font-size:12px;font-weight:400;margin-top:10%;'>支付管理</text>
              </View>
  
              <View style='width:40rpx;'></View>
  
              <View style='display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;' onClick={this.handleClickQueue.bind(this)}>
                <View style='background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;'>
                  <image src={queueIcon} style='height:30px;width:30px;'></image>
                </View>
                <text style='font-size:12px;font-weight:400;margin-top:10%;'>车队管理</text>
              </View>
  
              <View style='width:40rpx;'></View>
  
              <View style='display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;' onClick={this.handleShare.bind(this)}>
                <View style='background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;'>
                  <image src={shareIcon} style='height:30px;width:30px;'></image>
                </View>
                <text style='font-size:12px;font-weight:400;margin-top:10%;'>店铺分享</text>
              </View>
  
            </View>
  
            <View>
              <AtTabs /* TODO: 这部分需要重构，红点没实现，列表不同日期显示不同灰度也没实现 */
                className='tabs-info'
                current={this.state.current}
                scroll
                tabList={[
                  { title: '待确认', queueNum: 0},
                  { title: '已结束', queueNum: 0}
                ]}
                onClick={this.handleClick.bind(this)}>
              
              <AtTabsPane current={this.state.current} index={0}>
              <ScrollView
                className='scrollview'
                scrollY
                scrollWithAnimation
                show-scrollbar='false'
                scrollTop={scrollTop}
                style={scrollStyle}
                lowerThreshold={Threshold}
                upperThreshold={Threshold}
                onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
                onScroll={this.onScroll}
                >
                {queuesInfo}
  
              </ScrollView>
              </AtTabsPane>
  
              <AtTabsPane current={this.state.current} index={1}>
              <ScrollView
                className='scrollview'
                scrollY
                scrollWithAnimation
                show-scrollbar='false'
                scrollTop={scrollTop}
                style={scrollStyle}
                lowerThreshold={Threshold}
                upperThreshold={Threshold}
                onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
                onScroll={this.onScroll}
                >
  
                {lockedQueueInfo}
  
              </ScrollView>
              </AtTabsPane>
  
              </AtTabs>
            </View>
          </View>
        </View>
      )
    }

  }
}
