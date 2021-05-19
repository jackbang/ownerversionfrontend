import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, ScrollView } from '@tarojs/components'
import { AtButton, AtTabs, AtTabsPane, AtActivityIndicator, AtIcon } from 'taro-ui'
import './storeMainPage.scss'

import bk from '../../img/image-13.png'
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


import { test_get_queues } from '../../service/api'
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
      queueListIdx: [],
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
        infoLoading: false
      })
    })
  }

  componentDidHide () { }

  handleClick (value) {
    this.setState({
      current: value
    })
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
      height: `${windowHeight_rpx-top_height_rpx-20-170-50-20-170-80-180-80}rpx`
    }

    let queuesInfo = [];
    let lockedQueueInfo = [];

    if (this.state.queueList.length == 0) {
      queuesInfo.push(
        <image src={emptyPic} style='width:675rpx;'></image>
      )

      lockedQueueInfo.push(
        <image src={emptyPic} style='width:675rpx;'></image>
      )
    } else {
      this.state.queueList.map((item, itemIdx) => {
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

        if (item.queue_status == 1) {
          // 将item加入锁局中
          lockedQueueInfo.push(
            <View className='at-row queue-tab-info' >
              <image src={tabbk} mode='widthFix' style='width:675rpx;z-index:-1;position:absolute;'></image>
              {/*  每个tab上信息显示 */}
              <View className='at-row play-pic-position-info' style='width:21vw'>
                <image className='play-pic-info' src={base+temp_play_info.play_pic}>
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
                {/* Button */}
                <image src={closedQueue} style='height:160rpx;width:160rpx;'></image>
              </View>
            </View>
          )
        } else {
          if (temp_play_info.play_headcount == item.queue_current_num){
            queuesInfo.push(
              <View className='at-row queue-tab-info' >
                <image src={tabbk} mode='widthFix' style='width:675rpx;z-index:-1;position:absolute;'></image>
                {/*  每个tab上信息显示 */}
                <text style='background-color:rgba(252, 95, 47, 0.5);position:absolute;right:37.5rpx;;font-size:24rpx;padding:10rpx;border-radius:0 20rpx 0 20rpx;'>已拼满</text>
                <View className='at-row play-pic-position-info' style='width:21vw'>
                  <image className='play-pic-info' src={base+temp_play_info.play_pic}>
                  <text className='play-pic-label-info'>{temp_play_info.play_labels[0]}</text>
                  </image>
                </View>
                <View className='at-col play-intro-info'>
                  <View className='at-col play-name-position-info'>{temp_play_info.play_name}</View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row play-time-position-info'><text decode="{{true}}">{item.queue_end_time}</text></View>
                      <View className='at-row play-headcount-position-info'>
                        <View className='play-headcount-info'><text decode="{{true}}">人数：{item.queue_current_num}/{temp_play_info.play_headcount}</text></View>
                        {male_female_display}
                      </View>
                    </View>
                    <View className='at-row' style='width:20vw;margin-right:20rpx;'>
                      {/* Button */}
                      <AtButton type='primary' circle='true' className='confirm-button' onClick={console.log("邀请好友")}>确认锁局</AtButton>
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
              <View className='at-row queue-tab-info' >
                <image src={tabbk} mode='widthFix' style='width:675rpx;z-index:-1;position:absolute;'></image>
                {/*  每个tab上信息显示 */}
                <text style='background-color:rgba(252, 166, 47, 0.5);position:absolute;right:37.5rpx;;font-size:24rpx;padding:10rpx;border-radius:0 20rpx 0 20rpx;'>未拼满</text>
                <View className='at-row play-pic-position-info' style='width:21vw'>
                  <image className='play-pic-info' src={base+temp_play_info.play_pic}>
                  <text className='play-pic-label-info'>{temp_play_info.play_labels[0]}</text>
                  </image>
                </View>
                <View className='at-col play-intro-info'>
                  <View className='at-col play-name-position-info'>{temp_play_info.play_name}</View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row play-time-position-info'><text decode="{{true}}">{item.queue_end_time}</text></View>
                      <View className='at-row play-headcount-position-info'>
                        <View className='play-headcount-info'><text decode="{{true}}">人数：{item.queue_current_num}/{temp_play_info.play_headcount}</text></View>
                        {male_female_display}
                      </View>
                    </View>
                    <View className='at-row' style='width:20vw;margin-right:20rpx;'>
                      {/* Button */}
                      <AtButton type='primary' circle='true' className='confirm-button' onClick={console.log("邀请好友")}>确认锁局</AtButton>
                    </View>
                  </View>
                  <View className='at-col' style='margin-top:2%;'>
                    <text style='font-size:24rpx;font-weight:550;'>房间：默认</text>
                  </View>
                </View>
              </View>
            )
          }
        }
      })
      if (lockedQueueInfo.length == 0){
        lockedQueueInfo.push(
          <image src={emptyPic} style='width:675rpx;'></image>
        )
      }
      if (queuesInfo.length == 0) {
        queuesInfo.push(
          <image src={emptyPic} style='width:675rpx;'></image>
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
          <View style={{paddingTop:`${top_height_rpx+20}rpx`, height:`50rpx`}}>
            <text style='color:#FEFFFF;font-size:18px;'>首页</text>
          </View>
            
          <View style='padding-top:20rpx;height:150rpx;width:100vw;'>
            <image mode='heightFix' src={storebk} style='height:300rpx;width:660rpx;position:relative;left:45rpx;'></image>
            <View style='height:200rpx;width:600rpx;position:relative;top:-260rpx;left:75rpx;display:flex;align-items:flex-start;justify-content:flex-start'>
              <image src={base+this.state.storeInfo.store_logo} style='height:200rpx;width:200rpx;'></image>
              <View style='display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-left:20rpx;'>
                <text style='height:50rpx;width:360rpx;font-size:36rpx;font-weight:600;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{this.state.storeInfo.store_name}</text>
                <View style='height:60rpx;display:flex;align-items:center;justify-content:flex-start;'>
                  <image src={certIcon} style='height:30rpx;width:30rpx;'></image>
                  <text style='font-size:20rpx;margin-left:5rpx;background:rgba(139, 111, 73, 1);color: rgba(255, 255, 255, 1);padding: 3rpx 5rpx;'>待认证</text>
                </View>
                <text style='height:50rpx;width:360rpx;font-size:24rpx;font-weight:530;'>店铺ID：{this.state.storeInfo.store_id}</text>
                <text style='height:50rpx;width:360rpx;font-size:24rpx;font-weight:530;'>管理员：{this.state.adminInfo.nickName}</text>
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
  
            <View style={{height:`180rpx`, width:`660rpx`, display:`flex`, alignItems:`center`, justifyContent:`flex-start`, marginTop:`20rpx`}}>
              <View style='display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;'>
                <View style='background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;'>
                  <image src={storeIcon} style='height:30px;width:30px;'></image>
                </View>
                <text style='font-size:12px;font-weight:400;margin-top:10%;'>店铺管理</text>
              </View>
  
              <View style='width:40rpx;'></View>
  
              <View style='display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;'>
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
  
              <View style='display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;'>
                <View style='background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;'>
                  <image src={queueIcon} style='height:30px;width:30px;'></image>
                </View>
                <text style='font-size:12px;font-weight:400;margin-top:10%;'>车队管理</text>
              </View>
  
              <View style='width:40rpx;'></View>
  
              <View style='display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;'>
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
