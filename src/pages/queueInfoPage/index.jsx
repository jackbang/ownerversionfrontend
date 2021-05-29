import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { AtButton, AtSearchBar, AtNavBar, AtTag, AtTabs, AtTabsPane, AtActivityIndicator} from 'taro-ui'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import './index.scss'

import bk from '../../img/image-13.jpg'
import tabbk from '../../img/queueinfobk.png'
import storePic from '../../img/image-10.png'
import femalePic from '../../img/female.png'
import malePic from '../../img/male.png'
import closedQueue from '../../img/image-8.png'
import emptyPic from '../../img/empty.svg'

import { test_get_queues, test_get_lockedqueues, test_lock_queue } from '../../service/api'
import { base } from '../../service/config'

export default class Queueinfopage extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      tagActiveNum: 0,
      plays_num: 0,
      plays_list: [],
      current: 0,
      currentDay: 0,
      adminInfo:{},
      storeInfo:{},
      permission:0,
      queueList: [],
      queueListIdx: [],
      lockedQueueList: [],
      playInfo:{
        play_name:"木兮僧之戏",
        play_headcount:7,
        play_male_num:4,
        play_female_num:3
      },
      clickButton: false,
      tabLoading: true,
      infoLoading: true
    }
  }

  componentWillMount () {
    this.state.adminInfo = Taro.getStorageSync(`admin_info`);
    this.state.storeInfo = Taro.getStorageSync(`store_info`);
    this.state.permission = Taro.getStorageSync(`permission`);
  }

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
      showDays: 0
    }
    test_get_lockedqueues(this.state.storeInfo.store_id, body).then((res) => {
      console.log(res.data.data);
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

  isInStorage (key_name) {
    var info = Taro.getStorageInfoSync();
    var key_list = info.keys;
    var res = key_list.find(function(elem){
      return elem == key_name;
    })
    return res;
  }

  handleClick (value) {
    this.setState({
      tabLoading: true
    })

    if ( value == 0) {
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
    } else if ( value == 1) {
      let _this = this;
      let body = {
        showDays: 0
      }
      test_get_lockedqueues(this.state.storeInfo.store_id, body).then((res) => {
        console.log(res.data.data);
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

  handleDayTabsClick (value) {
    this.setState({
      tabLoading: true
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

    this.setState({
      currentDay: value
    })
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
              _this.setState({
                clickButton: false
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
          _this.setState({
            clickButton: false
          })
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

  handleNavBack() {
    Taro.navigateBack()
  }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}
  onScroll(e){
    //console.log(e.detail)
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
      height: `${windowHeight_rpx-top_height_rpx-90-80-100}rpx`
    }

    var newScrollStyle = {
      height: `${windowHeight_rpx-top_height_rpx-80-100}rpx`
    }

    let tabInfoList = [];
    let dayList = [ "周一", "周二", "周三", "周四", "周五", "周六", "周日"];
    tabInfoList.push({title: "今天 "+dayjs().format('MM-DD')});
    for (let index = 1; index < 14; index++) {
      tabInfoList.push({title: dayList[index%7]+" "+dayjs().add(index, 'day').format('MM-DD')});
    }

    if (this.state.infoLoading == true) {
      return(
        <View className='queueInfoPage' style={{height:`100vh`, display:`flex`, flexDirection:`column`,alignItems:`center`, justifyContent:`flex-start`}}>
            <image src={bk} style='width:100vw;height:100vh;position:absolute;size:100%;z-index:-1;'></image>
            <View><AtActivityIndicator mode='center' size={64} content='Loading...' className='load'></AtActivityIndicator></View>
        </View>
      )
    } else {

      let dayQueueTabs = [];
      let lockedQueueTabs = [];
      var totalTabsNum = 0;
      this.state.queueListIdx.map((item, itemIdx) => {
        let queueTabs = [];
        if (this.state.tabLoading == true) {
          dayQueueTabs.push(
            <AtTabsPane current={this.state.currentDay} index={itemIdx} >
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
                <View className='queueInfoPage' style={{height:`100vh`, display:`flex`, flexDirection:`column`,alignItems:`center`, justifyContent:`flex-start`}}>
                    <View><AtActivityIndicator mode='center' size={64} content='Loading...' className='load'></AtActivityIndicator></View>
                </View>

              </ScrollView>
            </AtTabsPane>
          )
        } else {

          if (item == 0) {
            dayQueueTabs.push(
              <AtTabsPane current={this.state.currentDay} index={itemIdx} >
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
                  <View>
                    <image src={emptyPic} style='width:675rpx;'></image>
                  </View>

                </ScrollView>
              </AtTabsPane>
            )
          } else {
            for (let index = totalTabsNum; index < totalTabsNum + item; index++) {
              let temp_play = Taro.getStorageSync(`play_id_${this.state.queueList[index].play_id}`)

              let male_female_display = [];
              if (temp_play.play_male_num == 999 || temp_play.play_female_num == 999) {
                male_female_display = [];
              } else {
                male_female_display.push(
                  <View className='play-male-position-info'>
                    <image className='gender-icon-info' src={malePic}></image>
                    <text>{this.state.queueList[index].queue_current_male_num}/{temp_play.play_male_num}</text>
                  </View>
                )
                male_female_display.push(
                  <View className='play-female-position-info'>
                    <image className='gender-icon-info' src={femalePic}></image>
                    <text>{this.state.queueList[index].queue_current_female_num}/{temp_play.play_female_num}</text>
                  </View>
                )
              }

              queueTabs.push(
                <View className='at-row queue-tab-info' onClick={this.manageQueue.bind(this, index)}>
                  <image src={tabbk} mode='widthFix' style='width:675rpx;z-index:-1;position:absolute;'></image>
                  {/*  每个tab上信息显示 */}
                  <text 
                    style={this.state.queueList[index].queue_current_num==temp_play.play_headcount? 'background-color:rgba(252, 95, 47, 0.5);position:absolute;right:37.5rpx;;font-size:24rpx;padding:10rpx;border-radius:0 20rpx 0 20rpx;':'background-color:rgba(252, 166, 47, 0.5);position:absolute;right:37.5rpx;;font-size:24rpx;padding:10rpx;border-radius:0 20rpx 0 20rpx;'}>
                    {this.state.queueList[index].queue_current_num==temp_play.play_headcount? '已拼满':'未拼满'}
                  </text>
                  <View className='at-row play-pic-position-info' style='width:21vw'>
                    <image className='play-pic-info' src={base+temp_play.play_img}>
                    <text className='play-pic-label-info'>本格</text>
                    </image>
                  </View>
                  <View className='at-col play-intro-info'>
                    <View className='at-col play-name-position-info'>{temp_play.play_name}</View>
                    <View className='at-row'>
                      <View className='at-col'>
                        <View className='at-row play-time-position-info'><text decode="{{true}}">{this.state.queueList[index].queue_end_time.slice(0,10)+" "+this.state.queueList[index].queue_end_time.slice(11,-3)}</text></View>
                        <View className='at-row play-headcount-position-info'>
                          <View className='play-headcount-info'><text decode="{{true}}">人数：{this.state.queueList[index].queue_current_num}/{temp_play.play_headcount}</text></View>
                          {male_female_display}
                        </View>
                      </View>
                      <View className='at-row' style='width:20vw;margin-right:20rpx;'>
                        {/* Button */}
                        <AtButton type='primary' circle='true' className='confirm-button' disabled={this.state.queueList[index].queue_status==1? true:false} onClick={this.lockTheQueue.bind(this, index)}>确认锁局</AtButton>
                      </View>
                    </View>
                    <View className='at-col' style='margin-top:2%;'>
                      <text style='font-size:24rpx;font-weight:550;'>房间：默认</text>
                    </View>
                  </View>
                </View>
              )
            }
            dayQueueTabs.push(
              <AtTabsPane current={this.state.currentDay} index={itemIdx} >
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
                  {queueTabs}

                </ScrollView>
              </AtTabsPane>
            )
          }
          totalTabsNum = totalTabsNum + item;
        }
      })

      if (this.state.tabLoading == true) {
        lockedQueueTabs.push(
          <View className='queueInfoPage' style={{height:`100vh`, display:`flex`, flexDirection:`column`,alignItems:`center`, justifyContent:`flex-start`}}>
              <View><AtActivityIndicator mode='center' size={64} content='Loading...' className='load'></AtActivityIndicator></View>
          </View>
        )
      } else {
        this.state.lockedQueueList.map((item, itemIdx)=> {
          let temp_play = Taro.getStorageSync(`play_id_${item.play_id}`)
          lockedQueueTabs.push(
            <View className='at-row queue-tab-info' onClick={this.manageLockedQueue.bind(this, itemIdx)}>
              <image src={tabbk} mode='widthFix' style='width:675rpx;z-index:-1;position:absolute;'></image>
              {/*  每个tab上信息显示 */}
              <View className='at-row play-pic-position-info' style='width:21vw'>
                <image className='play-pic-info' src={base+temp_play.play_img}>
                <text className='play-pic-label-info'>{temp_play.play_labels[0]}</text>
                </image>
              </View>
              <View className='at-col play-intro-info'>
                <View className='at-col play-name-position-info'>{temp_play.play_name}</View>
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
                {/* Button */}
                <image src={closedQueue} style='height:160rpx;width:160rpx;'></image>
              </View>
            </View>
          )
        })
        if (this.state.lockedQueueList.length == 0) {
          lockedQueueTabs.push(
            <View>
              <image src={emptyPic} style='width:675rpx;'></image>
            </View>
          )
        }
      }

      return (
        <View className='queueInfoPage'>
          <image src={bk} style='width:100vw;height:100vh;position:absolute;size:100%;z-index:-1;'></image>
          <View className='at-col' style={{padding: `${top_height_rpx}rpx 0rpx 0rpx 0rpx`}}>
            <AtNavBar className='nav-bar-info'
                onClickLeftIcon={this.handleNavBack}
                color='#ffff'
                leftIconType='chevron-left'
                ><View style='color:#fff;font-size:18px'>车队管理</View></AtNavBar>
            
            <AtTabs /* TODO: 这部分需要重构，红点没实现，列表不同日期显示不同灰度也没实现 */
                className='tabs-info'
                current={this.state.current}
                scroll
                tabList={[
                  { title: '在拼车队'},
                  { title: '完成车队'}
                ]}
                onClick={this.handleClick.bind(this)}>
              
              <AtTabsPane current={this.state.current} index={0}>
                <View style="background:#FEF9F4;">
                <AtTabs /* TODO: 这部分需要重构，红点没实现，列表不同日期显示不同灰度也没实现 */
                  className='day-tabs-info'
                  current={this.state.currentDay}
                  scroll
                  tabList={tabInfoList}
                  onClick={this.handleDayTabsClick.bind(this)}>

                  {dayQueueTabs}

                </AtTabs>
                </View>
              </AtTabsPane>

              <AtTabsPane current={this.state.current} index={1}>
              <View style="background:#FEF9F4;">
              <ScrollView
                className='scrollview'
                scrollY
                scrollWithAnimation
                show-scrollbar='false'
                scrollTop={scrollTop}
                style={newScrollStyle}
                lowerThreshold={Threshold}
                upperThreshold={Threshold}
                onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
                onScroll={this.onScroll}
                >
                {lockedQueueTabs}

              </ScrollView>
              </View>
              </AtTabsPane>
            </AtTabs>
          </View>
        </View>
      )
    }
  }
}
